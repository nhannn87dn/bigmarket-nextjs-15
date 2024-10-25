interface TailwindSkeletonProps {
    className?: string;
    limit?: number;
    width?: string;
    height?: string;
  }
  
  export default function TailwindSkeleton({
    className = '',
    limit = 1,  // mặc định là 1
    width='w-full',
    height='h-5'
  }: TailwindSkeletonProps) {
    return (
      <>
        {[...Array(limit)].map((_, index) => (
          <div
            key={index}
            className={`${className} ${width} ${height} bg-gray-200 rounded animate-pulse my-2`}
          ></div>
        ))}
      </>
    );
  }
  