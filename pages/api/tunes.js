export default function handler(req, res){
    const tunes = [
        {
          title: "Information Overload",
          artist: "Josh Baker"
        },
        {
          title: "Where are you",
          artist: "Burnski"
        },
        {
          title: "Brock Wild",
          artist: "Sebo K"
        }
      ];

      setTimeout(() => {
        res.json(tunes);
      },3000);
    }   