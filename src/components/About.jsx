import React from 'react'

const Image = ({src="https://via.placeholder.com/215", alt}) => {
  return (
    <img src={src} alt={ alt } />
  )
}

const About = ({image, about}) => {
  return (
    <div>
      <aside>
        <Image src={image} alt="blog logo" />
        <p>{about}</p>
      </aside>
    </div>
  )
}

export default About