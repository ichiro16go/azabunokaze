import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar,  ImageIcon, ArrowRight } from "lucide-react"
import { fetchActivityReports } from "@/lib/microcms"

export async function ActivityReportsSection() {
  const data =await fetchActivityReports();
  const reports:activityReports[] = data.contents ?? [];

  return (
    <section id="activities" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">活動報告・最新情報</h2>
          <p className="text-muted-foreground text-lg">同窓会の活動内容をご報告します</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{report.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {report.date}
                  </div>
                </div>
                <CardTitle className="text-lg text-balance">{report.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{report.excerpt}</p>

                <div className="flex items-center gap-4 mb-4">
                  {report.hasImages && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <ImageIcon className="w-4 h-4 mr-1" />
                      写真あり
                    </div>
                  )}
                </div>

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
            過去の活動報告を見る
          </Button>
        </div>
      </div>
    </section>
  )
}
