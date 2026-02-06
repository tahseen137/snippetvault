import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnippetVault - Beautiful Code Snippet Manager",
  description: "Save, organize, and share your code snippets with syntax highlighting. Like GitHub Gists, but simpler and prettier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
