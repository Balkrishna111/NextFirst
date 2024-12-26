import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: {
      default: "User Default",
      template: "%s | User",
    },
  };
};

export default function User() {
  return <div>Hello User</div>;
}
