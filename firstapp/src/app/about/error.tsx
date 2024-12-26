"use client";
const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      {error.message}
      <button className='border block' onClick={reset}>
        Try Again
      </button>
    </div>
  );
};
export default ErrorBoundary;
