
import { Product } from "../types";
import styles from "./ProdactCard.module.css";
import { useCartStore } from "../store/cartStore";
import { useRouter } from "next/navigation";

interface ProductProps {
    data: Product;
}



export function ProdactCard({ data }: ProductProps) {
    const addToCart = useCartStore((state) => state.addToCart);
    const items = useCartStore((state) => state.items);
    const router = useRouter();

    // Знаходимо кількість цього товару в кошику
    const cartItem = items.find((item) => item.id === data.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleCardClick = () => {
        router.push(`/product/${data.id}`);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart(data);
    };

    return (
        <div className={styles.card} onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <div className={styles.cardTitle}></div>
            {data.image ? (
                <img src={data.image} alt={data.title} width={180} height={140} className={styles.image} />
            ) : (
                <div style={{ width: 180, height: 140, backgroundColor: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Без фото
                </div>
            )}
            <div className={styles.productName}>{data.title}</div>
            <div className={styles.productDescription}>{data.description}</div>
            {quantity > 0 && (
                <div style={{ 
                    color: '#4CAF50', 
                    fontSize: '14px', 
                    fontWeight: 'bold',
                    marginTop: '5px',
                    textAlign: 'center'
                }}>
                    У кошику: {quantity} шт.
                </div>
            )}
            <div className={styles.priceRow}>
                <button className={styles.addButton} onClick={handleAddToCart}>+</button>
                <span className={styles.price}>{data.price}$</span>
            </div>
        </div>
    );
}