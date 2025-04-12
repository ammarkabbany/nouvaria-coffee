import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/HeroSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      <section>
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
