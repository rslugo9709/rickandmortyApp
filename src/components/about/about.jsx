import React from "react";
import styles from "./about.module.css"

export default function about(){
    return(
        <div id={styles.container}>
            About
            <h1> Welcome to Rick & Morty app</h1>
            <h3>Created by Raul Lugo</h3>
            <img src={require("../../images/foto.jpg")} alt="This should be my foto"></img>
            <br />
            <p>This is just a project made for an academic requirement</p>
        </div>
    ) 

}







