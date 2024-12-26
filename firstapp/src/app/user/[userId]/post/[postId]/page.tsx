import { Metadata } from "next";

type propsT = {
  params: {
    userId: string;
    postId: string;
  };
};

export const generateMetadata = ({ params }: propsT): Metadata => {
  return {
    title: `Post ${params.postId}`,
  };
};

const page = ({ params }: propsT) => {
  return (
    <div>
      <h1>
        This is User {params.userId} and Post {params.postId}
      </h1>
    </div>
  );
};
export default page;
