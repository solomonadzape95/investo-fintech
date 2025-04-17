const steps = [
  {
    title: "First of all create an account",
    description:
      "Create an account using your email address or social media profile. Quick and straightforward registration process.",
    icon: "/icons/bank.png",
  },
  {
    title: "Track Transactions in Real-Time",
    description:
      "Monitor the status of your transactions with instant updates and notifications.",
    icon: "/icons/pin.png",
  },
  {
    title: "Access 24/7 Customer Support",
    description:
      "Get assistance anytime with our dedicated support team ready to help with any issues or questions.",
    icon: "/icons/support.png",
  },
];
export default function SendMoney() {
  return (
    <div className="flex items-center justify-between w-full gap-[60px] mt-20 md:mt-40 px-5 md:px-20 font-manrope flex-col md:flex-row h-fit">
      <div className="max-w-[500px] space-y-5">
        <section className="space-y-4 text-center md:text-left">
          <h2 className="font-manrope text-[32px] md:text-[54px] leading-10 md:leading-15 font-semibold ">
            Let's Start Sending Your Money
          </h2>
          <p>
            y integrating advanced technologies, fintech reshapes the financial
            landscape, making it more user-friendly and adaptive to modern
            needs.
          </p>
        </section>
        <section className="flex flex-col gap-6">
          {steps.map((step) => (
            <span className="flex items-start justify-center gap-2 mr-auto">
              <span className="bg-[#F1F5F9] p-3 flex items-center rounded-lg">
                <img src={step.icon} alt={step.title} width={24} />
              </span>
              <span className="space-y-2 max-w-md">
                <h3 className="font-semibold text-xl">{step.title}</h3>
                <p className="text-[14px] md:text-[16px]">{step.description}</p>
              </span>
            </span>
          ))}
        </section>
      </div>
      <div className="w-full md:w-1/2 flex items-end justify-center mt-12 md:mt-0">
        <div className="w-[327px] h-[271px] md:w-[576px] md:h-[478px] rounded-xl bg-primary-100 flex items-end justify-center">
          <img src="/images/send-money.png" alt="iphone" className="h-[130%]" />
        </div>
      </div>
    </div>
  );
}
