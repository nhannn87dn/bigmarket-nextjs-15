import Link from "next/link"

export default function SystemArticlesLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-7xl mx-auto my-4">
        <div className="system-articles-wrapper flex gap-x-3">
            <div className="system-article-links flex flex-col gap-y-3 w-[250px]">
                <Link className="hover:text-primary" href={`/gioi-thieu`}>Giới thiệu</Link>
                <Link className="hover:text-primary" href={`/chinh-sach-doi-tra-hang`}>Chính sách đổi trả hàng</Link>
                <Link className="hover:text-primary" href={`/chinh-sach-thanh-toan`}>Chính sách thanh toán</Link>
                <Link className="hover:text-primary" href={`/chinh-sach-bao-hanh`}>Chính sách bảo hành</Link>
                <Link className="hover:text-primary" href={`/dieu-khoan-su-dung`}>Điều khoản sử dụng</Link>
                <Link className="hover:text-primary" href={`/chinh-sach-bao-mat-thong-tin`}>Chính sách bảo mật</Link>
                <Link className="hover:text-primary" href={`/lien-he`}>Hệ thống cửa hàng</Link>
                <Link className="hover:text-primary" href={`/lien-he`}>Liên hệ</Link>
            </div>
            <div className="main-content flex-1">
            {children}
            </div>
        </div>
        
    </div>
  )
}
