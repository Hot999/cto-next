import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.scss";
import React from "react";
import {Header} from "../components/header/header";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
    const router = useRouter();
    // if (router.route === "/") {
    //     console.log("/")
    // } else {
    //     console.log(router.route)
    // }

    const a = router.route === "/";
    return (
        <>
            <Header/>
            <div className={a ? "page-layout" : "page-layouts"} id="pageWrapper">
                <Component {...pageProps} />
            </div>
        </>
    )
}


export default MyApp