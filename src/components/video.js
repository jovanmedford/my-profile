import React from "react"
import "twin.macro"
export const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div tw="text-center inline-block" className="video">
    <iframe
      tw="inline w-full h-72 my-4"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
