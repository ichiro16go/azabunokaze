import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import { fetchEvents } from "@/lib/microcms"

export async function EventsSection() {
  const data =await fetchEvents();
  const events:events[] = data.contents ?? [];
  console.log(events);


  return (
    <section id="events" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">行事・イベント予定</h2>
          <p className="text-muted-foreground text-lg">同窓生の皆様との交流の場をご提供します</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow bg-background">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={event.status === "申込受付中" ? "default" : "outline"}>{event.status}</Badge>
                </div>
                <CardTitle className="text-lg text-balance">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event["date-time"] ? new Date(event["date-time"]).toDateString() : ""}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  {event.participants ? event.participants + "名参加予定" : "未定"}
                </div>
                <p className="text-sm text-muted-foreground text-pretty">{event.description}</p>
                <Button
                  className="w-full mt-4"
                  variant={event.status[0] === "参加者募集中" ? "default" : "outline"}
                  disabled={event.status[0] !== "参加者募集中"}
                >
                  {event.status[0] === "参加者募集中" ? "参加申込み" : "詳細確認"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            年間スケジュールを見る
          </Button>
        </div>
      </div>
    </section>
  )
}
