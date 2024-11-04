'use client'

import React from 'react';
import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface VideoItem {
  title: string;
  description: string;
  videoId: string;
}

interface SlideshowItem {
  title: string;
  description: string;
  embedLink: string;
}

const videos: VideoItem[] = [
  { title: "Aeries Overview", description: "Learn the basics of Aeries", videoId: "Xaqq6XtSCHs" },
  { title: "Checking Active Grades", description: "How to view and understand your grades", videoId: "Xaqq6XtSCHs" },
  { title: "Checking Transcript", description: "How to find and understand your transcript", videoId: "Xaqq6XtSCHs" },
];

const slideshows: SlideshowItem[] = [
  {
    title: "Submitting Assignments",
    description: "Step-by-step guide",
    embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
  },
  {
    title: "Submitting Assignments",
    description: "Step-by-step guide",
    embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
  },
  {
    title: "Submitting Assignments",
    description: "Step-by-step guide",
    embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
  }
];

export default function StudentSupport() {

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
              <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]">
                Aeries Support
              </h1>
              <p className="mt-4 text-black [text-wrap:balance] md:text-xl">
                Tech support and resources for students, including Aeries, Canvas, and Minga.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/spartan.png"
                alt="MVHS Spartan Logo"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="slideshows">Slideshows</TabsTrigger>
            </TabsList>
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                  <Card key={index} className="transition-all duration-300 ease-in-out hover:scale-105">
                    <CardHeader>
                      <CardTitle>{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full">
                        <YouTube
                          videoId={video.videoId}
                          opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: { autoplay: 0 },
                          }}
                          style={{
                            maxWidth: '100%',
                            aspectRatio: '16/9',
                          }}
                        />
                      </div>
                      <p className="mt-4">{video.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="slideshows">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {slideshows.map((slideshow, index) => (
                  <Card key={index} className="transition-all duration-300 ease-in-out hover:scale-105">
                    <CardHeader>
                      <CardTitle>{slideshow.title}</CardTitle>
                      <CardDescription>{slideshow.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video">
                        <iframe
                          src={slideshow.embedLink}
                          width="100%"
                          height="100%"
                          allowFullScreen={true}
                        ></iframe>
                      </div>
                      <p className="mt-4">Learn how to {slideshow.description.toLowerCase()}.</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transition-all duration-300 ease-in-out hover:scale-105">
                <CardHeader>
                  <CardTitle>How do I reset my password?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Contact your school's IT department or use the password reset feature on the login page.</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:scale-105">
                <CardHeader>
                  <CardTitle>What if I can't access my account?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Reach out to your teacher or the school administration for assistance with account access issues.</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:scale-105">
                <CardHeader>
                  <CardTitle>How often are grades updated?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Grade updates vary by teacher. Check with your individual teachers for their update schedules.</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:scale-105">
                <CardHeader>
                  <CardTitle>Can parents access these platforms?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Yes, parents can access Aeries and Canvas with their own accounts. Contact the school for setup.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-16 mb-16">
            <h2 className="text-3xl font-bold mb-8">Need More Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="transition-all duration-300 ease-in-out hover:scale-105">
                <CardHeader>
                  <CardTitle>IT Support</CardTitle>
                  <CardDescription>Technical issues and account problems</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Contact IT Support
                  </Button>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:scale-105">
                <CardHeader>
                  <CardTitle>Academic Counseling</CardTitle>
                  <CardDescription>Grade concerns and academic planning</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:scale-105">
                <CardHeader>
                  <CardTitle>Tutorial Videos</CardTitle>
                  <CardDescription>Step-by-step guides for all platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Watch Tutorials
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <div className="z-10 w-full mt-16">
          <Footer />
        </div>
      </main>
    </>
  );
}