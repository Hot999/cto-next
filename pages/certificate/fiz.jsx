import Head from "next/head";
import React from "react";
import styles from "../../css/etp/etp.module.scss";
import Card from "../../components/card/card";
import fetch from "isomorphic-fetch";
import useSWR from "swr";
import Loader from "../../components/loader/loader";


export default function Systems() {
    const url = "https://apiwp.mcdir.ru/wp-json/wp/v2/certificate";
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data, error} = useSWR(url, fetcher);

    const categoryDubgroupThree = data && data.filter(el => {
        if (el.categories[0] === 9) {
            return el
        }
    });


    if (!data) return <div className="wrapper_for_loader"><Loader/></div>
    if (error) return <div className="wrapper_for_loader">Ошибка загрузки</div>
    const cardUniversal = categoryDubgroupThree.map((el) => <Card price={el.acf.price} key={el.id} title={el.acf.title_card}
                                                                  description={el.acf.description} link={el.id}/>);

    return (
        <>
            <Head>
                <title>Для отчетности и ведения бизнеса | Удостоверяющий центр ЦТО трейд</title>
                <meta content="Для участия в торгах" property="og:title"/>
                <meta
                    content="Подходит для участия в закупках в соответствии с 44-ФЗ в качестве поставщика на 6 федеральных площадках госзаказа, а также для участия и организации закупок по 223-ФЗ, торгов банкротов и коммерческих закупок."
                    name="description"/>
            </Head>
            <div className="container">
                <h1 className={styles.main_title}>Для физических лиц</h1>
                <div className="row">
                    <div className="col-12">
                        <div id="subgroup_3" className={styles.certificates_subgroup_list__item}>
                            <ul className={styles.ul_main}>
                                {cardUniversal}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
