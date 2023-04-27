import Card from '@/component/Card'
import React from 'react'

export default function Slug(props) {
  return (
    <>
      <Card {...props}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const res = await fetch(`http://localhost:5000/products/${id}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
