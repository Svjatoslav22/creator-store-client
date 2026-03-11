'use client'

import Link from "next/link"
import styles from "./Header.module.css"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { TelegramAuth } from "./TelegramAuth"

export const Header = function () {

    const pathname = usePathname()
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const save = localStorage.getItem("username");
        if (save) {
            setUsername(save);
        }
    }, []);

    return (

        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/logo.jpg" alt="" className={styles.imgLogo} />
            </div>
            <nav className={styles.nav}>
                <Link href='/main' className={pathname === "/main" ? styles.active : ""}>ГОЛОВНА</Link>
                
                <Link href="/" className={pathname === "/" ? styles.active : ""}>ТОВАРИ</Link>
                <Link href='/basket' className={pathname === "/basket" ? styles.active : ""}>КОШИК</Link>
                <TelegramAuth />

            </nav>

        </header>

    )
}
