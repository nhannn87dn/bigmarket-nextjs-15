/**
 * Thông tin cấu hình thiết lập trong dashboard  cửa hàng
 */
const applicationName = 'BigMarket';

export const settings = {
    siteName: applicationName,
    langDefault: 'vi',
    metaTitle: 'Bigmarket.vn - Chuỗi cửa hàng thực phẩm sạch',
    metaDesc: 'Bigmarket.vn - Chuỗi cửa hàng thực phẩm sạch. Đa dạng ngành hàng thực phẩm tươi, đông lạnh, hàng đặc sản vùng miền. Phân phối toàn quốc.',
    hotline: '0988.777.666',
    address: '12345 ABC, TPHCM',
    email: 'bigmarket.vn@gmail.com',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',
    taxCode: '123456789',
    metaDataBaseField: {
        generator: applicationName,
        applicationName: applicationName,
        referrer: 'origin-when-cross-origin',
        authors: [{ name: 'Ngọc nhân', url: 'https://ecshopvietnam.com' }],
        creator: 'Ngọc nhân',
        publisher: 'Ngọc nhân',
        formatDetection: {
          email: false,
          address: false,
          telephone: false,
        },
    },
    imageLoading: ({ width=20, quality=75 }: { width?: number, quality?: number }) => {
        return `/images/loading.gif?w=${width}&q=${quality || 75}`
    },
    articlePerPage: 9, //Số lượng tin 1 page tin tức
    productPerPage: 5, //Số lượng sản phẩm 1 page
}