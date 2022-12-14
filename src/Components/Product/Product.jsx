import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Product.module.css";

export default function Product() {

    const [prod, setprod] = useState([]);
    const [ResData, setResData] = useState({});
    const { prodId } = useParams();
    // console.log(prodId)

    useEffect(() => {
        getRestaurant();
    }, [])

    const getParticular=(Data)=>{    
        let filtered = Data.filter((rest)=>rest.restaurant_id === prodId);
        setResData(filtered[0]);
    }

    const getRestaurant = () => {

        let url = `https://staging.fastor.in/v1/m/restaurant?city_id=118&&m_id=${prodId}`; // Not working
        let token = localStorage.getItem("token");
        const authAxios = axios.create({
            baseURL: url,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        authAxios.get(url).
            then((res) => getParticular(res.data)).
            catch((err) => console.log(err));
    }

    // console.log(ResData)
    //  console.log(ResData)
    
    return (
        <>
            <h2>Product page</h2>
            {ResData.images ?
            <div className={styles.ProductDiv}>
                <div>
                    <img src={ResData.images[0].url} alt="" />
                    <p>{ResData.restaurant_name}</p>
                    {ResData.is_close ? <p> Closed</p> : <p>Open</p>}
                </div>
            </div> : null}
        </>
    );
}