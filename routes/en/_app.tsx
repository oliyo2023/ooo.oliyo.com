import { type PageProps } from "$fresh/server.ts";
export default function AppEn({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0f0b1a" />
        <meta name="description" content="AI BaZi astrology platform blending traditional metaphysics with large language models for instant natal charts and guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Oriental Astrology" />
        <meta property="og:locale" content="en_US" />
        <title>Oriental Astrology · AI BaZi Insights</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body style="background-image: url(/background.svg); background-size: cover; background-repeat: no-repeat;">
        <Component />
      </body>
    </html>
  );
}
