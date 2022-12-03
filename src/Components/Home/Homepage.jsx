import styles from "./Homepage.module.css";

export default function Hompage(){

    const getRestaurants=()=>{
        let url = 'https://app.getpostman.com/run-collection/07b2a0d5654e6a42cc5f';
    }

    return(
      <div className={styles.ProdctsDiv}>
           
           <div className={styles.container}>
              <h3>All Restaurants</h3>
           </div>
      </div>
    );
}