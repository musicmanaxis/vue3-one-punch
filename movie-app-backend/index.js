const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MariaDB 연결 설정
const db = mysql.createConnection({
    host: 'localhost', // MariaDB 서버 주소
    user: 'root',      // 사용자 이름
    password: 'erlia22', // 비밀번호
    database: 'VueDB'        // 사용할 데이터베이스
});

// 연결 테스트
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MariaDB');
});

// 영화 목록 가져오기 API
app.get('/api/movies', (req, res) => {
    const sql = 'SELECT * FROM movies';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// 서버 실행
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
