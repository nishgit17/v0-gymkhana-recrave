export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              Welcome to Gymkhana
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">Elevate Your Performance</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Experience world-class training, cutting-edge facilities, and a community dedicated to pushing your
              limits. Join thousands of athletes transforming their fitness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Start Your Journey
              </button>
              <button className="border-2 border-accent text-accent px-8 py-3 rounded-full font-semibold hover:bg-accent/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="bg-accent/20 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💪</div>
                <p className="text-primary-foreground/60">Your fitness journey starts here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20">
            <div className="text-3xl mb-3">🏋️</div>
            <h3 className="text-xl font-bold mb-2">Expert Training</h3>
            <p className="text-primary-foreground/80">
              Certified trainers with years of experience guiding your fitness goals.
            </p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-bold mb-2">Personalized Plans</h3>
            <p className="text-primary-foreground/80">
              Customized workout and nutrition plans tailored to your objectives.
            </p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="text-xl font-bold mb-2">Community Support</h3>
            <p className="text-primary-foreground/80">Join a vibrant community of like-minded fitness enthusiasts.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
