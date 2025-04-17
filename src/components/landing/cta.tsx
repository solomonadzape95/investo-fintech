export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-8 font-manrope bg-primary-100 h-96">
      <div className="max-w-7xl mx-auto -translate-y-2/3">
        <div className="md:h-[543px] flex items-center justify-center p-8 md:p-12 rounded-3xl border border-[#282D45] relative overflow-hidden bg-[#171717]">
          <div className="absolute w-full h-full z-0 pointer-events-none bg-[url('/icons/rows.png')] bg-cover bg-no-repeat opacity-50" />
          {/* <div className="absolute top-10 left-10 w-[180px] h-[180px] bg-[#32CAFD70] rounded-full blur-[250px]" />
          <div className="absolute top-10 right-10 w-[180px] h-[180px] bg-[#7214FF70] rounded-full blur-[250px]" />
          <div className="absolute bottom-10 right-1/2 translate-x-1/2 w-[180px] h-[180px] bg-[#5865F270] rounded-full blur-[250px]" /> */}

          <div className="text-center relative max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F6F6F7] mb-4">
              Download Our App Free and Enjoy Exclusive Features!
            </h2>
            <p className="text-[#8F9BB7] mb-8">
              Enjoy seamless navigation, exclusive content, and personalized
              experiences right at your fingertips. Don't miss out on this
              opportunity to enhance your daily routine with our user-friendly,
              free mobile app.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center">
              <div className="flex items-center bg-white text-black rounded-full px-4 py-2 font-manrope">
                <img src="/images/play.png" alt="google play" />
                <div>
                  <p className="text-xs uppercase">Get it on</p>
                  <p className="text-lg font-bold">Google Play</p>
                </div>
              </div>

              <div className="flex items-center bg-white text-black rounded-full px-4 py-2 gap-4">
                <img src="/images/apple.png" alt="google play" />
                <div>
                  <p className="text-xs uppercase">Download on the</p>
                  <p className="text-lg font-bold">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
