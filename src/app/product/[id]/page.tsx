
"use client";
import { useParams } from "next/navigation";
import { mockProducts } from "../../../services/mockData";
import styles from "../../page.module.css";

import Image from "next/image";
import { useCartStore } from "../../../store/cartStore";
import { useRouter } from "next/navigation";


function AddToCartButton({ product }: { product: any }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <button className={styles.addButton} onClick={() => addToCart(product)}>+</button>
  );
}

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const product = mockProducts.find((p) => p.id === id);
  const items = useCartStore((state) => state.items);

  if (!product) return <div>Товар не знайдено</div>;

  return (
    <div className={styles.productDetailsContainer}>
      <header className={styles.header}>
        <Image src="/images/logo.jpg" alt="Logo" width={180} height={90} className={styles.logo}></Image>
        <h1 className={styles.title}>ТОВАР <span className={styles.by}>by</span> CREATOR IT ACADEMY</h1>
        <a href="/basket" className={styles.basketLink}>
          <button className={styles.basketButton}>
            <Image src="/images/basket.png" alt="Basket" width={40} height={40} className={styles.basketImage}></Image>
            <span className={styles.basketCount}>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </button>
        </a>
      </header>
      <div className={styles.productDetailsCard}>
        <ProductImageWithBack image={product.image} title={product.title} />
        <div className={styles.productDetailsInfo}>
          <div className={styles.productDetailsTitle}>{product.title}</div>
          <div className={styles.productDetailsDesc}>{product.description}</div>
          <div className={styles.productDetailsStock}>У наявності: <b>{product.stock} шт</b></div>
          <div className={styles.productDetailsColor}>Колір: білий</div>
          <div className={styles.productDetailsBottomRow}>
            <AddToCartButton product={product} />
            <span className={styles.price}>{product.price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Картинка з переходом назад
function ProductImageWithBack({ image, title }: { image: string, title: string }) {
  const router = useRouter();
  return (
    <div className={styles.productDetailsImageWrap} onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
      <Image src={image} alt={title} width={260} height={220} className={styles.productDetailsImage} />
    </div>
  );
}

