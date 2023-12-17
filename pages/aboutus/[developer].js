import { useRouter } from "next/router";
function Developer() {
  const router = useRouter();
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  let developer = router.query.developer;
  let position = "Doesn't exist";
  let names = "Dveloper";
  if (developer >= 1 && developer <= 3) {
    position = details[developer - 1].role;
    names = details[developer - 1].name;
  }

  return (
    <div>
      <h1>
        {names} - {position}{" "}
      </h1>
    </div>
  );
}

export default Developer;
