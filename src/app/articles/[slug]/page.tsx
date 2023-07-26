import { getDetailArticle } from "@/pages/api/blogAPI";
import Image from "next/image";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const detailArticle = await getDetailArticle(params.slug);
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
        width={1280}
        height={300}
        alt=""
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
    </div>
  );
}
