import Hero from "@/components/homepage/hero";
import { Content } from "@/components/shared/Content";
import Footer from "@/components/shared/Footer";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function SingleTune() {
  const router = useRouter();
  const [tune, setTune] = useState(null);
  const { tuneId } = router.query;
  
  useEffect(() => {
      if (!tuneId) return;

      getBook(tuneId);
  }, [tuneId]);

  const getBook = async (id) => {
      const response = await fetch(`/api/tunes-by-id?id=${id}`);
      const data = await response.json();
      const { tune } = data;
      setTune(tune);
  }

  console.log(tune);

  if (!tune) {
      return (
          <div>Loading...</div>
      )
  }
  

  return (
      <div className="w-full">
          <Header name={tune.title} />

          <Hero
              imgUrl={tune.img_url}
              title={tune.title}
              subtitle={tune.artist}
          />

          <Content>
              <div className="w-full flex flex-col">

                  <a href={book.linkToPurchase} target="_blank">
                      Buy on Amazon
                  </a>

              </div>
          </Content>

          <Footer
              title="Next book"
              href={`/single-book/${+book.id + 1}`}
          />
      </div>
  )
}




