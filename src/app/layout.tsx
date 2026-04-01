import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";
import SuppressHydrationWarnings from "@/components/suppress-hydration-warnings";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const metaDescription =
  "Creative Computing student and web developer building full-stack projects, Figma prototypes, and everything in between.";

const metaKeywords = [
  "skz",
  "Web Developer",
  "LLM Fine-tuning",
  "RAG",
  "PEFT QLoRA",
  "High-Performance AI",
  "Systems Engineer",
  "Autonomous Agents",
  "Machine Learning",
  "Deep Learning",
];

export const metadata: Metadata = {
  title: "skz | Creative Computing",
  description: metaDescription,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "skz | Creative Computing",
    description: metaDescription,
    url: "https://skz.dev/",
    type: "website",
    images: [
      {
        url: "https://skz.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "skz | Creative Computing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "skz | Creative Computing",
    description: metaDescription,
  },
  authors: [
    { name: "skz", url: "https://skz.dev/" },
  ],
  keywords: metaKeywords,
  creator: "skz",
  publisher: "skz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "xyz",
    url: "https://skz.dev/",
    jobTitle: "Creative Computing Student · Web Developer",
    sameAs: [
      "https://github.com/pragnyanramtha",
      "https://www.linkedin.com/in/pragnyanramtha",
    ],
    description: metaDescription,
  };

  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords.join(", ")} />
        <link rel="canonical" href="https://skz.dev/" />
        <meta name="author" content="xyz" />
        <meta name="darkreader-lock" content="darkreader-inline-stroke darkreader-inline-fill" />
      </head>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
        suppressHydrationWarning
      >
        <SuppressHydrationWarnings />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {process.env.NEXT_PUBLIC_VERCEL_ENV && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
