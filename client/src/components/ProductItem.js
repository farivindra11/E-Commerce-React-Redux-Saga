import React from 'react'
import StarRatings from 'react-star-ratings';
import numToRupiah from '../helpers/rupiah'
import {Link} from "react-router-dom";

export default function ItemProduct(props) {

    return (
        <div className="card col-10 col-md-3 mx-3 my-3 card-custom text-center" >
            <img className=" card-img-top rounded mx-auto d-block img-custom mt-3" src={props.image} alt={props.title}/>
            <div className=" card-body ">
                <h3 className="card-title font-weight-bold">{props.title}</h3>
                <StarRatings
                    rating={props.rate}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                />
                <p className="card-text">{props.description}</p>
                <h2>{numToRupiah(props.price)}</h2>
            </div>
            <div className="card-footer"></div>
            <Link to={`/detail/${props.id}`} className=" btn btn-primary w-50 text-custom mx-auto mb-3">Detail Item</Link>
        </div>

    )


}