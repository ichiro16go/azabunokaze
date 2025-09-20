import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground text-lg">ご質問やご相談がございましたら、お気軽にお問い合わせください</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="text-xl">お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前 *</Label>
                  <Input id="name" placeholder="山田 太郎" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduation-year">卒業年度</Label>
                  <Input id="graduation-year" placeholder="例：2010年" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス *</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">電話番号</Label>
                <Input id="phone" type="tel" placeholder="090-1234-5678" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">件名 *</Label>
                <Input id="subject" placeholder="お問い合わせの件名" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">メッセージ *</Label>
                <Textarea id="message" placeholder="お問い合わせ内容をご記入ください" className="min-h-[120px]" />
              </div>

              <Button className="w-full" size="lg">
                送信する
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-xl">連絡先情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-accent mr-3" />
                  <div>
                    <p className="font-medium">電話番号</p>
                    <p className="text-muted-foreground">03-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-accent mr-3" />
                  <div>
                    <p className="font-medium">メールアドレス</p>
                    <p className="text-muted-foreground">info@alumni-school.jp</p>
                  </div>
                </div>

                <div className="flex items-center">
                  {/* Instagram icon */}
                  <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-muted-foreground">
                      <a href="https://instagram.com/azabu_alumni" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">@azabu_alumni</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  {/* Facebook icon */}
                  <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.771-1.631 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12" />
                  </svg>
                  <div>
                    <p className="font-medium">Facebook</p>
                    <p className="text-muted-foreground">
                      <a href="https://facebook.com/azabu.alumni" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">azabu.alumni</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">よくあるお問い合わせ</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 同窓会イベントの参加方法について</li>
                  <li>• 会員登録・住所変更について</li>
                  <li>• 母校支援活動について</li>
                  <li>• 企業・団体の掲載について</li>
                  <li>• 奨学金制度について</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  FAQを見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
