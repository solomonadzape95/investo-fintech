import { FaBullseye, FaStar } from "react-icons/fa6";

// const stats = ["/images/stats1.png", ""];
export default function Stats() {
  return (
    <div className="w-full flex flex-col md:flex-row font-manrope justify-between gap-10 max-w-6xl mx-auto mt-24 mb-96">
      <div className="flex gap-4 flex-col items-start w-sm">
        <div className="flex gap-3 items-center">
          <div className="flex">
            <img
              src="/images/avatar1.png"
              alt="User 1"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
            <img
              src="/images/avatar2.png"
              alt="User 2"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
            <img
              src="/images/avatar3.png"
              alt="User 3"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
          </div>
          <h2 className="text-[32px] font-bold m-0">120K+</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-[16px] text-gray-600 m-0">
            Our platform is a trusted choice for money transfers.
          </p>
        </div>
      </div>
      <div className="flex gap-4 flex-col items-start w-sm">
        <div className="flex gap-3 items-center">
          <div className="flex ">
            <FaStar className="text-[#FFA200CC] size-10" />
          </div>
          <h2 className="text-[32px] font-bold m-0">4.9+</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-[16px] text-gray-600 m-0">
            Our high rating proves our platform’s quality and positive global
            user impact.
          </p>
        </div>
      </div>
      <div className="flex gap-4 flex-col items-start w-sm">
        <div className="flex gap-3 items-center">
          <div className="flex ">
            <FaBullseye className="text-[#1AD05C] size-10" />
          </div>
          <h2 className="text-[32px] font-bold m-0">89+</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-[16px] text-gray-600 m-0">
            Our global presence ensures reliable, efficient financial solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
