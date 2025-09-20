import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-primary">麻布学園 同窓会</div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#announcements" className="text-foreground hover:text-accent transition-colors">
              お知らせ
            </a>
            <a href="#events" className="text-foreground hover:text-accent transition-colors">
              行事・イベント
            </a>
            <a href="#activities" className="text-foreground hover:text-accent transition-colors">
              活動報告
            </a>
            <a href="#companies" className="text-foreground hover:text-accent transition-colors">
              掲載企業
            </a>
            <a href="#alumni-students" className="text-foreground hover:text-accent transition-colors">
              会員の皆様へ
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              お問い合わせ
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              電話
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
              <Mail className="w-4 h-4 mr-2" />
              メール
            </Button>
            <Button variant="outline" size="sm" className="md:hidden bg-transparent">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
