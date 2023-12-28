import React, { useEffect, useState } from "react";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => {
        const sortedArticles = data.sort(
          (a, b) => b.comments_count - a.comments_count
        );
        setArticles(sortedArticles);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  return (
    <div>
      <div>Trending</div>
      <div className=" relative gap-[20px] rounded-xl grid-cols-4 grid">
        {articles.slice(0, 4).map((article) => (
          <div className="flex flex-col rounded-md  w-[289px] h-[320px]">
            <div className="">
              <img
                className="w-[289px] h-[320px] rounded-xl opacity-0.2"
                src={article.cover_image}
              />
            </div>
            <div className="absolute flex flex-col pt-[172px] pl-[28.5px] pr-[30.5px] gap-4">
              <button className="text-white bg-[#4B6BFB] w-[66px] h-[20px] rounded-xl flex justify-center items-center">{article.type_of}</button>
              <p className="text-white w-[230px] h-[76px]">{article.title}</p>
              {/* <p>{article.comments_count}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
