import mysql from "mysql2/promise";

export async function query({query,values= [] }){
    const dbconnection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        databse: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    });

    try{
        const [results] = dbconnection.execute(query,values);
        dbconnection.end();
        return results;
    }catch(error){
        throw Error(error.message);
    }


}