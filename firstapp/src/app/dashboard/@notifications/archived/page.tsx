import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Archived Notifications</h1>
      <Link href={"/dashboard"}>Default</Link>
    </div>
  );
};
export default page;
