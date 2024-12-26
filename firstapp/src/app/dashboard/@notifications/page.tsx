import Link from "next/link";

const Notifications = () => {
  return (
    <div>
      <h1>Notifications</h1>
      <Link href={"/dashboard/archived"}>Archived</Link>
    </div>
  );
};
export default Notifications;
