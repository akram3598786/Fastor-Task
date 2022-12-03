import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Product.module.css";

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
        <>
        <h2>Product page</h2>
        <div className={styles.ProductDiv}>
         
          <div><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" /></div>
        </div>
        </>
    

    );
}