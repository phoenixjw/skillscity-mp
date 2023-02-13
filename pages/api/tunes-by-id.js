export default function handler(req, res) {
  const id = req.query.id;
  const tunes = [
      {   
          id:"1",
          artist: "Josh Baker",
          title: "Information overload",
          imgUrl: "/assets/informationOve.jpg"
      },
      {   
          id:"2",
          artist: "Ingi Visons",
          title: "RJG",
          imgUrl: "/assets/ingi.jpg"
      },
      {   
          id:"3",
          artist: "Sebo K",
          title: "Brock wild",
          imgUrl: "/assets/seboK.jpg"
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