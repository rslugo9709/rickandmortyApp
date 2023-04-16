import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from "./nav.module.css";

import { Link } from "react-router-dom";

export default function Nav(props){
    return(


        <div>

            <nav className={styles.nav}>
                <div className= {styles.container}>
                    <Link to={"/home"} className={styles.links}>Home</Link>
                    <Link to={"/about"} className={styles.links}>About</Link>
                    <Link to={"/favorites"} className={styles.links}>Favorites </Link>
                </div>
            <SearchBar onSearch={props.onSearch} />
            </nav>

        </div>
    );

}