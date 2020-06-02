import React from "react";
import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import Loader from "../components/loader/loader";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function PageTests() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const {data, error} = useSWR(url, fetcher)
    if (!data) return <div className="wrapper_for_loader"><Loader/></div>
    if (error) return <div className="wrapper_for_loader">Ошибка загрузки</div>
    console.log(data)
    const elements = data && data.map(el => {
        return (
            <div key={el.id}>
                <Head>
                    <title>{el.title} | подпись</title>
                </Head>
                <h1>
                    {el.title}
                </h1>
                <p>{el.body}</p>
            </div>
        )
    })
    return (
        <div className="container">
            {elements}
        </div>
    )
}
