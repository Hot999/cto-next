import Link from "next/link";
import React from "react";
import styles from "./card.module.scss";

const Card = (props) => {
        return (
            <li className={styles.certificates_list__item + " " + "mt-4"}>
                <Link href="/certificate/[id]" as={`/certificate/${props.link}`}>
                    <a className={styles.certificate}>
                <span className={styles.certificate__main_info}>
                    <span className={styles.certificate__title}>
                        <span>{props.title}</span>
                    </span>
                    <span className={styles.certificate__desc}>{props.description}</span>
                </span>
                        <span className={styles.certificate__additional_info}>
                        <span className="certificate-price__value">
                            <span className={styles.thin_space}>{props.price} ₽</span>
                    </span>
                        <span className={styles.certificate_price__comment}>в год за базовый вариант</span>
                    </span>
                    </a>
                </Link>
            </li>
        )
}
export default Card;