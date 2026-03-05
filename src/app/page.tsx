"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ProdactCard } from "../components/ProdactCard"
import { Product } from "../types"
import styles from "./page.module.css"
import { useCartStore } from "../store/cartStore"
import { title } from "node:process"
import { TelegramAuth } from "../components/TelegramAuth"

export default function Home() {
    const [currentProduct, setCurrentProduct] = useState(0)
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Отримати товари з API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000);
                
                const res = await fetch("https://creator-store-server.onrender.com/api/products", {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                
                if (res.ok) {
                    const data = await res.json();
                    
                    // Якщо дані в полі products
                    if (data.products && Array.isArray(data.products)) {
                        const productsWithImages = data.products.map((product: any) => ({
                            ...product,
                            id: product._id || product.id,
                            image: product.imageUrl || product.image || '/images/no-image.jpg'
                        }));
                        setProducts(productsWithImages);
                    } else if (Array.isArray(data)) {
                        const productsWithImages = data.map((product: any) => ({
                            ...product,
                            id: product._id || product.id,
                            image: product.imageUrl || product.image || '/images/no-image.jpg'
                        }));
                        setProducts(productsWithImages);
                    } else {
                        setError("Помилка: неправильний формат даних");
                    }
                } else {
                    setError(`Помилка завантаження товарів: ${res.status}`);
                }
            } catch (err: any) {
                if (err.name === 'AbortError') {
                    setError("Сервер не відповідає. Спробуйте пізніше.");
                } else {
                    setError("Помилка з'єднання з сервером");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handlePrev = () => {
        if (products.length > 0) {
            setCurrentProduct(prev => prev === 0 ? products.length - 1 : prev - 1)
        }
    }

    const handleNext = () => {
        if (products.length > 0) {
            setCurrentProduct(prev => prev === products.length - 1 ? 0 : prev + 1)
        }
    }
    
    const getVisibleProducts = () => {
        if (products.length === 0) return [];
        
        const visibleProducts = [];
        const count = Math.min(3, products.length); // Не більше 3 і не більше, ніж є товарів
        
        for (let i = 0; i < count; i++) {
            const index = (currentProduct + i) % products.length;
            if (products[index]) {
                visibleProducts.push(products[index]);
            }
        }
        
        return visibleProducts;
    };

    const items = useCartStore((state) => state.items);

    if (loading) {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <Image src="/images/logo.jpg" alt="Logo" width={180} height={90} className={styles.logo}></Image>
                    <h1 className={styles.title}>ТОВАР <span className={styles.by}>by</span> CREATOR IT ACADEMY</h1>
                </header>
                <main className={styles.main}>
                    <div style={{ color: 'white', fontSize: '24px' }}>Завантаження товарів...</div>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <Image src="/images/logo.jpg" alt="Logo" width={180} height={90} className={styles.logo}></Image>
                    <h1 className={styles.title}>ТОВАР <span className={styles.by}>by</span> CREATOR IT ACADEMY</h1>
                </header>
                <main className={styles.main}>
                    <div style={{ color: 'red', fontSize: '24px' }}>{error}</div>
                </main>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <Image src="/images/logo.jpg" alt="Logo" width={180} height={90} className={styles.logo}></Image>
                    <h1 className={styles.title}>ТОВАР <span className={styles.by}>by</span> CREATOR IT ACADEMY</h1>
                </header>
                <main className={styles.main}>
                    <div style={{ color: 'white', fontSize: '24px' }}>Товарів немає</div>
                </main>
            </div>
        );
    }

    return (

        <div className={styles.container}>

            <header className={styles.header}>
                <Image src="/images/logo.jpg" alt="Logo" width={180} height={90} className={styles.logo}></Image>
                <h1 className={styles.title}>ТОВАР <span className={styles.by}>by</span> CREATOR IT ACADEMY</h1>
                <a href="/basket" className={styles.basketLink}>
                    <button className={styles.basketButton}>
                        <Image src="/images/basket.png" alt="Basket" width={40} height={40} className={styles.basketImage}>
                        </Image>
                        <span className={styles.basketCount}>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                    </button></a>


            </header>
                <TelegramAuth />

            <main className={styles.main}>

                <button onClick={handlePrev} className={styles.arrowButton}>
                    <img src="/images/left.png" alt="Назад" className={styles.arrowIcon} />
                </button>


                <div className={styles.productsGrid}>
                    {getVisibleProducts().map((product, index) => (
                        <ProdactCard key={`product-${product.id}-${index}`} data={product} />
                    ))}
                </div>
                <button onClick={handleNext} className={styles.arrowButton}>
                    <img src="/images/right.png" alt="вперед" className={styles.arrowIcon} />
                </button>

            </main>
            <footer>


            </footer>

        </div>


    )
}