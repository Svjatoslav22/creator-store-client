
"use client";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { mockProducts } from "../../../services/mockData";
import styles from "../../page.module.css";

import { useCartStore } from "../../../store/cartStore";
import { useRouter } from "next/navigation";
import { Product } from "../../../types";

const API_URL = "https://creator-store-server.onrender.com/api/products";

function normalizeProduct(raw: any): Product {
  return {
    id: String(raw?._id ?? raw?.id ?? ""),
    title: raw?.title ?? "Без назви",
    description: raw?.description ?? "Опис відсутній",
    price: Number(raw?.price ?? 0),
    image: raw?.imageUrl || raw?.image || "/images/no-image.jpg",
    stock: Number(raw?.stock ?? raw?.quantity ?? 0),
  };
}

function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <button className={styles.addButton} onClick={() => addToCart(product)}>+</button>
  );
}

export default function ProductDetails() {
  const params = useParams();
  const id = useMemo(() => {
    const routeId = params?.id;
    if (Array.isArray(routeId)) {
      return routeId[0] ?? "";
    }
    return routeId ?? "";
  }, [params]);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setNotFound(false);

        const res = await fetch(API_URL, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data?.products)
            ? data.products
            : Array.isArray(data)
              ? data
              : [];

          const foundFromApi = list.find((item: any) => String(item?._id ?? item?.id) === id);
          if (foundFromApi) {
            setProduct(normalizeProduct(foundFromApi));
            return;
          }
        }

        const foundMock = mockProducts.find((item) => String(item.id) === id);
        if (foundMock) {
          setProduct(foundMock);
          return;
        }

        setNotFound(true);
      } catch {
        const foundMock = mockProducts.find((item) => String(item.id) === id);
        if (foundMock) {
          setProduct(foundMock);
          return;
        }

        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: "24px" }}>
        <div style={{ fontSize: "22px" }}>Завантаження товару...</div>
      </div>
    );
  }

  if (notFound || !product) {
    return (
      <div style={{ padding: "24px" }}>
        <div style={{ fontSize: "22px" }}>Товар не знайдено</div>
      </div>
    );
  }

  return (
    <div className={styles.productDetailsContainer}>
    
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
      <img src={image} alt={title} width={260} height={220} className={styles.productDetailsImage} />
    </div>
  );
}

