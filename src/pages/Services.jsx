import React from 'react'
import Banner from '../components/common/Banner'
import Index from '../components/Services'
import Content from '../components/Services/Content'

const data = [{
  title: "",
  content: `Cryptic Entertainments is an India-based production house focused on bringing the Indian tech story. We are continuously showcasing the new emerging tech stories out of India in new fields like Blockchain, AI, Metaverse etc.`,
  img: "/about/about2.jpeg",
  alt: "placeholder",
  alignContent:"left"
},{
  title: "",
  content: `Apart from bringing the tech story we also work with new-age tech brands along with D2C companies to bring the best versions of their stories.`,
  img: "/about/about3.jpeg",
  alt: "placeholder",
  alignContent:"right"
}];

export default function Services() {
  return (
    <div>
      <Banner title1={"Services"} />
      <Index />
      <Content data={data[0]} />
      <Content data={data[1]} />
    </div>
  )
}
