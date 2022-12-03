import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

export default function Login() {

    const[number, setnumber] = useState("");
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
                e.preventDefault();
                localStorage.setItem("mobile", number);
                let payload={
                    phone : number,
                    dial_code : '+91'
                }
                let url = 'https://staging.fastor.in/v1/pwa/user/register';
                axios.post(url, payload).
                then((res)=>console.log(res)).
                catch((err)=>console.log(err)).
                finally((res)=> navigate("/verify"));
                
    }
    return (
        <div className={styles.MainDiv}>
            <form action="submit" className={styles.form}>
                <label htmlFor="">Enter Your Mobile Number</label>
                <label htmlFor="" className={styles.smlabel}>We will send you the 4 digit verification conde</label>
                <input value={number} onChange={(e)=>setnumber(e.target.value)} type="number" placeholder="Enter Mobile No."/> 
                <button onClick={handleSubmit} className={styles.SubmitBtn} type="submit">
                    Send Code
                </button>
            </form>
        </div>

    );
}