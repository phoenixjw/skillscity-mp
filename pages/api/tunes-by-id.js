export default function handler(req, res) {
  const id = req.query.id;
  const tunes = [
      {   
          id:"1",
          artist: "Josh Baker",
          title: "Information overload",
          imgUrl: "/assets/informationOve.jpg",
          linkToPurchase: "https://www.beatport.com/track/information-overload/17200264"
      },
      {   
          id:"2",
          artist: "Ingi Visons",
          title: "RJG",
          imgUrl: "/assets/ingi.jpg",
          linkToPurchase: "https://slapfunk.bandcamp.com/track/ingi-visions-rjg"
      },
      {   
          id:"3",
          artist: "Sebo K",
          title: "Brock wild",
          imgUrl: "/assets/seboK.jpg",
          linkToPurchase: "https://www.beatport.com/track/brock-wild/9091886"
      }

  ];

  const foundTune =  tunes.find((tune) => {
    if (tune.id === id) {
      return true; 
    }
    else {
      return false;
    }
  })

  res.json({ tune: foundTune });
}