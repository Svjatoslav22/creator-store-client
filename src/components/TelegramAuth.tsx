"use client"
import { useEffect, useState, useRef } from 'react';
import styles from './TelegramAuth.module.css';

declare global {
  interface Window {
    onTelegramAuth: (user: any) => void;
  }
}

export function TelegramAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const telegramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Перевіряємо чи є токен при завантаженні
    const token = localStorage.getItem('token');
    if (token) {
      const savedUsername = localStorage.getItem('username');
      setIsAuthenticated(true);
      setUsername(savedUsername || 'Користувач');
    }

    // Глобальна функція для обробки Telegram callback
    window.onTelegramAuth = async (user) => {
      console.log('Telegram user:', user);
      setLoading(true);

      try {
        // Відправляємо дані на бекенд
const response = await fetch('https://creator-store-server.onrender.com/api/telegram/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        const data = await response.json();

        if (response.ok && data.token) {
          // Зберігаємо токен та ім'я користувача
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', user.first_name || user.username || 'Користувач');
          
          setIsAuthenticated(true);
          setUsername(user.first_name || user.username || 'Користувач');
          alert('✅ Успішно авторизовано!');
        } else {
          alert('❌ Помилка авторизації: ' + (data.message || 'Невідома помилка'));
        }
      } catch (error) {
        console.error('Помилка авторизації:', error);
        alert('❌ Помилка з\'єднання з сервером');
      } finally {
        setLoading(false);
      }
    };

    // Додаємо Telegram widget скрипт динамічно
    if (!isAuthenticated && telegramRef.current && !telegramRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.setAttribute('data-telegram-login', 'Creator_Store_Bot');
      script.setAttribute('data-size', 'large');
      script.setAttribute('data-onauth', 'onTelegramAuth(user)');
      script.setAttribute('data-request-access', 'write');
      script.async = true;
      telegramRef.current.appendChild(script);
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUsername('');
    alert('Ви вийшли з аккаунту');
  };

  if (loading) {
    return <div className={styles.authContainer}>Авторизація...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.userInfo}>
          <span className={styles.username}>👤 {username}</span>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Вийти
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.authContainer} ref={telegramRef}>
      {/* Telegram widget буде додано тут динамічно */}
    </div>
  );
}
