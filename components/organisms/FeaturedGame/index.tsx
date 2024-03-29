import GameItem from "@/components/molecules/GameItem";
import { useCallback, useEffect, useState } from "react";
import { getFeaturedGame } from "@/services/player";
import { GameItemTypes } from "@/services/data-types";
import { toast } from "react-toastify";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    if (data.error) {
      toast.error(data.message);
    } else {
      // toast.success("Success Get Data");
      setGameList(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, [getFeatureGameList]);

  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => (
            <GameItem
              key={item._id}
              id={item._id}
              title={item.name}
              thumbnail={`${IMG}/${item.thumbnail}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
