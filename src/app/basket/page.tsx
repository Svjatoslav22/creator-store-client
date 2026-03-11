"use client"
import React from "react";
import { useCartStore } from "../../store/cartStore";
import styles from "../page.module.css";
import { TelegramAuth } from "../../components/TelegramAuth";

const BasketPage = () => {


  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const sendOrder = async () => {
    // Перевірка авторизації
    const token = localStorage.getItem("token");

    if (!token) {
      alert('❌ Будь ласка, увійдіть через Telegram для оформлення замовлення');
      return;
    }

    const orderData = {
      products: items.map(item => ({
        product: item.id,
        quantity: item.quantity || 1

      })),
      customerName: localStorage.getItem("username") || "Користувач",
      email: "test@example.com",
      address: "не вказано"

    };

    try {
      const res = await fetch("https://creator-store-server.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      if (res.ok) {
        const responseData = await res.json();
        alert("✅ Замовлення успішно оформлено!");
        // Можна очистити кошик після успішного замовлення
        clearCart();
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error('Order error:', errorData);
        alert(`❌ Помилка: ${errorData.message || 'Невідома помилка'}`);
      }

    }
    catch (error) {
      console.error('Error sending order:', error);
      alert("❌ Не вдалося з'єднатися з сервером");
    }
  }

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);



  return (
    <div className={styles.basketItems}>
      {items.length === 0 ? (
        <div className={styles.emptyBasket}>Кошик порожній</div>
      ) : (
        items.map((item, index) => (
          <div key={`${item.id}-${index}`} className={styles.basketRow}>

            {/* Ліва частина: фото + назва */}
            <div className={styles.basketRowItem}>
              <img src={item.image} alt={item.title} className={styles.basketItemImage} />
              <div>
                <div className={styles.basketItemTitle}>{item.title}</div>
                <div className={styles.basketItemDesc}>{item.description}</div>
              </div>
            </div>

            {/* Кількість */}
            <div className={styles.basketRowQty}>
              <button onClick={() => decreaseQuantity(item.id)}>—</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            {/* Ціна */}
            <div className={styles.basketRowPrice}>{item.price}$</div>

            {/* Сума */}
            <div className={styles.basketRowSubtotal}>{item.price * item.quantity}$</div>

          </div>
        ))
      )}
      <div className={styles.basketFooter}>
        <span className={styles.basketTotal}>Загальна сума: {total}$</span>
        <button className={styles.basketPayButton} onClick={sendOrder}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>

      </div>
    </div>
  );
};

export default BasketPage;