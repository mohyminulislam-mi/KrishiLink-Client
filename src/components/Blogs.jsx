const blogPosts = [
  {
    title: "5 Tips for Healthier Soil Using Organic Methods",
    category: "Soil & Composting",
    image: "https://i.ibb.co.com/J1sF7hS/Soil-Composting.jpg",
  },
  {
    title: "Natural Pest Control: What Works for Small Farms",
    category: "Crop Protection",
    image: "https://i.ibb.co.com/zTGg2pY8/Crop-Protection.webp",
  },
  {
    title: "How to Get Certified as an Organic Farmer",
    category: "Organic Certification",
    image: "https://i.ibb.co.com/LdKdw8NP/Organic-Certification.png",
  },
  {
    title: "Companion Planting: Boost Yields Naturally",
    category: "Crop Planning",
    image: "https://i.ibb.co.com/B5NKdRvj/Crop-Planning.webp",
  },
];
const Blogs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
        Agro News
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Stay ahead with fresh insights on organic farming, soil health, pest
        control, and certification.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-green-700 font-medium">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                {post.title}
              </h3>

              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
