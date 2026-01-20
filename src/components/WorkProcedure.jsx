import { FaSeedling, FaLeaf, FaWater, FaTruck } from "react-icons/fa";

const WorkProcedure = () => {
  const steps = [
    {
      title: "Prepare the Soil",
      description:
        "Start with healthy soil using compost, green manure, and crop rotation.",
      icon: <FaSeedling className="text-green-600 text-4xl" />,
    },
    {
      title: "Use Natural Inputs",
      description:
        "Apply organic fertilizers like bone meal and avoid synthetic pesticides.",
      icon: <FaLeaf className="text-green-600 text-4xl" />,
    },
    {
      title: "Care for Crops",
      description:
        "Monitor plant health, encourage biodiversity, and use natural pest control.",
      icon: <FaWater className="text-green-600 text-4xl" />,
    },
    {
      title: "Harvest & Sell",
      description:
        "Harvest at peak ripeness and sell through organic-certified channels.",
      icon: <FaTruck className="text-green-600 text-4xl" />,
    },
  ];
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
        How Organic Farming Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-green-800 text-center mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcedure;
