import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Homepage.module.css";
import {Link} from "react-router-dom";


export default function Hompage() {

    const [loading, setloading] = useState(false);
    const [Error, setError] = useState(false);
    const [data, setdata] = useState([]);

    useEffect(() => {
         setloading(true);
         getRestaurants();
    }, []);

    const getRestaurants = () => {

          // let url = 'https://staging.fastor.in/v1/m/restaurant';
        let url = `https://staging.fastor.in/v1/m/restaurant`;
        let token = localStorage.getItem("token");
        const authAxios = axios.create({
            baseURL : url,
            headers :{
                Authorization : `Bearer ${token}`,
            }
        });

        authAxios.get(url).
            then((res) => setdata(res.data)).
            catch((err) => setError(true)).
            finally((res) => setloading(false));
    }

    return (
        <div className={styles.ProdctsDiv}>

            <div className={styles.container}>
                <h3>All Restaurants</h3>
                <hr />

                {loading ? <h3>Loading...</h3> :
                    Error ? <h3 style={{ color: 'red' }}>Something went wrong</h3> :
                        (<div>
                            {
                                data.map((rest) => {
                                    return <Link key={rest.restaurant_id} style={{ textDecoration: 'none', color:'black' }} to={`/${rest.restaurant_id}`}>
                                    <div  className={styles.RestaurantCard}>
                                         <div className={styles.left_of_card}>
                                            {/* <div><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" /></div> */}
                                            <div><img src={rest.images[0].url} alt="" /></div>
                                         </div>
                                         <div className={styles.right_of_card}>
                                            <h3>{rest.restaurant_name}</h3>
                                            <p>Cake,Pastry,Pastas</p>
                                            <p>Canaught Place, New delhi</p>
                                         </div>
                                    </div>
                                    </Link>
                                })
                            }
                        </div>)

                }

            </div>
        </div>
    );
}