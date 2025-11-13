import Header from "../shared/Header";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";

const MainlayOut = () => {
  return (
    <div>
      <header className="bg-base-100 sticky top-0 z-50">
        <Header />
      </header>
      <section>
        <Outlet></Outlet>
      </section>
      <footer className="bg-base-200">
        <Footer />
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default MainlayOut;
