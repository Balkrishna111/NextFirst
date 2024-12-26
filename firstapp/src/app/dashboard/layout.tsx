import Card from "@/components/card";

const DashboardLayout = ({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      {/* <div className='flex'>
        <div className='flex flex-col'>
        </div>
      </div> */}

      <div className='flex w-full'>
        <div className='flex flex-col w-1/2'>
          <Card>{users}</Card>
          <Card>{revenue}</Card>
        </div>

        <Card>{notifications}</Card>
      </div>
    </div>
  );
};
export default DashboardLayout;
