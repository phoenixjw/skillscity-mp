import sql from "@/utils/postgres";

export default async function handler(req, res){

    const tunes = await sql `
      select * from tunes
    `;

     
        res.json(tunes);
  
    }   