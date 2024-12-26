import { Metadata } from "next";

type propsT = {
  params: {
    userId: string;
  };
};

export const generateMetadata = ({ params }: propsT): Metadata => {
  return {
    title: {
      default: `User ${params.userId} Default`,
      template: `%s | User ${params.userId}`,
    },
  };
};

const page = ({ params }: propsT) => {
  return <div>user {params.userId}</div>;
};
export default page;
