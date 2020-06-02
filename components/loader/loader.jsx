import styles from "./loader.module.scss";
import React from "react";


export default function Loader() {
    return (
        <div className={styles.lds_spinner}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    )
}