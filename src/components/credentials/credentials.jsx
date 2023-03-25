import React from "react";
import styles from "./credentials.module.css"
import { useState } from "react";
import { validation } from "./validations";

export default function Credentials(){

    const [userData, setUserData] = useState({
        username:"",
        password:""
    });
    const [errors, setErrors] = useState({
        username:"",
        password:""
    });

    function handleInputChange(e){
        const {name, value} = e.target;
        setUserData(
            {...userData, [name]: value}
        )
        setErrors(
            validation(
                {
                    ...userData,
                    [e.target.name]: e.target.value
                }
            )
        )
    }

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className={styles.container}>
            <form className={styles.formulario} onSubmit={handleSubmit}>
                    <fieldset>
                    <label htmlFor="user">
                        Username:
                    </label>
                    <br />
                    <input id="user" name="username" placeholder="Please, enter your username" type="text" value={userData.username} onChange={handleInputChange} />
                    <p className={styles.danger}>{errors.username}</p>

                    <br />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <br />
                    <input id="password" name="password" placeholder="Please, enter your password" type="password"  value={userData.password} onChange={handleInputChange} />
                    <p className={styles.danger}>{errors.password}</p>

                    <br />
                    <br />
                    <button type="submit" className={styles.login}> Login </button>
                    </fieldset>
            </form>
        </div>
        )
}