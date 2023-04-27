
import Cards from '@/component/Cards'
import React from 'react'
export default function Home(props) {
  return (
    <>
      <Cards {...props}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

