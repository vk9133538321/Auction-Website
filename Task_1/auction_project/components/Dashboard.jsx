import { useState } from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import house from './Assests/house.jpg'
import car from './Assests/car.jpg'
import painting from './Assests/painting.jpg'



function Dashboard() {
  let auctionItems= [
    {id:1, title:"House", price:"₹8000000", image: house},
    {id:2, title:"car", price:"₹750000", image: car},
    {id:3, title:"painting", price:"₹50000", image: painting}
  ]

  return (
    <>
      <div className="container mt-5">
      <h1 className='text-center mb-4'>Welcome to the Auction House</h1>
      <p className='text-center'>Explore the latest auctions and place your bids!</p>
      <div className="row">
        {auctionItems.map(item =>
          (
            <div className='col-md-4 mb-4' key={item.id}>
              <div className='card shadow'>
              <img src={item.image} alt={item.title} className='card-img-top'/>
              <div className='card-body'>
              <h5 className='card-title'>{item.title}</h5>
              <p className="card-text">Starting Bid:{item.price}</p>
              <button className='btn btn-primary w-100'>Place Bid</button>
            </div>
            </div>
            </div>
          )
        )}
        
      </div>
    </div>
    </>
  )
}

export default Dashboard