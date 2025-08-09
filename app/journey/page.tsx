import { Hero } from "@/components/layout/hero";
import Timeline from "@/components/Timeline";
import Nav from "@/components/layout/nav";
import AutoScroll from "@/components/AutoScroll";

export default function TimelinePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <Nav />
      <div className="mt-20 w-full max-w-7xl mx-auto px-4">
        <Hero
          title="Our Journey"
          description="A timeline of our key dates and projects"
        />
        <div className="min-h-150%">
          <AutoScroll speed={0.5}>
            <Timeline />
          </AutoScroll>
        </div>
      </div>
      <div className="h-32 w-full"></div>
    </main>
  );
} 