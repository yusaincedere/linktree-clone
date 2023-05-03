import mysql from "mysql2/promise";

export async function query({query,values= [] }){
    const dbconnection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        port:process.env.MYSQL_PORT,
        password: process.env.MYSQL_PASSWORD,
    });

    try{
        const results = dbconnection.execute(query,values);
        dbconnection.end();
        console.log(results)
        return results;
    }catch(error){
        throw Error(error.message);
    }
        
    
}