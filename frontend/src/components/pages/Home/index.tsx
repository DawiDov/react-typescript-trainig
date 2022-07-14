import React from 'react'

interface Text {
  text: string
}

const Home = ({ text }: Text) => (
  <h1>{text}</h1>
)

export default Home
