import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BiSolidUserDetail } from "react-icons/bi";
import Swal from "sweetalert2";
import Loading from "../../loading/Loading";
import InterestTableData from "../../components/InterestTableData";

const CropDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [crop, setCrop] = useState(null);
  const [interests, setInterests] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [units, setUnits] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Load crop details
  useEffect(() => {
    fetch(`https://krishi-link-server-eta.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCrop(data))
      .catch((err) => console.error(err));
  }, [id]);

  // Load interests of this crop
  useEffect(() => {
    fetch("https://krishi-link-server-eta.vercel.app/interests")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.cropId?.toString() === id);
        setInterests(filtered);
      })

      .catch((err) => console.error(err));
  }, [id]);

  // Submit interest
  const handleInterestSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://krishi-link-server-eta.vercel.app/interests",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cropId: id,
            name: user?.displayName,
            email: user?.email,
            quantity: Number(quantity),
            units,
            message,
            cropTitle: crop.name,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Congratulation 🎉",
          text: "Thanks for showing interest in this crop!",
          icon: "success",
        });
        setQuantity("");
        setMessage("");
        setUnits("");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!crop) return <Loading />;

  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 py-8 gap-7">
      <div>
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{crop.name}</h1>
        <p className="text-gray-600 mb-1">Type: {crop.type}</p>
        <p className="text-gray-600 mb-1">
          Quantity: {crop.quantity} {crop.unit}
        </p>
        <p className="text-green-600 font-bold mb-3">Price: ৳{crop.price}</p>

        <div className="text-gray-600 mb-1 grid lg:grid-cols-7 grid-cols-1 items-center gap-2">
          <div className="lg:col-span-1 flex items-center gap-2">
            <BiSolidUserDetail className="text-green-500 text-3xl" />
            <p className="font-semibold text-lg">{crop.owner.ownerName}</p>
          </div>
          <p className="lg:col-span-6">({crop.owner.ownerEmail})</p>
        </div>

        <p className="text-gray-700 mb-4 mt-2">
          Description: <br /> {crop.description}
        </p>
      </div>

      {user.email === crop.owner.ownerEmail ? (
        <InterestTableData interests={interests} setInterests={setInterests} />
      ) : (
        <div>
          <form
            onSubmit={handleInterestSubmit}
            className="bg-white p-4 rounded-lg border border-green-300 shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-3">Interested to buy?</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  placeholder="e.g. 100"
                  className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Unit</label>
                <select
                  name="unit"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  required
                  className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border cursor-pointer"
                >
                  <option value="">Select Unit</option>
                  <option value="kg">kg</option>
                  <option value="bag">bag</option>
                  <option value="ton">ton</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  name="description"
                  required
                  placeholder="Message about this crop"
                  rows="2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-gray-300 rounded-lg p-2 outline-none border resize-none"
                ></textarea>
              </div>
            </div>

            <label className="block font-medium mb-1 mt-4">Price</label>
            <input
              type="text"
              value={`৳${crop.price}`}
              readOnly
              className="input input-bordered w-full border-green-300 rounded-lg p-2 outline-none border cursor-pointer bg-green-100"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white px-5 py-2 mt-3 rounded-lg hover:bg-green-700 w-full disabled:bg-gray-400"
            >
              {loading ? "Submitting..." : "Submit Interest"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CropDetails;
