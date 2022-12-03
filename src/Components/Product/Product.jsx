import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product(){

    const {prodId} = useParams();
    console.log(prodId)

    useEffect(()=>{
        getRestaurant();
    })

    const getRestaurant=()=>{
        let url = `https://staging.fastor.in/v1/m/restaurant?restaurant_id=${prodId}`;
        axios.get('')
    }
    return(
    <h2>Product page</h2>
    );
}