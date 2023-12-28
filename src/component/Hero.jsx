import React, { useEffect, useState } from "react";
import { LeftSvg } from "./SVGs/LeftSvg";
import { RightSvg } from "./SVGs/RightSvg";

export const Hero = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const [index, setIndex] = useState(0);

  function rightClick() {
    if (index < articles.length - 1) {
      setIndex(index + 1);
    }
  }

  function leftClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const article = articles[index];

  return (
    <div className="flex flex-col gap-[11px]">
      <div className="flex flex-col m-auto items-center relative w-[1216px]">
        {article && (
          <div>
            <img
              src={
                article.cover_image
                  ? article.cover_image
                  : "https://picsum.photos/536/354"
              }
              alt=""
              className="h-[600px] w-[1216px] rounded-xl"
            />
            <div className="absolute top-[340px] left-[10px] w-[598px] h-[252px] bg-white p-10 rounded-xl mx-30">
              <p className="flex flex-wrap mb-4 ">
                {article.tag_list.map((tag) => {
                  return (
                    <label className="text-sm mr-2.5 mb-1 rounded-md text-white bg-[#4B6BFB px-2.5 py-1]">
                      {tag}
                    </label>
                  );
                })}
              </p>
              <p className="text-4xl font-semibold mb-6 line-clamp-2">
                {article.title}
              </p>
              <p>{article.readable_publish_date}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-[9px] w-[1216px] justify-end mb-[100px]">
        <button
          onClick={leftClick}
          className="border-2 w-[40px] h-[40px] items-center justify-center flex"
        >
          <LeftSvg />
        </button>
        <button
          onClick={rightClick}
          className="border-2 w-[40px] h-[40px] items-center justify-center flex"
        >
          <RightSvg />
        </button>
      </div>
    </div>
  );
};
