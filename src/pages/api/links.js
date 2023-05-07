import { query } from "../../repository/db";

export default async function handler(req, res) {

    if (req.method === "GET") {
        const links = await query({
            query:"SELECT * FROM links",
            values:[]
        })

        res.status(200).json({links:links})
    }

}