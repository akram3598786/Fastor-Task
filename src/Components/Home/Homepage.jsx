import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Homepage.module.css";
import {Link} from "react-router-dom";

let defaultRestaurant =
[
{
    "restaurant_id": "28",
    "lead_id": "25",
    "restaurant_name": "Fashion Store",
    "avg_cost_for_two": 250,
    "avg_order_cost": null,
    "avg_daily_order_count": null,
    "rating": {
        "restaurant_avg_rating": 4,
        "count": 1,
        "all": {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 1,
            "5": 0
        }
    },
    "currency": {
        "symbol": "₹"
    },
    "table_count": 0,
    "does_bookings": false,
    "location_id": "1",
    "e_type_id": "19",
    "restaurant_uuid": "f1765127-0af1-4b42-8cd8-793db3cb8dc2",
    "image": null,
    "restaurant_mode": "NON_DINE_IN",
    "opens_at": "09:30:00",
    "closes_at": "21:30:00",
    "qr_active": false,
    "address_complete": "null",
    "is_close": false,
    "is_close_cafeteria": null,
    "status": null,
    "merchant_payment_methods": [
        "cash"
    ],
    "social_profiles": null,
    "logo": null,
    "next_closes_at": null,
    "next_opens_at": null,
    "free_trial_eligiblity": true,
    "points": "70000",
    "active": true,
    "free_tier_expire_at": null,
    "refer_responded": true,
    "active_plan": "PREMIUM",
    "free_trial_expired": false,
    "created_at": "1648642077",
    "restaurant_code": "fashion-store",
    "noti_set": "A",
    "activated_at": null,
    "active_plan_id": null,
    "type_id": null,
    "m_id": "28",
    "location": {
        "location_id": 1,
        "location_address": "b1/2",
        "location_address_2": "model town",
        "location_zip_code": 110009,
        "location_lat": 1,
        "location_long": 1,
        "location_locality": "rohini",
        "city_name": "New Delhi",
        "state_name": "delhi",
        "city_id": null,
        "country_id": "103",
        "state_id": null,
        "update_count": "0"
    },
    "restaurant_type": null,
    "cuisines": [
        {
            "cuisine_id": 53,
            "cuisine_name": "sdfs",
            "restaurant_id": "28",
            "added_at": "2022-05-14T18:17:19.000Z",
            "is_visible": true,
            "is_deleted": false,
            "color": "#eee",
            "text_color": "#f09819",
            "image": null,
            "counter_id": null
        },
        {
            "cuisine_id": 34,
            "cuisine_name": "Men wear",
            "restaurant_id": "28",
            "added_at": "2022-03-31T13:34:32.712Z",
            "is_visible": true,
            "is_deleted": false,
            "color": "#eee",
            "text_color": "#f09819",
            "image": null,
            "counter_id": null
        },
        {
            "cuisine_id": 35,
            "cuisine_name": "Kids ",
            "restaurant_id": "28",
            "added_at": "2022-03-31T13:34:32.760Z",
            "is_visible": true,
            "is_deleted": false,
            "color": "#eee",
            "text_color": "#f09819",
            "image": null,
            "counter_id": null
        },
        {
            "cuisine_id": 36,
            "cuisine_name": "Innerwear and sleepwear ",
            "restaurant_id": "28",
            "added_at": "2022-03-31T13:34:32.812Z",
            "is_visible": true,
            "is_deleted": false,
            "color": "#eee",
            "text_color": "#f09819",
            "image": null,
            "counter_id": null
        },
        {
            "cuisine_id": 37,
            "cuisine_name": "Spring summer 2022",
            "restaurant_id": "28",
            "added_at": "2022-03-31T13:34:32.853Z",
            "is_visible": true,
            "is_deleted": false,
            "color": "#eee",
            "text_color": "#f09819",
            "image": null,
            "counter_id": null
        },
        {
            "cuisine_id": 33,
            "cuisine_name": "Women wear",
            "restaurant_id": "28",
            "added_at": "2022-03-31T13:34:32.651Z",
            "is_visible": true,
            "is_deleted": false,
            "color": "#eee",
            "text_color": "#f09819",
            "image": "https://res.cloudinary.com/fastorcloud/image/upload/v1652533813/india/restaurants/28/menu/dyjulcwouyhkzy8pt3fq.webp",
            "counter_id": null
        }
    ],
    "images": [
        {
            "url": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }
    ],
    "thumbnail_image": null,
    "cover_image": null,
    "small_image": null,
    "large_image": null
}
]

export default function Hompage() {

    const [loading, setloading] = useState(false);
    const [Error, setError] = useState(false);
    const [data, setdata] = useState(defaultRestaurant);

    useEffect(() => {
         setloading(true);
         getRestaurants();
    }, []);

    const getRestaurants = () => {

        // let url = 'https://staging.fastor.in/v1/m/restaurant?city_id=118&&';
        let refershedToken = localStorage.getItem("token");

        let url = 'https://staging.fastor.in/v1/m/restaurant';
       /* axios.get(url).
            then((res) => console.log(res.data)).
            catch((err) => setError(true)).
            finally((res) => setloading(false)); */

            fetch(url).
            then((res) => console.log(res)).
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
                                            <div><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" /></div>
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