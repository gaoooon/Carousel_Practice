"use client";

import { Reset } from "styled-reset";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Reset />
        {children}
      </body>
    </html>
  );
}
