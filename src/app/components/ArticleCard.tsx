import React from "react";
import { Article } from "../types";
import Link from "next/link";
import Image from "next/image";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <article className="flex flex-col shadow my-4">
        <Link href={`articles/${article.id}`} className="hover:opacity-75">
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
            width={1280}
            height={300}
            alt=""
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Technology
          </a>
          <Link
            href={`articles/${article.id}`}
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {/* Next.js13. no-storeとno-cacheの違い */}
            {article.title}
          </Link>
          <p className="text-sm pb-3 text-slate-900">
            Published on{" "}
            {article.createdAt &&
              new Date(article.createdAt).toLocaleDateString()}
          </p>
          <Link href={`articles/${article.id}`} className="pb-6 text-slate-900">
            {article.content.length > 70
              ? article.content.substring(0, 70) + "..."
              : article.content}
          </Link>
          <Link
            href={`articles/${article.id}`}
            className="uppercase text-pink-800 hover:text-black"
          >
            続きを読む <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
