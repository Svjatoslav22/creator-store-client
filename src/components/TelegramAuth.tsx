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
        // Відправляємо ВСІ дані що прийшли від Telegram (включно з photo_url)
        // Бо hash був згенерований на основі всіх цих полів
        const authData: any = {
          id: user.id,
          first_name: user.first_name,
          auth_date: user.auth_date,
          hash: user.hash
        };
        
        // Додаємо опціональні поля ТІЛЬКИ якщо вони є
        if (user.last_name) authData.last_name = user.last_name;
        if (user.username) authData.username = user.username;
        if (user.photo_url) authData.photo_url = user.photo_url;
        
        console.log('Sending to server:', JSON.stringify(authData, null, 2));

        // Відправляємо дані на бекенд
        const response = await fetch('https://creator-store-server.onrender.com/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(authData),
        });

        // Перевірка чи сервер повернув JSON
        if (response.ok) {
          const data = await response.json();
          
          if (data.token) {
            // Зберігаємо токен та ім'я користувача
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', user.first_name || user.username || 'Користувач');
            
            setIsAuthenticated(true);
            setUsername(user.first_name || user.username || 'Користувач');
            alert('✅ Успішно авторизовано через Telegram!');
          } else {
            alert('❌ Помилка: токен не отримано від сервера');
          }
        } else {
          const data = await response.json().catch(() => ({}));
          alert('❌ Помилка авторизації: ' + (data.message || response.status));
        }
      } catch (error) {
        console.error('Помилка авторизації:', error);
        alert('❌ Не вдалося з\'єднатися з сервером');
      } finally {
        setLoading(false);
      }
    };

    // Додаємо Telegram widget скрипт динамічно
    if (!isAuthenticated && telegramRef.current && !telegramRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.setAttribute('data-telegram-login', 'Creator_Store_Bot');
      script.setAttribute('data-size', 'medium');
      script.setAttribute('data-onauth', 'onTelegramAuth(user)');
      script.setAttribute('data-request-access', 'write');
      script.async = true;
      telegramRef.current.appendChild(script);
    }
    
    // Видаляємо Telegram widget якщо вже авторизований
    if (isAuthenticated && telegramRef.current) {
      telegramRef.current.innerHTML = '';
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUsername('');
    // Перезавантажуємо сторінку щоб Telegram widget з'явився знову
    window.location.reload();
  };

  if (loading) {
    return <div className={styles.authContainer}>Авторизація...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className={styles.authContainer}>
        <span className={styles.username}>👤 {username}</span>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Вийти
        </button>
      </div>
    );
  }

  return (
    <div className={styles.authContainer} ref={telegramRef}>
      {/* Telegram widget буде додано тут динамічно */}
    </div>
  );
}
