import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden   text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="p-10 max-w-lg w-11/12 text-center"
      >
        <div className="flex flex-col items-center justify-center text-sm max-md:px-4">
          <h1 className="text-8xl md:text-9xl font-bold text-black">404</h1>
          <div className="h-1 w-16 rounded bg-black my-5 md:my-7"></div>
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            Page Not Found
          </p>
          <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link
              to={"/"}
              className="bg-green-500 hover:bg-green-600  px-7 py-2.5 text-white rounded-md transform transition duration-300 ease-in-out  hover:scale-105  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Return Home
            </Link>
            <Link
              to={"/contact"}
              className="border border-green-500 px-7 py-2.5 text-green-500 rounded-md transform transition duration-300 ease-in-out  hover:scale-105  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Contact support
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Decorative text */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-10 text-gray-400 text-sm tracking-wider"
      >
        Develop by -{" "}
        <a
          href="https://www.linkedin.com/in/mohyminulislam/"
          target="blank"
          className="text-black font-bold"
        >
          Mohyminul Islam
        </a>{" "}
      </motion.p>
    </div>
  );
};

export default NotFound;
