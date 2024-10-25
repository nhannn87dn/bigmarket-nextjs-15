import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='max-w-7xl mx-auto my-4'>
      <h1 className='text-2xl font-bold'>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}