import React from 'react'

interface Text {
  text: string
}

const Home = ({ text }: Text) => (
  <>
    <h1>{text}</h1>
    <h2>123</h2>
  </>
)

export default Home
