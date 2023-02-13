export default function handler(req, res) {
    const books = [
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

    res.json(books);
}