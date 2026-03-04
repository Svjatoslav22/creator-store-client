import { Product } from "../types";

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Hoodie",
    description: "Зручне чорне худі з логотипом",
    price: 1200,
    image: "/images/blouse.jpg", // Шлях до твого фото
    // category: "Clothes",
    stock: 10
  },
  {
    id: "2",
    title: "Cup",
    description: "Керамічне горнятка для кави",
    price: 350,
    image: "/images/cup.jpg",
    // category: "Accessories",
    stock: 25
  },
  {  
    id: "3",
    title: "Notebook",
    description: "Зручний блокнот з логотипом",
    price: 200,
    image: "/images/notebook.jpg",
    // category: "Stationery",
    stock: 50
  },
  {
    id: "4",
    title: "Pen",
    description: "Кольорова ручка з логотипом",
    price: 150,
    image: "/images/handle.jpg",
    // category: "Stationery",
    stock: 100
  },
  {
    id: "5",
    title: "T-Shirt",
    description: "Біла футболка з логотипом Creator IT",
    price: 800,
    image: "/images/t-shirt.jpg",
    // category: "Clothes",
    stock: 30
  }
];