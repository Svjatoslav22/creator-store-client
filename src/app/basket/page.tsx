"use client"
import React from "react";
import { useCartStore } from "../../store/cartStore";
import styles from "../page.module.css";
import { TelegramAuth } from "../../components/TelegramAuth";

const BasketPage = () => {


  const items = useCartStore((state) => state.items);
  
  const sendOrder = async () => {
    const orderData = {
      items: items.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity || 1
      })),
    }
    try {
      const res = await fetch("https://creator-store-server.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(orderData)
      });
      const responseData = await res.json();
      
      if(res.ok){
        alert("Замовлення успішно оформлено!")
      }else{
        alert(`Помилка при оформленні замовлення: ${responseData.message || res.status}`)
      }
    }catch (error) {
      alert("Помилка при оформленні замовлення")
    }
  }

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);



  return (
    <div className={styles.basketContainer}>
      <header className={styles.header}>
        <img src="/images/logo.jpg" alt="Logo" width={180} height={90} className={styles.logo} />
        <h1 className={styles.title}>КОРЗИНА <span className={styles.by}>by</span> CREATOR IT ACADEMY</h1>
        <a href="/" className={styles.homeButton}>
          <img src="/images/home.png" alt="Home" width={40} height={40} />
        </a>
      </header>
      
      <TelegramAuth />

      <div className={styles.basketItems}>
        {items.length === 0 ? (
          <div className={styles.emptyBasket}>Кошик порожній</div>
        ) : (
          items.map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.basketItem}>
              <img src={item.image} alt={item.title} className={styles.basketItemImage} />
              <div className={styles.basketItemInfo}>
                <div className={styles.basketItemTitle}>{item.title}</div>
                <div className={styles.basketItemDesc}>{item.description}</div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}>
                  <button 
                    onClick={() => decreaseQuantity(item.id)}
                    style={{
                      padding: '5px 12px',
                      backgroundColor: '#ff4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 'bold'
                    }}
                  >
                    -
                  </button>
                  <span style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold',
                    minWidth: '40px',
                    textAlign: 'center'
                  }}>
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => increaseQuantity(item.id)}
                    style={{
                      padding: '5px 12px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 'bold'
                    }}
                  >
                    +
                  </button>
                  <span style={{ 
                    fontSize: '14px', 
                    color: '#888',
                    marginLeft: '10px'
                  }}>
                    {item.price}$ × {item.quantity} = {item.price * item.quantity}$
                  </span>
                </div>
                <div className={styles.basketItemBottomRow}>
                  <button className={styles.basketRemoveButton} onClick={() => removeFromCart(item.id)}>X</button>
                  <span className={styles.basketItemPrice}>{item.price * item.quantity}$</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <footer className={styles.basketFooter}>
        <div className={styles.basketTotal}>Загальна сума : {total} $</div>
        <button className={styles.basketPayButton} onClick={sendOrder}>Оплатити</button>
      </footer>
    </div>
  );
};

export default BasketPage;
