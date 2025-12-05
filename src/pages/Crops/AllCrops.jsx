import React, { useEffect, useState } from "react";
import AllCropData from "../../components/AllCropData";
import SearchNotFound from "../../components/SearchNotFound";
import Loading from "../../loading/Loading";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");

  useEffect(() => {
    fetch("https://krishi-link-server-eta.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching crops:", error);
        setLoading(false);
      });
  }, []);

  // Search filter
  const term = search.trim().toLowerCase();
  const searched = term
    ? crops.filter((crop) => crop.name?.toLowerCase().includes(term))
    : crops;

  // Sort filter
  const sorted = [...searched].sort((a, b) => {
    if (sort === "low-asc") return a.price - b.price;
    if (sort === "high-desc") return b.price - a.price;
    return 0;
  });

  // my final data here
  const finalCrops = sorted;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-10 mb-20">
        <h2 className="text-4xl font-bold text-green-700 mb-3">All Crops</h2>
        <p className="text-gray-600 mb-10">
          All crops are Original, Organic, Authentic. Choose according to your
          needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className="col-span-2">
          <h1 className="lg:font-bold font-normal text-green-600 lg:text-xl text-small ">
            ({finalCrops.length}) Available
          </h1>
        </div>
        {/* Search box  */}
        <div className="col-span-8 mx-auto flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="#6B7280"
          >
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="w-full h-full outline-none text-sm text-gray-500"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 transition w-32 h-9 rounded-full text-sm text-white mr-[5px] cursor-pointer"
          >
            Search
          </button>
        </div>
        {/*  Sorting data */}
        <div className="col-span-2">
          <select
            className="select select-bordered cursor-pointer"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option value="low-asc">Low - High</option>
            <option value="high-desc">High - Low</option>
          </select>
        </div>
      </div>

      {/* Loading state and set data */}
      {loading ? (
        <Loading></Loading>
      ) : finalCrops.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {finalCrops.map((crop) => (
            <AllCropData key={crop.id} crop={crop} />
          ))}
        </div>
      ) : (
        <div className="p-10">
          <SearchNotFound />
        </div>
      )}
    </div>
  );
};

export default AllCrops;
