import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const faqs = [
  {
    head: "Can I use the service for business transactions?",
    body: "Yes, our platform supports both personal and business transactions. Businesses can benefit from our secure and efficient transfer options tailored to their needs.",
  },
  {
    head: "What is the maximum amount I can transfer?",
    body: "The maximum amount you can transfer depends on your account type and verification level. Please refer to our terms and conditions for detailed information.",
  },
  {
    head: "How do I update my account information?",
    body: "You can update your account information by logging into your account and navigating to the settings section. From there, you can edit your personal details.",
  },
  {
    head: "Are there any benefits for frequent users?",
    body: "Yes, we offer various loyalty programs and discounts for frequent users. Please check our website for more details.",
  },
  {
    head: "Can I access my account from multiple devices?",
    body: "Yes, you can access your account from multiple devices. Just ensure you log in with the same credentials.",
  },
];
export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };
  return (
    <div className="font-manrope flex flex-col items-center justify-center gap-y-3 px-1 md:px-10 my-20 md:my-28 w-full md:flex-row">
      <div className="max-w-[500px] space-y-5 md:text-left text-center">
        <section className="space-y-4 text-center md:text-left">
          <span>FAQ'S</span>
          <h2 className="font-manrope text-[32px] md:text-[54px] leading-10 md:leading-15 font-semibold ">
            Frequently Asked Questions
          </h2>
          <p>Ask any questions</p>
        </section>
        <Link
          to="mailto:ivesto@fintech.com"
          className="text-[#5945FD] text-[20px] md:text-[32px] font-medium cursor-pointer"
        >
          investo@fintech.com
        </Link>
      </div>
      <div className="flex flex-col gap-5 mt-10 md:mt-20 b h-full w-11/12 md:w-1/2">
        <section className="">
          {faqs.map((faq, index) => (
            <span
              className={`border-t-[2px] border-[#1717171F] flex justify-between py-3 md:py-5 w-full cursor-pointer relative overflow-hidden border-collapse transition-all duration-300 ${
                openItem === index ? "h-[170px]" : "md:h-[80px] xl:h-[70px]"
              } ${index === faqs.length - 1 ? "border-b-[2px]" : ""}`}
              style={{
                maxWidth: "600px", // Set a fixed maxWidth to prevent width changes
                margin: "0 auto",
              }}
              onClick={() => handleToggle(index)}
            >
              <span className="text-left w-11/12 space-y-3">
                <h3 className="font-semibold text-[16px] md:text-[18px] xl:text-[24px]">
                  {faq.head}
                </h3>
                {openItem === index ? (
                  <p className="text-[16px]">{faq.body}</p>
                ) : (
                  ""
                )}
              </span>
              <span className="size-6 text-[20px] self-start flex items-center absolute right-3 top-4 md:top-6">
                {openItem === index ? <FaMinus /> : <FaPlus className="" />}
              </span>
            </span>
          ))}
        </section>
      </div>
    </div>
  );
}
