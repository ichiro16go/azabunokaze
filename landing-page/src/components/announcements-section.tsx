
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { fetchAnnouncements } from "@/lib/microcms"


export default async function AnnouncementsSection() {
  // SSRでmicroCMSからデータ取得
  const data = await fetchAnnouncements();
  const announcements:announcements[] = data.contents ?? [];

  return (
    <section id="announcements" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">重要なお知らせ・新着情報</h2>
          <p className="text-muted-foreground text-lg">同窓会からの最新情報をお届けします</p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {announcements.map((announcement: announcements) => (
            <Card
              key={announcement.id}
              className={`hover:shadow-lg transition-shadow ${
                announcement.isImportant ? "border-accent/50 bg-accent/5" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant={announcement.isImportant ? "default" : "outline"}>{announcement.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {announcement.date}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-balance">{announcement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{announcement.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent/80">
                  詳細を見る
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            すべてのお知らせを見る
          </Button>
        </div>
      </div>
    </section>
  )
}
