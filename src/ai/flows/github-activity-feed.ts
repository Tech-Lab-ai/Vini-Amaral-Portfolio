'use server';

/**
 * @fileOverview Este arquivo define um fluxo Genkit para buscar e classificar as issues do repositório CloudForge-CLI.
 *
 * O fluxo utiliza a API do GitHub para recuperar issues recentes e, em seguida, utiliza um LLM para classificar
 * cada item em um resumo legível e informativo.
 *
 * @exports {
 *   classifyGithubActivity,
 *   GithubActivityInput,
 *   GithubActivityOutput
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GithubActivityInputSchema = z.object({
  owner: z.string().describe('O proprietário do repositório (ex: Tech-Lab-ai).'),
  repo: z.string().describe('O nome do repositório (ex: CloudForge-CLI).'),
});
export type GithubActivityInput = z.infer<typeof GithubActivityInputSchema>;

const GithubActivityOutputSchema = z.array(z.string().describe('Uma classificação legível de uma issue ou atividade do GitHub.'));

export type GithubActivityOutput = z.infer<typeof GithubActivityOutputSchema>;

export async function classifyGithubActivity(input: GithubActivityInput): Promise<GithubActivityOutput> {
  return githubActivityFlow(input);
}

const githubActivityPrompt = ai.definePrompt({
  name: 'githubActivityPrompt',
  input: {
    schema: z.object({
      activity: z.string().describe('Uma issue do Github, representada como uma string JSON.')
    })
  },
  output: {schema: z.string().describe('Uma classificação legível da issue.')},
  prompt: `Você é um assistente técnico. Classifique a seguinte issue (problema/tarefa) do GitHub em um resumo curto, técnico e amigável em português:

  Issue Item:
  {{activity}}

  Responda apenas com o resumo, focando no que está sendo discutido ou resolvido.`,
});

const githubActivityFlow = ai.defineFlow(
  {
    name: 'githubActivityFlow',
    inputSchema: GithubActivityInputSchema,
    outputSchema: GithubActivityOutputSchema,
  },
  async input => {
    const { owner, repo } = input;
    const githubApiUrl = `https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=10`;

    try {
      const response = await fetch(githubApiUrl, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      
      const issues = await response.json();

      if (!Array.isArray(issues)) {
        throw new Error('Resposta inesperada da API do GitHub: não é um array.');
      }

      const classifications: string[] = [];
      for (const issue of issues) {
        try {
          // Simplificamos o objeto para o prompt não ficar gigante
          const simplifiedIssue = {
            title: issue.title,
            state: issue.state,
            user: issue.user.login,
            created_at: issue.created_at,
            body: issue.body?.substring(0, 200) // apenas o início do corpo
          };

          const {output} = await githubActivityPrompt({activity: JSON.stringify(simplifiedIssue)});
          classifications.push(output!);
        } catch (error) {
          console.error('Erro ao classificar issue:', error);
          classifications.push('Falha ao classificar atividade.');
        }
      }

      if (classifications.length === 0) {
        return ["Nenhuma issue recente encontrada neste repositório."];
      }

      return classifications;
    } catch (error) {
      console.error('Erro ao buscar issues do GitHub:', error);
      return ["Não foi possível carregar o feed de desenvolvimento no momento."];
    }
  }
);
