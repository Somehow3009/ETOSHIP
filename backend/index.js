const express = require('express');
const dotenv = require('dotenv');

// Load biến môi trường từ file .env
dotenv.config();

const app = express();

// Cổng server lấy từ biến môi trường hoặc mặc định là 5000
const PORT = process.env.PORT || 5000;

// Thiết lập route đơn giản
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
