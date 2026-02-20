const CookiePolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">
        นโยบายคุกกี้
      </h1>

      <p className="mb-4">
        เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของผู้ใช้
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">
        ประเภทของคุกกี้
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>คุกกี้ที่จำเป็น (Necessary Cookies)</li>
        <li>คุกกี้เพื่อการวิเคราะห์ (Analytics Cookies)</li>
        <li>คุกกี้เพื่อการตลาด (Marketing Cookies)</li>
      </ul>
    </div>
  );
};

export default CookiePolicy;
