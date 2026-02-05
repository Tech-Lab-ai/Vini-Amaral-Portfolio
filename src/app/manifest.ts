
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vini Amaral — Portfolio de Engenharia',
    short_name: 'Vini Amaral',
    description: 'Engenheiro de Software Sênior especializado em Cloud, IA e Sistemas Distribuídos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0b',
    theme_color: '#039be5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: 'https://picsum.photos/seed/vini-pwa-192/192/192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://picsum.photos/seed/vini-pwa-512/512/512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
