import Head from "next/head";
import React from "react";
import styles from "../css/index/index.module.scss";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <Head>
                <title>Электронная подпись | Удостоверяющий центр ЦТО трейд</title>
                <meta content="Для участия в торгах" property="og:title"/>
                <meta
                    content="Подходит для участия в закупках в соответствии с 44-ФЗ в качестве поставщика на 6 федеральных площадках госзаказа, а также для участия и организации закупок по 223-ФЗ, торгов банкротов и коммерческих закупок."
                    name="description"/>
            </Head>
            <div className="container">
                <div className="col-12">
                    <h1 className={styles.main_title}>ЭЛЕКТРОННАЯ ПОДПИСЬ ДЛЯ ЛЮБЫХ ЗАДАЧ</h1>
                </div>

                <div className="row no-gutters mt-5">

                    <div className="col-lg-4 col-md-6 col-12 mt-4 m-t-small">
                        <Link href="/certificate/etp">
                            <a className="roles-item">
                                <span className="roles-item__title">Для участия<br/>в торгах</span>
                                <span className="roles-item__desc">
                        Участвуйте в госзакупках по
                        <span className="nowrap">44-ФЗ</span>,
                        <span className="nowrap">223-ФЗ</span>,
                        коммерческих торгах и торгах банкротов
                    </span>
                                <span className="roles-item__price">5 900 <span>₽</span></span>
                                <span className="roles-item__price-desc">в год за базовый вариант</span>
                            </a>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 m-t-small">
                        <Link href="/certificate/systems">
                            <a className="roles-item">
                                <span className="roles-item__title">Для отчетности<br/>и ведения бизнеса </span>
                                <span className="roles-item__desc">
                       Сдавайте отчетность, работайте с госорганами онлайн. Подходит для юрлиц и ИП
                    </span>
                                <span className="roles-item__price">2 000 – 21 000 <span>₽</span></span>
                                <span className="roles-item__price-desc">в год за базовый вариант</span>
                            </a>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 m-t-small">
                        <Link href="/certificate/fiz">
                            <a className="roles-item">
                                <span className="roles-item__title">Для физических <br/>лиц</span>
                                <span className="roles-item__desc">
                        Работайте с порталами госуслуг и налоговой, регистрируйте ИП или ООО через интернет
                    </span>
                                <span className="roles-item__price">1 200  <span>₽</span></span>
                                <span className="roles-item__price-desc">в год за базовый вариант</span>
                            </a>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-sm-9 col-md-offset-2">
                        <h2 className={styles.main_title_h2}>Преимущества<br/> подписей от ЦТО</h2>
                    </div>
                </div>


                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-xl-4 col-sm-6">
                        <div className="benefits-item__image">
                            <img className="img-fluid"
                                 src="/icon-main-01.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-sm-6">
                        <div className="benefits-item__title">Автоматическая настройка и&nbsp;установка
                        </div>
                        <div className="benefits-item__desc">Сервис настройки электронной подписи
                            самостоятельно
                            установит необходимые программы. Несколько кликов&nbsp;— и&nbsp;подпись готова
                            к&nbsp;работе.
                        </div>
                    </div>
                </div>


                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-xl-4 col-sm-6">
                        <div className="benefits-item__title">Круглосуточная техническая поддержка
                        </div>
                        <div className="benefits-item__desc">Поможем, если в работе электронной подписи или средств
                            криптозащиты возникнут проблемы. Специалисты технической поддержки всегда на связи, даже в
                            новогоднюю ночь.
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-sm-6">
                        <div className="benefits-item__image">
                            <img className="img-fluid"
                                 src="/icon-main-02.png"
                                 alt=""/>
                        </div>
                    </div>
                </div>


                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-xl-4 col-sm-6">
                        <div className="benefits-item__image">
                            <img className="img-fluid"
                                 src="/icon-main-03.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-sm-6">
                        <div className="benefits-item__title">Помощь в экстренных ситуациях
                        </div>
                        <div className="benefits-item__desc">Дополнительные услуги помогут при форс-мажоре. Выпустим подпись за час, изготовим дубликат, перевыпустим при смене реквизитов или потере токена.
                        </div>
                    </div>
                </div>

                <section className="section--reliable">
                    <div className="row justify-content-center">
                        <div className="col-sm-9 col-md-offset-2">
                            <h2 className={styles.main_title_h2}>Надежная компания</h2>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}


export default Home;