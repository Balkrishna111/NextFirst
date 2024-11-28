const page = ({
  params,
}: {
  params: {
    userId: string;
  };
}) => {
  return <div>user {params.userId}</div>;
};
export default page;
