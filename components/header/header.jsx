import styles from "./header.module.scss";
import Link from "next/link";
import React, {useState} from "react";
import ActiveLink from "../ActiveLink";

export const Header = () => {
    const [menuOpened, menuHandler] = useState(false);
    return (
        <>
            <div className={styles.container_header + " " + styles.container_no_padding + " " + styles.mobile_navigation_info}>
                    <a className={styles.wrapper_a} href="tel:+79122222905">
                    <span>
                        <img className={styles.icon} src="/phone.svg" alt=""/>
                    </span>
                        +7(912)-222-29-05</a>
                    <div className={styles.wrapper_a}>
                    <span>
                        <img className={styles.icon} src="/location.svg" alt=""/>
                    </span>
                        Екатеринбург ул. Восточная 7г оф 609а</div>
                    <a className={styles.wrapper_a} href="mailto:info@rozalko.ru">
                    <span>
                        <img className={styles.icon} src="/email.svg" alt=""/>
                    </span>
                        info@rozalko.ru</a>
            </div>
            <div className={styles.container_header + " " + ((menuOpened ? styles.fix_header : ""))}>
                <div className={styles.logo}>
                    <Link href="/"><a className={styles.link_logo}><span className={styles.span_black}>Ctotrade<span
                        className={styles.none_link + " " + styles.upper_center}> удостоверяющий центр</span></span></a></Link>
                </div>
                <ul className={styles.ul}>
                    <li>
                        <ActiveLink activeClassName={styles.active} href="/"><a className={styles.link}>Электронная
                            подпись</a></ActiveLink>
                    </li>
                    <li>
                        <ActiveLink activeClassName={styles.active} href="/page-test"><a className={styles.link}>Помощь
                            в торгах</a></ActiveLink>
                    </li>
                    <li>
                        <ActiveLink activeClassName={styles.active} href="/news"><a className={styles.link}>Новости</a></ActiveLink>
                    </li>
                </ul>
                <div className={styles.header_menu_toggler} onClick={() => menuHandler(!menuOpened)}>
                    <img className={styles.menu} src="/open-menu.svg" alt=""/>
                </div>
            </div>

            {
                menuOpened
                ? <div className={styles.mobile_menu}>
                        <ul className={styles.ul_mobile}>
                            <li className={styles.li_mobile}>
                                <ActiveLink activeClassName={styles.active} href="/"><a className={styles.link_mob}>Электронная
                                    подпись</a></ActiveLink>
                            </li>
                            <li className={styles.li_mobile}>
                                <ActiveLink activeClassName={styles.active} href="/page-test"><a className={styles.link_mob}>Помощь
                                    в торгах</a></ActiveLink>
                            </li>
                            <li className={styles.li_mobile}>
                                <ActiveLink activeClassName={styles.active} href="/news"><a className={styles.link_mob}>Новости</a></ActiveLink>
                            </li>
                        </ul>
                        <div className={styles.container_header + " " + styles.container_no_padding}>
                            <a className={styles.wrapper_a} href="tel:+79122222905">
                    <span>
                        <img className={styles.icon} src="/phone.svg" alt=""/>
                    </span>
                                +7(912)-222-29-05</a>
                            <div className={styles.wrapper_a}>
                    <span>
                        <img className={styles.icon} src="/location.svg" alt=""/>
                    </span>
                                Екатеринбург ул. Восточная 7г оф 609а</div>
                            <a className={styles.wrapper_a} href="mailto:info@rozalko.ru">
                    <span>
                        <img className={styles.icon} src="/email.svg" alt=""/>
                    </span>
                                info@rozalko.ru</a>
                        </div>
                    </div>
                    : null
            }

        </>
    )
}
