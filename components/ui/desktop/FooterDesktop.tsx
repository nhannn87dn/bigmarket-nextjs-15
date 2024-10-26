import { getHelpLinks } from "@/constants/APIEndpoints/help";
import { settings } from "@/constants/settings";
import Link from "next/link";

const FooterDesktop = async () => {
  const helps = await getHelpLinks();
  console.log(helps);
  if(!helps) return null;
  return (
    <footer className="pt-10 pb-5 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="footer-links grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="footer-links-item">
            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, officiis. Quas eius porro est doloribus! Iusto enim, pariatur molestias harum tenetur nisi accusantium. Assumenda, quis aut at fugiat rerum accusantium.
            </p>
            <p><strong>Hotline</strong>: {settings.hotline}</p>
            <p><strong>Email</strong>: {settings.email}</p>
            <p><strong>Address</strong>: {settings.address}</p>
            <p><strong>MST</strong>: {settings.taxCode}</p>
          </div>
          {Object.entries(helps).map(([key, category]) => (
            <div className="footer-links-item" key={key}>
              <div className="item-title font-bold mb-3">{category.cat_name}</div>
              <ul className="flex flex-col gap-y-2">
                {Object.entries(category.article).map(([articleKey, a]) => (
                  <li key={articleKey}>
                    <Link href={`/${a.url}`}>
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-links-item">
            <div className="item-title font-bold mb-3">Kết nối với chúng tôi</div>
            <ul className="flex flex-col gap-y-2">
              <li>Facebook</li>
              <li>Zalo</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright mt-10 py-5">
          <p>© 2024 {settings.siteName}. Phát triển bởi <a target="_blank" href="https://ecshopvietnam.com">Ecshopvietnam.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
