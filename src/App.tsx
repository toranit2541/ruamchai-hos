import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

function Layout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen ">
      {!isAuthPage && !isAdminPage && <Navbar />}
      <main>
        <AppRoutes />
      </main>
      {!isAuthPage && !isAdminPage && <Footer />}
      <CookieBanner />
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;
