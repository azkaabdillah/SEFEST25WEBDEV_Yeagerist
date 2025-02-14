import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className="card-wrap col-md-4">
      <Link className='card-content' to={props.target}>
        <div className="card-item">
          <img className="img-fluid justify-content-center" src={props.img} alt="" />
          <div className="overlay"></div> 
        </div>
        <div className="card-name">
          <h5 className='name'>{props.name}</h5>
        </div>
      </Link>
    </div>
  )
}

export default Item