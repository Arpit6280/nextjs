import { useRouter } from "next/router";
function DetailPage() {
  const router = useRouter();

  return (
    <div>
      <h1>detail Page</h1>
      <h2>{router.query.newsId} </h2>{" "}
    </div>
  );
}

export default DetailPage;
