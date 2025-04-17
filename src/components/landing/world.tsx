export default function World() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-[60px] mt-20 md:mt-40 px-5 md:px-20">
      <div className="w-full max-w-xl md:w-[500px] flex items-center justify-center font-manrope">
        <section className="space-y-4 text-center md:text-left">
          <h2 className="font-manrope text-[32px] md:text-[48px] leading-10 md:leading-15 font-semibold">
            Smooth and Easy International Transfers.
          </h2>
          <p>
            With user-friendly features, competitive exchange rates, and robust
            security measures, our platform simplifies international
            transactions.
          </p>
          <section className="flex items-start justify-center gap-2 flex-col mx-auto md:mx-0">
            <span className="flex items-start justify-center gap-3 mr-auto">
              <span className="size-6 bg-[#F6F7F9] rounded-full  grid place-content-center">
                <img src="/icons/check.png" />
              </span>
              Seamless international money transfers.
            </span>

            <span className="flex items-start justify-center gap-3 mr-auto">
              <span className="size-6 bg-[#F6F7F9] rounded-full grid place-content-center">
                <img src="/icons/check.png" />
              </span>
              Competitive exchange rates offered daily.
            </span>
          </section>
          <button className="cursor-pointer hover:bg-[#171717]/90 transition-colors duration-300 bg-[#171717] px-6 md:px-8 py-[14px] text-md text-text-light rounded-full shadow mt-4">
            Get Started
          </button>
        </section>
      </div>
      <div className="w-full md:w-[500px] h-full flex items-center justify-center relative mx-auto">
        <img src="/images/world.png" />
      </div>
    </div>
  );
}
