import React from 'react'

const page = ({ params }: { params: { numbers: string } }) => {
  return (
    <div>Hello from {params.numbers}</div>
  )
}

export default page