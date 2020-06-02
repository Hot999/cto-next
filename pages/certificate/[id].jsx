import {useRouter} from 'next/router'
import React from "react";
import fetch from "isomorphic-fetch";
import styles from "../../css/etp/etp.module.scss";
import useSWR from "swr";
import Loader from "../../components/loader/loader";
import Link from "next/link";
import Head from "next/head";


export default function CertificatePost() {
    const router = useRouter();

    const url = `http://apiwp.mcdir.ru/wp-json/wp/v2/certificate/${router.query.id}`;
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSWR(url, fetcher);
    if (!data) return <div className="wrapper_for_loader"><Loader/></div>
    if (error) return <div className="wrapper_for_loader">Ошибка загрузки</div>

    function createMarkup() {
        return {__html: data.content.rendered};
    }

    if (data && data) return (
        <>
            <Head>
                <title> {data.title.rendered} | Удостоверяющий центр ЦТО трейд</title>
                <meta content="Для участия в торгах" property="og:title"/>
                <meta
                    content="Подходит для участия в закупках в соответствии с 44-ФЗ в качестве поставщика на 6 федеральных площадках госзаказа, а также для участия и организации закупок по 223-ФЗ, торгов банкротов и коммерческих закупок."
                    name="description"/>
            </Head>
            <div className="container">
                <h1 className="page-head__title">{data.title.rendered}</h1>

                <div className="row mt-5">
                    <div className="col-12 col-md-8">
                        <div className="certificate-description__text" dangerouslySetInnerHTML={createMarkup()}/>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="certificate-description__price">


                            <div className="certificate-price">
                                <span className="certificate-price__value">{data.acf.price} ₽</span>
                                <div className="certificate-price__comment">в&nbsp;год за базовый вариант</div>
                                <a id="orderBtn" href="/order/52" data-event-name="event-certificate-buy"
                                   className="certificate-price__button">Отправить заявку</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
