import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">麻布中学・高等学校 同窓会</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">母校の絆を未来へつなぐ、同窓生の交流の場です。</p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#announcements" className="hover:text-primary-foreground transition-colors">
                  お知らせ
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary-foreground transition-colors">
                  行事・イベント
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-primary-foreground transition-colors">
                  活動報告
                </a>
              </li>
              <li>
                <a href="#companies" className="hover:text-primary-foreground transition-colors">
                  掲載企業
                </a>
              </li>
              <li>
                <a href="#alumni-students" className="hover:text-primary-foreground transition-colors">
                  会員の皆様へ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  同窓会アプリ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  会員登録
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  奨学金制度
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  進路相談
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  企業掲載
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                03-1234-5678
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@alumni-school.jp
              </div>
              <p>
                平日 9:00-17:00
                <br />
                （土日祝日は休業）
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">© 2024 麻布中学・高等学校 同窓会. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
