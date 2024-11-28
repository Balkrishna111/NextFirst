const page = ({
  params,
}: {
  params: {
    userId: string;
    postId: string;
  };
}) => {
  return (
    <div>
      <h1>
        This is User {params.userId} and Post {params.postId}
      </h1>
    </div>
  );
};
export default page;
