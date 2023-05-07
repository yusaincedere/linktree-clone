import { query } from "../../repository/db";

export default async function handler(req, res) {

    if (req.method === "GET") {
        if(req.userName){
            const users = await query({
                query:`SELECT * FROM users where user_name=${req.userName}`,
                values:[]
            })
        }else{

        }
        res.status(200).json({users:users})
    }

}