import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Auth.module.css";
import './OtpInput.css';
import axios from "axios";

export default function OTP() {

    useEffect(() => {
        alert("OTP : 123456");
    }, []);
    const [dig1, setdig1] = useState("");
    const [dig2, setdig2] = useState("");
    const [dig3, setdig3] = useState("");
    const [dig4, setdig4] = useState("");
    const [dig5, setdig5] = useState("");
    const [dig6, setdig6] = useState("");

    const [otp, setotp] = useState("");
    const navigate = useNavigate();

    const submitOTP = () => {
        let mobile = localStorage.getItem("mobile");
        let url = 'https://staging.fastor.in/v1/pwa/user/login';
        console.log(mobile)
        let payload = {
            phone: mobile,
            otp: "123456",
            dial_code: "+91"
        }
        axios.post(url, payload).
            then((res) => {
                if (res.data.status_code == 200) {
                   let token  = res.data.data.refresh_token;
                   localStorage.setItem("token", token);
                    alert("LoggedIn Successfully")
                }
                else alert("Something went wrong");
            }).catch((err) => console.log(err)).
            finally((res) => navigate("/home"));
    }

    return (
        <div className={styles.MainDiv}>
            <form action="submit" className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="">Enter Your Mobile Number</label>
                <label htmlFor="" className={styles.smlabel}>Enter the verification code we just sent on your Mobile Number.</label>
                <div className="otp-group">
                    <input className='otp-input' type="number" value={dig1} onChange={(e) => setdig1(e.target.value)} />
                    <input className='otp-input' type="number" value={dig2} onChange={(e) => setdig2(e.target.value)} />
                    <input className='otp-input' type="number" value={dig3} onChange={(e) => setdig3(e.target.value)} />
                    <input className='otp-input' type="number" value={dig4} onChange={(e) => setdig4(e.target.value)} />
                    <input className='otp-input' type="number" value={dig5} onChange={(e) => setdig5(e.target.value)} />
                    <input className='otp-input' type="number" value={dig6} onChange={(e) => setdig6(e.target.value)} />
                </div>
                <button onClick={submitOTP} className={styles.SubmitBtn} type="submit">
                    Verify
                </button>
            </form>
        </div>
    );
}