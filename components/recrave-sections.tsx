export default function RecraveSections() {
  const sections = [
    {
      id: "recrave-hero",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qeuWursduu3JzvXzEXbv6i8fXjBkcx.png",
      alt: "ReCrave - The Annual Food Fest",
    },
    {
      id: "what-is-recrave",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XoTzeJE4W8ES9Yq0w3Ln6rteizOOFr.png",
      alt: "What is ReCrave?",
    },
    {
      id: "glimpse-recrave",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2G7SpsSd1jhDLX90mFeHeuBdeBPwAK.png",
      alt: "Glimpse of ReCrave '25",
    },
    {
      id: "contribute-students",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WESDpHKKZwGOTRpVg22XgzMkL6hXZU.png",
      alt: "How can you contribute? - For Students",
    },
    {
      id: "contribute-vendors",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FvWMYwnqe7SkYPyYQkM91cZjKZ5UiT.png",
      alt: "How can you contribute? - For Vendors",
    },
    {
      id: "about-us",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6J55tGTMxKeWRAUMgkZGaTgVavqURz.png",
      alt: "About Us",
    },
    {
      id: "sponsors",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvYSKYFFiuymraDPA7i5vV06apIwjf.png",
      alt: "Our Previous Sponsors",
    },
    {
      id: "thank-you",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kusBI3J8sJLLCtJZTDGube2kdUbAaz.png",
      alt: "Thank You",
    },
  ]

  return (
    <div className="w-full bg-black">
      {sections.map((section) => (
        <div key={section.id} className="w-full">
          <div className="w-full overflow-hidden">
            <img
              src={section.src || "/placeholder.svg"}
              alt={section.alt}
              className="w-full h-auto object-cover display-block"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
