import { query } from "../../repository/db";

export default function handler(req, res) {

    if (req.method === "GET") {
        res.status(200).json({name:"yuşa"})
    }

}