"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"


export function SocialMedia() {
  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4 duration-200 ease-in-out hover:scale-105">
      <div className="bg-[#FFC600] rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-[#F5E1A4] m-1 rounded-3xl p-8">
          <h2 className="mb-8 text-5xl font-bold text-center bg-gradient-to-b from-[#212721] to-[#63666A] bg-clip-text text-transparent">
            Connect With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SocialCard icon={<Instagram size={48} />} title="Instagram" url="https://www.instagram.com/mvhs.tech/" />
            <SocialCard icon={<Linkedin size={48} />} title="LinkedIn" url="https://www.linkedin.com/company/mvhs-principal-s-tech-internship/?viewAsMember=true" />
          </div>
        </div>
      </div>
    </div>
  )
}

interface SocialCardProps {
  icon: React.ReactNode
  title: string
  url: string
}

function SocialCard({ icon, title, url }: SocialCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Card className="bg-[#FFC600] border-none shadow-inner transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 group">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="text-[#212721] transition-transform duration-300 ease-in-out group-hover:scale-110">
            {icon}
          </div>
          <h3 className="mt-4 text-2xl font-bold text-[#212721]">{title}</h3>
          {/* <p className="mt-2 text-[#63666A] group-hover:underline center">{url}</p> */}
        </CardContent>
      </Card>
    </Link>
  )
}

