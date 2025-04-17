import CTA from "../components/landing/cta";
import FAQ from "../components/landing/faq";
import HeroSection from "../components/landing/hero";
import SendMoney from "../components/landing/send-money";
import Stats from "../components/landing/stats";
import Transactions from "../components/landing/transactions";
import TrustedBy from "../components/landing/trusted-by";
import World from "../components/landing/world";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustedBy />
      <SendMoney />
      <Transactions />
      <FAQ />
      <World />
      <Stats />
      <CTA />
    </main>
  );
}
