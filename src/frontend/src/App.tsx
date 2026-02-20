import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gem, Sparkles, Heart } from 'lucide-react';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'arunodaya-app'
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/arunodaya-logo-jewellery.dim_512x512.png" 
              alt="Arunodaya Jewellery Logo" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Arunodaya
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button variant="outline" size="sm" className="rounded-full">
              Browse Collection
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          id="home" 
          className="relative overflow-hidden"
          style={{
            backgroundImage: 'url(/assets/generated/arunodaya-hero-bg-jewellery.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Gem className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Exquisite Craftsmanship</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Arunodaya
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Handcrafted fine jewellery that celebrates life's precious moments
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore Collection
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Something Extraordinary is Coming
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're preparing an exceptional jewellery experience that will redefine elegance and craftsmanship
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Gem className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">New Collections</h4>
                    <p className="text-muted-foreground">
                      Discover our upcoming exclusive designs featuring rare gemstones and timeless elegance
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">Custom Orders</h4>
                    <p className="text-muted-foreground">
                      Bespoke jewellery crafted to your vision with personalized consultations
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">Certified Craftsmanship</h4>
                    <p className="text-muted-foreground">
                      Every piece meticulously crafted with certified authenticity and quality assurance
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 text-center">
                <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Coming Soon
                  </div>
                  <p className="text-muted-foreground max-w-md">
                    Stay tuned for the launch of our exquisite jewellery collection. A new era of elegance awaits.
                  </p>
                  <Button size="lg" className="rounded-full px-8 mt-2">
                    Get Updates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Arunodaya. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>using</span>
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
