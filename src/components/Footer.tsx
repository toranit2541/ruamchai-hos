import React from "react";
import logoSrc from "../assets/logo55.png";
import facebookIcon from "../assets/facebook.png";
import lineIcon from "../assets/line.png";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";

type LinkItem = { label: string; href?: string };

const FooterColumn: React.FC<{ title: string; links: LinkItem[] }> = ({
  title,
  links,
}) => (
  <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <h3 className="text-sm font-semibold text-gray-800 tracking-wide mb-4">
      {title}
    </h3>
    <nav aria-label={title} className="flex flex-col gap-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href ?? "#"}
          className="text-sm text-gray-600 hover:text-teal-600 transition-colors"
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
}> = ({ href = "#", label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="text-gray-400 hover:text-teal-600 transition-colors"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-b from-blue-50 to-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
        {/* Logo & Info */}
        <div className="md:w-1/3 text-center md:text-left">
          <img
            src={logoSrc}
            alt="Ruamchai Pracharug Hospital"
            className="w-40 mx-auto md:mx-0 mb-4"
          />

          <p className="text-sm text-gray-600 leading-relaxed">
            โรงพยาบาลรวมชัยประชารักษ์
            โรงพยาบาลเอกชนขนาด 100 เตียง
            ให้บริการทางการแพทย์อย่างครบวงจร
          </p>

          <p className="mt-4 text-sm text-gray-500">
            168/26 หมู่ 4 ถ.บางนา–ตราด กม.29
            ต.บางบ่อ อ.บางบ่อ
            จ.สมุทรปราการ 10560
          </p>

          <p className="mt-2 text-sm text-gray-500">
            โทรศัพท์: 0-2708-7501-10
          </p>
        </div>

        {/* Links */}
        <div className="md:w-2/3 flex flex-wrap gap-y-10">
          <FooterColumn
            title="เกี่ยวกับโรงพยาบาล"
            links={[
              { label: "ข้อมูลโรงพยาบาล", href: "/about" },
              { label: "ทีมแพทย์", href: "/doctors" },
            ]}
          />

          <FooterColumn
            title="บริการของเรา"
            links={[
              { label: "คลินิกเฉพาะทาง", href: "/clinic" },
              { label: "แพ็คเกจและโปรโมชั่น", href: "/package" },
              { label: "ห้องพักพยาบาล", href: "/rooms" },
            ]}
          />

          <FooterColumn
            title="ติดต่อ"
            links={[
              { label: "ติดต่อเรา", href: "/contact" },
              { label: "ร่วมงานกับเรา", href: "/careers" },
            ]}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Ruamchai Pracharug Hospital. All rights reserved.
          </p>

          <div className="sm:ml-auto flex gap-4">
            <SocialIcon label="Facebook" href="https://www.facebook.com/ruamchaipracharug?mibextid=LQQJ4d">
              <img src={facebookIcon} alt="Facebook" className="w-7 h-7" />
            </SocialIcon>

            <SocialIcon label="Line" href="https://line.me/R/ti/p/@104vtkyc?oat_content=url">
              <img src={lineIcon} alt="Line" className="w-7 h-7" />
            </SocialIcon>

            <SocialIcon label="Instagram">
              <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
            </SocialIcon>
            <SocialIcon label="TikTok">
              <img src={tiktokIcon} alt="TikTok" className="w-7 h-7" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
