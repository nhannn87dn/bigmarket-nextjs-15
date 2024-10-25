import React from 'react'
type TSection = {
    children: React.ReactNode;
    className?: string;
}
export default function Section({children, className}: TSection) {
  return (
    <section className={`section ${className} `}>
        {children}
    </section>
  )
}
