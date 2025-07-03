import { Header } from "@/components/header"
import { CountdownBanner } from "@/components/countdown-banner"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { PreorderForm } from "@/components/preorder-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <CountdownBanner />
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <PreorderForm />
      </main>
      <Footer />
    </div>
  )
}
