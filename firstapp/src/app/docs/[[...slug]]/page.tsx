const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length > 0)
    return (
      <div>
        Docs Page
        <div>
          {params.slug?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
      </div>
    );

  return <h1>docs page</h1>;
};
export default Docs;
