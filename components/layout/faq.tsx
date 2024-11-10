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
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Card key={index} className="transition-all duration-300 ease-in-out hover:scale-105">
            <CardHeader>
              <CardTitle>{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}