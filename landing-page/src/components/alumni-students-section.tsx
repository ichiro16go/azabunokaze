import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Users, BookOpen, Heart, Award, Briefcase } from "lucide-react"

export function AlumniStudentsSection() {
  return (
    <section id="alumni-students" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">会員の皆様へ</h2>
          <p className="text-muted-foreground text-lg">卒業生と在校生の皆様に向けた情報をお届けします</p>
        </div>

        <Tabs defaultValue="alumni" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
            <TabsTrigger value="alumni" className="text-lg">
              <GraduationCap className="w-5 h-5 mr-2" />
              卒業生の皆様へ
            </TabsTrigger>
            <TabsTrigger value="students" className="text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              在校生の皆様へ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="alumni" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Users className="w-6 h-6 text-accent mr-2" />
                  </div>
                  <CardTitle className="text-lg">同窓会への参加</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    定期的に開催される同窓会イベントにぜひご参加ください。懐かしい仲間との再会をお待ちしています。
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    イベント一覧を見る
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-accent mr-2" />
                  </div>
                  <CardTitle className="text-lg">母校支援</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    母校の発展のため、様々な形での支援活動を行っています。皆様のご協力をお願いいたします。
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    支援について詳しく
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-6 h-6 text-accent mr-2" />
                  </div>
                  <CardTitle className="text-lg">キャリア支援</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    同窓生同士のネットワークを活用したキャリア支援や転職相談を行っています。
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    キャリア支援について
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">同窓会会員登録のお願い</h3>
                <p className="text-muted-foreground text-center mb-6 text-pretty">
                  最新情報をお届けするため、会員登録をお願いいたします。
                  登録いただくと、イベント情報や同窓生の近況などをお知らせします。
                </p>
                <div className="text-center">
                  <Button size="lg">会員登録はこちら</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Award className="w-6 h-6 text-accent mr-2" />
                  </div>
                  <CardTitle className="text-lg">奨学金制度</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    同窓会では優秀な在校生を支援するための奨学金制度を設けています。
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    奨学金について
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-6 h-6 text-accent mr-2" />
                  </div>
                  <CardTitle className="text-lg">進路相談</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    卒業生による進路相談会を定期的に開催しています。将来の参考にしてください。
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    相談会について
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-6 h-6 text-accent mr-2" />
                  </div>
                  <CardTitle className="text-lg">学習支援</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    図書館の充実や学習環境の整備など、皆様の学習を支援しています。
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    支援内容を見る
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">在校生の皆様へメッセージ</h3>
                <p className="text-muted-foreground text-center mb-6 text-pretty">
                  母校で学ぶ皆様を、同窓会一同心から応援しています。
                  困ったことがあれば、いつでも先輩たちに相談してください。 皆様の成長と活躍を楽しみにしています。
                </p>
                <div className="text-center">
                  <Button size="lg">先輩に相談する</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
