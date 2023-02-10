export default async function handler(req, res){
    const id = req.query.id;
    const tunes = await sql `
    select * from tunes
    where id = ${id}
    `;
    
   

      if (tunes.length<1){
        res.status = 404
      }

      const foundTune = tunes[0]; 
      res.json({ tune: foundTune})
      
    }   