'use client'

import style from "../page.module.css"
import Link from "next/link"


export default function MainPage() {
    return (
        <div className={style.mainPage}>
            <img src="/images/blouse – копія.jpg" className={style.mainHeroImage} alt="" />
            <div className={style.mainHeroCOntent}>
                <h1 className={style.mainHeroTitle}>ТВІЙ СТИЛЬ — ТВІЙ CREATOR IT ACADEMY</h1>
                <p className={style.mainHeroSubtitle}>ВІДКРИЙ КОЛЕКЦІЮ БРЕНДОВАНОГО ОДЯГУ ТА АКСЕСУАРІВ</p>
                <Link href="/" className={style.mainHeroButton}>ПЕРЕГЛЯНУТИ КОЛЕКЦІЮ</Link>
            </div>
            <img src="/images/t-shirt – копія.png" className={style.mainHeroImage} alt="" />

        </div>


    )

}