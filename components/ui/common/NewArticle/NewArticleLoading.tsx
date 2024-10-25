import React from 'react'
import Section from '../Section'
import SectionHeader from '../Section/SectionHeader'
import Link from 'next/link'
import TailwindSkeleton from '../TailwindSkeleton'

/* Xem thêm tin tức */
const ButtonMore = ()=>{
    return (
        <Link className="flex gap-x-1 items-center" href={'/n/tin-tuc'}>Xem thêm <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg></Link>
    )
}

const ArticleItem = ()=>{
    return (
      <div className="article-item flex-1 flex flex-col">
        <div className="article-thumb overflow-hidden w-full rounded-md">
            <TailwindSkeleton className='w-full h-[167px]' />
        </div>
        <div className="article-info">
            <TailwindSkeleton className='w-full h-10' />
            <TailwindSkeleton className='w-1/2 h-10' />
        </div>
      </div>
    )
  }

export default function NewArticleLoading() {
  return (
    <Section className="section-article bg-white p-4 rounded-md">
        <SectionHeader title="Tin mới" moreExtra={<ButtonMore />} />
        <div className="article-list grid grid-cols-4 gap-4 mt-4">
            {[...Array(4)].map((_, index) => (<ArticleItem key={index} />))}
        </div>
    </Section>
  )
}
