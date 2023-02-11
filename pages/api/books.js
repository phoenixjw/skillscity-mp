export default function handler(req, res) {
    const books = [
        {
            artist: "Josh Baker",
            title: "Information overload",
            imgUrl: "/assets/informationOve.jpg"
        },
        {
            artist: "Ingi Visons",
            title: "RJG",
            imgUrl: "/assets/ingi.jpg"
        },
        {
            artist: "Sebo K",
            title: "Brock wild",
            imgUrl: "/assets/seboK.jpg"
        }

    ];

    res.json(books);
}