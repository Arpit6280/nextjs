import { useRouter } from "next/router";
function Developer() {
  const router = useRouter();
  return (
    <div>
      <h1>Developer - {router.query.developer}</h1>
    </div>
  );
}

export default Developer;
