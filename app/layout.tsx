import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css" // Import globals.css at the top of the file

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LakirKhan Fitness Tracker - Track Your Fitness Journey",
  description:
    "Professional fitness tracking app by LakirKhan. Monitor your workouts, track progress, and achieve your fitness goals with our modern, responsive platform.",
  keywords: "fitness tracker, workout tracking, health app, LakirKhan, fitness goals",
  authors: [{ name: "LakirKhan Team" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/watermelon-favicon.jpg" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
