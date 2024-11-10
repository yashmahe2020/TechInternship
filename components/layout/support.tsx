'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SupportSection() {
  const handleITSupport = () => {
    // Add your IT support contact logic here
    console.log("Contacting IT Support")
  }

  const handleScheduleAppointment = () => {
    // Add your appointment scheduling logic here
    console.log("Scheduling Appointment")
  }

  const handleWatchTutorials = () => {
    // Add your tutorial video navigation logic here
    console.log("Watching Tutorials")
  }

  return (
    <section className="mt-16 mb-16">
      <h2 className="text-3xl font-bold mb-8">Need More Help?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SupportCard
          title="IT Support"
          description="Technical issues and account problems"
          buttonText="Contact IT Support"
          onClick={handleITSupport}
        />
        <SupportCard
          title="Academic Counseling"
          description="Grade concerns and academic planning"
          buttonText="Schedule Appointment"
          onClick={handleScheduleAppointment}
        />
        <SupportCard
          title="Tutorial Videos"
          description="Step-by-step guides for all platforms"
          buttonText="Watch Tutorials"
          onClick={handleWatchTutorials}
        />
      </div>
    </section>
  )
}

interface SupportCardProps {
  title: string
  description: string
  buttonText: string
  onClick: () => void
}

function SupportCard({ title, description, buttonText, onClick }: SupportCardProps) {
  return (
    <Card className="transition-all duration-300 ease-in-out hover:scale-110">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full" onClick={onClick}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}