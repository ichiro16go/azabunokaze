import { Button } from "@/components/ui/button"
import { Smartphone,  Calendar } from "lucide-react"

export function HeroSection() {

  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage: 'url(/azabunnkasai.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background opacity-80 pointer-events-none" />
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">母校の絆を未来へ</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            麻布中学・高等学校同窓会は、卒業生の皆様と母校をつなぐ架け橋として、 様々な活動を通じて絆を深めています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-secondary hover:bg-accent/90">
              <Smartphone className="w-5 h-5 mr-2" />
              同窓会アプリをダウンロード
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-accent/5">
              <Calendar className="w-5 h-5 mr-2" />
              イベント一覧を見る
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
