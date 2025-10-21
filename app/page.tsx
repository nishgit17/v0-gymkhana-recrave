import Header from "@/components/header"
import Hero from "@/components/hero"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
