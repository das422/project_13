import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className=" flex-1  ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
