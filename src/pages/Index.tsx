import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dreamy overflow-hidden relative">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-love-pink animate-float opacity-20" size={24} />
        <Heart className="absolute top-32 right-20 text-love-rose animate-pulse-heart opacity-30" size={18} />
        <Sparkles className="absolute top-40 left-1/4 text-love-deep animate-sparkle opacity-25" size={20} />
        <Star className="absolute bottom-40 right-1/4 text-love-pink animate-float opacity-20" size={16} />
        <Heart className="absolute bottom-20 left-1/3 text-love-rose animate-pulse-heart opacity-25" size={22} />
        <Sparkles className="absolute top-60 right-1/3 text-love-deep animate-sparkle opacity-30" size={18} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="text-love-deep animate-pulse-heart" size={32} />
            <h1 className="text-6xl font-bold bg-gradient-love bg-clip-text text-transparent">
              For My Beloved
            </h1>
            <Heart className="text-love-deep animate-pulse-heart" size={32} />
          </div>
          <h2 className="text-4xl font-semibold text-love-deep mb-4">Purni</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every moment with you feels like a beautiful dream. You are my sunshine, my inspiration, and my heart's greatest treasure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-love-blush/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Heart className="mx-auto mb-4 text-love-rose animate-pulse-heart" size={40} />
              <h3 className="text-2xl font-semibold text-love-deep mb-3">Endless Love</h3>
              <p className="text-muted-foreground">
                My love for you grows stronger with each passing day, like flowers blooming in an eternal spring.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-love-blush/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Sparkles className="mx-auto mb-4 text-love-pink animate-sparkle" size={40} />
              <h3 className="text-2xl font-semibold text-love-deep mb-3">Magic Moments</h3>
              <p className="text-muted-foreground">
                Every second spent with you is magical, filled with laughter, joy, and infinite possibilities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-love-blush/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Star className="mx-auto mb-4 text-love-deep animate-float" size={40} />
              <h3 className="text-2xl font-semibold text-love-deep mb-3">My Star</h3>
              <p className="text-muted-foreground">
                You light up my world like the brightest star in the night sky, guiding me home to your heart.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-love p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">A Promise to You</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              "I promise to love you through every sunrise and sunset, to hold your hand through every storm, 
              and to cherish every moment we share. You are my today, my tomorrow, and my always."
            </p>
            <div className="flex justify-center gap-2">
              <Heart className="text-white animate-pulse-heart" size={24} />
              <Heart className="text-white animate-pulse-heart" size={28} style={{ animationDelay: '0.2s' }} />
              <Heart className="text-white animate-pulse-heart" size={24} style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-sunset text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Heart className="mr-2" size={20} />
            All My Love, Forever
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
