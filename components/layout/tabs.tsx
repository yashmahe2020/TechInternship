'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import YouTube from 'react-youtube'
import { useMemo } from 'react'

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

interface ContentDisplayProps {
  videos: VideoItem[]
  slideshows: SlideshowItem[]
}

type InterleavedItem = 
  | { type: 'slideshow'; content: SlideshowItem }
  | { type: 'video'; content: VideoItem }

export function ContentTabs({ videos, slideshows }: ContentDisplayProps) {
  const interleavedContent = useMemo(() => {
    const maxLength = Math.max(videos.length, slideshows.length)
    const interleaved: InterleavedItem[] = []

    for (let i = 0; i < maxLength; i++) {
      if (i < slideshows.length) {
        interleaved.push({ type: 'slideshow', content: slideshows[i] })
      }
      if (i < videos.length) {
        interleaved.push({ type: 'video', content: videos[i] })
      }
    }

    return interleaved
  }, [videos, slideshows])

  return (
    <div className="space-y-16 mx-auto max-w-4xl">
      {interleavedContent.map((item, index) => (
        <Card key={index} className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          {item.type === 'slideshow' && (
            <>
              <CardHeader>
                <CardTitle>{item.content.title}</CardTitle>
                <CardDescription>{item.content.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe
                    src={item.content.embedLink}
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <p className="mt-4">Learn how to {item.content.description.toLowerCase()}.</p>
              </CardContent>
            </>
          )}
          {item.type === 'video' && (
            <>
              <CardHeader>
                <CardTitle>{item.content.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <YouTube
                    videoId={item.content.videoId}
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
                <p className="mt-4">{item.content.description}</p>
              </CardContent>
            </>
          )}
        </Card>
      ))}
    </div>
  )
}