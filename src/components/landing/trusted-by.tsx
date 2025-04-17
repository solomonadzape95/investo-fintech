const companies = [
  [
    {
      name: "google",
      logo: "/icons/google.png",
    },
    {
      name: "siemens",
      logo: "/icons/siemens.png",
    },
    {
      name: "microsoft",
      logo: "/icons/microsoft.png",
    },
    {
      name: "slack",
      logo: "/icons/slack.png",
    },
    {
      name: "tesla",
      logo: "/icons/tesla.png",
    },
  ],
  [
    {
      name: "walmart",
      logo: "/icons/walmart.png",
    },
    {
      name: "adobe",
      logo: "/icons/adobe.png",
    },
    {
      name: "framer",
      logo: "/icons/framer.png",
    },
    {
      name: "openai",
      logo: "/icons/openai.png",
    },
  ],
];

export default function TrustedBy() {
  return (
    <section className="pt-24 pb-12 w-full font-manrope">
      <div className="text-center text-2xl font-medium">
        <h3>Trusted by Over 5,500+ Industry Leaders</h3>

        <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-around w-full">
            {companies[0].map((company, key) => (
              <img
                key={key}
                src={company.logo}
                alt={company.name}
                className="h-12 md:h-32"
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-12 -translate-y-1/2">
            {companies[1].map((company, key) => (
              <img
                key={key}
                src={company.logo}
                alt={company.name}
                className="h-12 md:h-32"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
