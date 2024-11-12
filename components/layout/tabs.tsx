'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import YouTube from 'react-youtube'

interface VideoItem {
  title: string
  description: string
  videoId: string
}

interface SlideshowItem {
  title: string
  description: string
  embedLink: string
}

interface ContentTabsProps {
  videos: VideoItem[]
  slideshows: SlideshowItem[]
}

export function ContentTabs({ videos, slideshows }: ContentTabsProps) {
  return (
    <Tabs defaultValue="videos" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="videos" className="text-lg font-semibold py-3">Videos</TabsTrigger>
        <TabsTrigger value="slideshows" className="text-lg font-semibold py-3">Slideshows</TabsTrigger>
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
  )
}