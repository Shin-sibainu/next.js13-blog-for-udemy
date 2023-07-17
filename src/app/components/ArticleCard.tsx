import React from "react";
import { Article } from "../types";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <article className="flex flex-col shadow my-4">
        <a href="#" className="hover:opacity-75">
          <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Technology
          </a>
          <a
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {/* Next.js13. no-storeとno-cacheの違い */}
            {article.title}
          </a>
          <p className="text-sm pb-3 text-slate-900">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              {article.author}
            </a>
            , Published on {article.createdAt}
          </p>
          <a href="#" className="pb-6 text-slate-900">
            {article.content}
          </a>
          <a href="#" className="uppercase text-pink-800 hover:text-black">
            続きを読む <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
