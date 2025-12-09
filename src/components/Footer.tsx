import React from "react";
import logoSrc from "../assets/logo55.png";

type LinkItem = { label: string; href?: string };

const FooterColumn: React.FC<{ title: string; links: LinkItem[] }> = ({ title, links }) => (
  <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h3 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{title}</h3>
    <nav aria-label={title} className="flex flex-col gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href ?? '#'}
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
        >
          {l.label}
        </a>
      ))}
    </nav>
  </div>
);

const SocialIcon: React.FC<{
  href?: string;
  label: string;
  children: React.ReactNode;
}> = ({ href = '#', label, children }) => (
  <a href={href} aria-label={label} className="text-gray-500 hover:text-gray-700 transition-colors">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-600 body-font bg-gradient-to-br from-blue-50 to-white">
      <div className="container px-5 py-12 mx-auto flex md:items-start md:flex-row flex-col">
        <div className="w-64 flex-shrink-0 mx-auto md:mx-0 text-center md:text-left">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
            <img src={logoSrc} alt="Ruamchai logo" className="w-36 h-auto object-contain" />
          </a>
          <p className="mt-3 text-sm text-gray-500">เลขที่ 168/26 หมู่4 ถ.บางนา-ตราด กม.29 ต.บางบ่อ อ.บางบ่อ จ.สมุทรปราการ 10560</p>
          <p className="mt-1 text-sm text-gray-500">โทร : 0-2708-7501-10</p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 mt-10 md:mt-0 text-center md:text-left">
          <FooterColumn
            title="เกี่ยวกับเรา"
            links={[{ label: 'ข้อมูลโรงพยาบาล' }, { label: 'ข่าวสารและกิจกรรม' }]}
          />
          <FooterColumn
            title="บริการของเรา"
            links={[{ label: 'ค้นหาแพทย์' }, { label: 'แพ็คเกจและโปรโมชั่น' }, { label: 'สาระน่ารู้' }]}
          />
          <FooterColumn
            title="ติดต่อเรา"
            links={[{ label: 'ติดต่อเรา' }, { label: 'ร่วมงานกับเรา' }]}
          />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 Ruamchai Pracharug —
            <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Toranit</a>
          </p>

          <div className="inline-flex sm:ml-auto sm:mt-0 mt-3 space-x-3">
            <SocialIcon href="#" label="Facebook">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="#" label="Twitter">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="#" label="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </SocialIcon>

            <SocialIcon href="#" label="LinkedIn">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
