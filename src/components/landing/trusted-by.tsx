const companies = [
  { name: "Google", logo: "/icons/google.png" },
  { name: "Siemens", logo: "/icons/siemens.png" },
  { name: "Microsoft", logo: "/icons/microsoft.png" },
  { name: "Slack", logo: "/icons/slack.png" },
  { name: "Tesla", logo: "/icons/tesla.png" },
  { name: "Walmart", logo: "/icons/walmart.png" },
  { name: "Adobe", logo: "/icons/adobe.png" },
  { name: "Framer", logo: "/icons/framer.png" },
  { name: "Openai", logo: "/icons/openai.png" },
];
export default function TrustedBy() {
  return (
    <div className="my-20 md:my-28 w-full">
      <div className="flex flex-col items-center justify-center gap-y-3 px-1 md:px-10">
        <h3 className="font-semibold font-manrope">
          Trusted by Over 5,500+ Industry Leaders
        </h3>
        <section className="flex justify-center items-ceneter flex-wrap gap-5 md:gap-x-16 md:max-w-[80vw]">
          {companies.map((company) => (
            <span className="w-1/6">
              <img src={company.logo} alt={company.name} />
            </span>
          ))}
        </section>
      </div>
    </div>
  );
}
