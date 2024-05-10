// import React from 'react'

import { useLoaderData } from "react-router-dom"

const SinglePhone = () => {
    const phones = useLoaderData();
    console.log(phones)
  return (
    <div style={{ padding: '0 300px 0 300px'}}>
        <h3>phone name: {phones.name}</h3>
        <h3>phone price: {phones.price}</h3>
        <h3>phone description: {phones.description}</h3>
        <img src={phones.image} alt="" />
    </div>
  )
}

export default SinglePhone