'use server';

/**
 * @fileOverview This file defines a Genkit flow to fetch and classify Vini Amaral's latest GitHub activity.
 *
 * The flow uses the GitHub API to retrieve recent events, then uses an LLM to classify
 * each event into a broad, human-readable summary.
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
  username: z.string().describe('The GitHub username to fetch activity for.'),
});
export type GithubActivityInput = z.infer<typeof GithubActivityInputSchema>;

const GithubActivityOutputSchema = z.array(z.string().describe('A human-readable classification of a GitHub activity item.'))

export type GithubActivityOutput = z.infer<typeof GithubActivityOutputSchema>;

export async function classifyGithubActivity(input: GithubActivityInput): Promise<GithubActivityOutput> {
  return githubActivityFlow(input);
}

const githubActivityPrompt = ai.definePrompt({
  name: 'githubActivityPrompt',
  input: {schema: z.object({
    activity: z.string().describe('A Github activity item, represented as a JSON string.')
  })},
  output: {schema: z.string().describe('A human-readable classification of a GitHub activity item.')},
  prompt: `Classify the following GitHub activity item into a broad, human-readable summary:

  Github Activity Item:
  {{activity}}`,
});

const githubActivityFlow = ai.defineFlow(
  {
    name: 'githubActivityFlow',
    inputSchema: GithubActivityInputSchema,
    outputSchema: GithubActivityOutputSchema,
  },
  async input => {
    const githubUsername = input.username;
    const githubApiUrl = `https://api.github.com/users/${githubUsername}/events/public`;

    try {
      const response = await fetch(githubApiUrl);
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }
      const activities = await response.json();

      if (!Array.isArray(activities)) {
        throw new Error('Unexpected response from GitHub API: not an array.');
      }

      // Limit to the 10 most recent activities for brevity
      const recentActivities = activities.slice(0, 10);

      const classifications: string[] = [];
      for (const activity of recentActivities) {
        try {
          const {output} = await githubActivityPrompt({activity: JSON.stringify(activity)});
          classifications.push(output!);
        } catch (error) {
          console.error('Error classifying GitHub activity:', error);
          classifications.push('Failed to classify activity.');
        }
      }

      return classifications;
    } catch (error) {
      console.error('Error fetching GitHub activity:', error);
      return ["Failed to fetch Github activity"];
    }
  }
);
