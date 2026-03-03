const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req,res)=>{
    // --- Exercise 02: Ghi Log truy cập ---
    const now = new Date().toISOString();
    const logEntry = `[${now}] Truy cập: ${req.url}\n`;

    fs.appendFile('log.txt',logEntry,(err)=>{
        if(err) console.error("Khong the ghi log: ",err);
    });

    // --- Exercise 01: Điều hướng (Routing) ---
    let filePath = '';
    switch (req.url){
        case '/':
            filePath = 'index.html';
            break;
        case '/about':
            filePath = 'about.html';
            break;
        case '/contact':
            filePath = 'contact.html';
            break;
        default: 
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 - Không tìm thấy trang');
            return;
    }

    // Đọc và trả về nội dung file HTML
    fs.readFile(filePath, 'utf-8', (err,data) => {
        if(err){
            res.writeHead(500);
            res.end("Loi server: Khong the doc file!");
        } else{
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        }
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});