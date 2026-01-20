import React from "react";
import Farmer from "../../../assets/farmer.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "How do I buy farm-fresh produce?",
      answer:
        "To purchase fresh produce, simply browse the local farms in your region, select your desired seasonal fruits, vegetables, or artisanal goods, and add them to your basket. You can then proceed to checkout and schedule a convenient farm-to-door delivery or a local pickup at the farm gate.",
    },
    {
      question: "Are there different types of farm products available?",
      answer:
        "Yes, our platform features a diverse range of local growers offering everything from organic heirloom vegetables and pasture-raised eggs to raw honey and seasonal orchard fruits. You can explore the full variety in the 'Marketplace' section.",
    },
    {
      question: "Is the produce harvested recently?",
      answer:
        "Yes, all items are harvested at the peak of ripeness by local farmers only after you place your order. This ensures you receive the most nutrient-dense, flavorful produce with minimal time spent in transit.",
    },
    {
      question: "Can I find products that match specific growing standards?",
      answer:
        "Absolutely. You can filter your search by farming practices—such as Certified Organic, non-GMO, or Regenerative—to match your values. For more details on a specific farm's methods, check the 'Farmer’s Story' section on their profile page.",
    },
  ];
  return (
    <div>
      {/* Heading */}
      <div className="text-center mt-16 mb-4">
        <h2 className="text-4xl font-extrabold text-green-700 mb-4">FAQ</h2>
        <div className="flex justify-center mb-3">
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-green-400"></div>
        </div>
      </div>

      <div className="lg:w-8/12 mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0 my-10">
        <img
          className="max-w-sm w-full rounded-xl h-96"
          src={Farmer}
          alt="Farmer"
        />
        <div>
          <h1 className="text-3xl font-semibold">
            Pure Harvests, Grown Simple
          </h1>
          <p className="text-sm text-slate-500 mt-2 pb-4">
            Savor the Best Your Local Soil Has to Offer — Naturally Grown, Freshly Picked, and Delivered from Field to Fork.
          </p>
          {faqs.map((faq, index) => (
            <div
              className="border-b border-slate-200 py-4 cursor-pointer"
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{faq.question}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                  openIndex === index
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
