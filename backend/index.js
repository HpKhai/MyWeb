const connectDb = require('./utils/connectDb'); // Đường dẫn tới file connectDb.js
const express = require('express');
const app = express();
const routes = require('./src/routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

const startServer = async () => {
    // Kết nối cơ sở dữ liệu
    const db = await connectDb();  // Khởi tạo biến db từ kết nối MongoDB

    routes(app);

    // Khởi động server
    app.listen(5000, () => {
        console.log('Server đang chạy tại http://localhost:5000');
    });
};

// Khởi động server
startServer();
