import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Сервер працює! Деплой успішний 🚀');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`http://localhost:${PORT}`);
});