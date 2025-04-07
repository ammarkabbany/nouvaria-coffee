import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Novaria Coffee",
  description:
    "Explore our catering, event hosting, and wholesale services at Novaria Coffee. Bring authentic Syrian coffee culture to your events and business.",
}

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

