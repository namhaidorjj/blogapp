import React, { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { Trending } from "./Trending";

export const ApiBlog = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <main className="pl-[350px] pr-[350px]">
      <section>
        <Hero />
      </section>
      <section>
        <Trending />
      </section>
      <section className="my-24">
        <div className="flex justify-between mb-8">
          <h4 className="font-bold text-2x1">All Blog Post</h4>
          <button className="font-bold text-xs text-title">View All</button>
        </div>
        <div className="grid grid-cols-3 gap-5  ">
          {articles.map((article) => (
            <div className="flex flex-col p-4 rounded-xl w-[392px] gap-[16px]  h-[488px] border">
              <div className="w-[360px] h-[240px]">
                <img
                  className="w-[360px] h-[240px] rounded-xl"
                  src={
                    article.cover_image
                      ? article.cover_image
                      : "https://picsum.photos/536/354"
                  }
                  alt=""
                />
              </div>
              <div className="flex flex-col w-[360px] h-[200px]">
                <p className="text-[#4B6BfB] pb-4 justify-start">
                  {article.type_of}
                </p>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-2xl text-[181A2A] font-semibold">
                      {article.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      className="w-[32px] h-[32px] rounded-full"
                      src={article.user.profile_image}
                      alt=""
                    />
                    <p>{article.comments_count}</p>
                    <p className="flex flex-col justify-end">
                      {article.readable_publish_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
