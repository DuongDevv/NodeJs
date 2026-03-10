const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'datademo_db',
    port: '3306'
});

pool.getConnection(
    function(err,connection){
        if(err instanceof Error){
            console.log(err);
            return
        }

        const selectsql = "select * from human";
        connection.query(selectsql,(err,rows,fields)=>{    
            if(err instanceof Error){
                console.log(err);
                return;
            }
            console.log(rows);
            console.log(fields);
        });
        
        const insertsql = "INSERT INTO `human`(`HoTen`) VALUES ('Duong dep trai')";
        connection.query(insertsql, (err, result, fields) => {
            if (err instanceof Error) {
                console.log(err);
                return;
            }   
            console.log(result);
            console.log(fields);
        });
        connection.release();
    }

);




