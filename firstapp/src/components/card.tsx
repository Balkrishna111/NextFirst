const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full border-2 border-red-400 py-10 flex justify-center items-center'>
      {children}
    </div>
  );
};
export default Card;
