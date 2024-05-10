// import React from 'react'
import "./phones.css";
import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h3>All phones Here</h3>
      <div className="phone-grid">

      {phones.map((phone) => (
        <div key={phone.id} style={{border: '2px solid black', borderRadius: '15px', padding: '15px'}}>
          <li>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </li>
          <h3>phone name: {phone.name}</h3>
          <h3>phone price: {phone.price}</h3>
          <h3>phone description: {phone.description}</h3>
          <img src={phone.image} alt="phone image" />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Phones;
