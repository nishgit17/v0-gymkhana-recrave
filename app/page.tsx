import Navbar from "@/components/navbar"
import RecraveSections from "@/components/recrave-sections"

export default function Home() {
  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-avI8QYhtLW0LaDBMIE8Rz2STEas1Ue.png)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <main className="flex-1 overflow-y-scroll" style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}>
        <RecraveSections />
      </main>
    </div>
  )
}
