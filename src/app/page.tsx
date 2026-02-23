"use client"

import Image from "next/image"
import { useState } from "react"
import { ProdactCard } from "../components/ProdactCard"
import { mockProducts } from "../services/mockData"

// const productList = [
//     { id: "1", title: "худі", description: "Чорне худі з логотипом", price: 700, image: "/images/blouse.jpg", stock: 10 },
//     { id: "2", title: "ручка", description: "Кольорова ручка з логотипом", price: 350, image: "/images/handle.jpg", stock: 20 },
//     { id: "3", title: "горнятко", description: "Керамічне горнятко для кави", price: 120, image: "/images/cup.jpg", stock: 15 },
//     { id: "4", title: "зошит", description: "Зручний блокнот з логотипом", price: 250, image: "/images/notebook.jpg", stock: 30 },
//     { id: "5", title: "футболка", description: "Біла футболка з логотипом Creator IT", price: 150, image: "/images/t-shirt.jpg", stock: 25 },

// ]

export default function Home() {
    const [currentProduct, setCurrentProduct] = useState(0)

    const handlePrev = () => {
        setCurrentProduct(prev => prev === 0 ? mockProducts.length - 1 : prev - 1)
    }

    const handleNext = () => {
        setCurrentProduct(prev => prev === mockProducts.length - 1 ? 0 : prev + 1)
    }
    return (

        <div>

            <header>
                <Image src="/images/logo.jpg" alt="Logo" width={100} height={100}></Image>
                <h1>ТОВАР CREATOR IT ACADEMY</h1>

                <button><Image src="/images/basket.png" alt="Basket" width={30} height={30}></Image></button>
            </header>


            <main>

                <button onClick={handlePrev}>Попередній</button>
                <ProdactCard data={mockProducts[currentProduct]}></ProdactCard>
                <button onClick={handleNext}>Наступний</button>

            </main>
            <footer>


            </footer>

        </div>


    )
}