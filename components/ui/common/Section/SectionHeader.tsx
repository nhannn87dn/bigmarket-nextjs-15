import Link from "next/link";

type TLinkItem = {
    label: string;
    href: string;
}
type TSectionHeader = {
    title: string;
    moreExtra?: React.ReactNode;
    extra?: TLinkItem[],
    titleClass?: string;
}
export default function SectionHeader({
    title, 
    moreExtra= null,
    extra= [],
    titleClass= '',
}: TSectionHeader) {
  return (
    <div className="section-header flex justify-between items-center gap-x-2">
        <h2 className={`section-title ${titleClass} font-bold text-2xl`}>{title}</h2>
       <div className="section-extra flex items-center gap-x-2">
        {extra && extra.length > 0 && extra.map(({ label, href }, index) => (
            <Link href={href} key={`${index}-${href}`}>
                {label}
            </Link>
        ))}
        {moreExtra ? moreExtra : null}
        </div>
    </div>
  )
}
