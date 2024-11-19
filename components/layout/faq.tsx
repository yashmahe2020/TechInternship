import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4 duration-200 ease-in-out hover:scale-105">
      <div className="bg-[#FFC600] rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-[#F5E1A4] m-1 rounded-3xl p-8">
          <h2 className="mb-8 text-5xl font-bold text-center mb-6 bg-gradient-to-b from-[#212721] to-[#63666A] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-[#FFC600] border-none shadow-inner transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-[#212721]">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#212721]">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}