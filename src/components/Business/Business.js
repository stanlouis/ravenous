import React, { Component } from 'react';
import "./Business.css";

const business = {
  imageSrc:
    'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

export default class Business extends Component {
  render() {
    return (
      <div class="Business">
        <div class="image-container">
          <img src={business.imageSrc} alt="MarginOtto Pizzeria image" />
        </div>
        <h2>{business.name}</h2>
        <div class="Business-information">
          <div class="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipCode}
            </p>
          </div>
          <div class="Business-reviews">
            <h3>ITALIAN</h3>
            <h3 class="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}
