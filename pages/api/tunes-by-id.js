import sql from "@/utils/postgres";

export default async function handler(req, res) {
  const id = req.query.id;

  const tunes = await sql`
  select * from tunes
  where id = ${id}
  `;

  if(tunes.length <1) {
    res.status(404).json({message: 'Tune not found'})
    return;
  }

  const foundTune = tunes[0];


  res.json({ tune: foundTune });
}
  // const tunes = [
  //     {   
  //         id:"1",
  //         artist: "Josh Baker",
  //         title: "Information overload",
  //         imgUrl: "/assets/informationOve.jpg",
  //         linkToPurchase: "https://www.beatport.com/track/information-overload/17200264"
  //     },
  //     {   
  //         id:"2",
  //         artist: "Ingi Visons",
  //         title: "RJG",
  //         imgUrl: "/assets/ingi.jpg",
  //         linkToPurchase: "https://slapfunk.bandcamp.com/track/ingi-visions-rjg"
  //     },
  //     {   
  //         id:"3",
  //         artist: "Sebo K",
  //         title: "Brock wild",
  //         imgUrl: "/assets/seboK.jpg",
  //         linkToPurchase: "https://www.beatport.com/track/brock-wild/9091886"
  //     }

  // ];
