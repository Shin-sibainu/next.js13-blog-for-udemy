import { getDetailArticle } from "@/pages/api/blogAPI";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const detailArticle = await getDetailArticle(params.slug);
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-4xl text-center mb-10">{detailArticle.title}</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
    </div>
  );
}
