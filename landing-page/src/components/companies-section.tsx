import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin,  ExternalLink } from "lucide-react"
import { fetchCompanies } from "@/lib/microcms"

export async function CompaniesSection() {
  const data =await fetchCompanies();
  const companies:companies[] = data.contents ?? [];
  // console.log(companies);

  return (
    <section id="companies" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">掲載企業・団体一覧</h2>
          <p className="text-muted-foreground text-lg">同窓生が活躍する企業・団体をご紹介します</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow bg-background group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={company.isPartner ? "default" : "outline"}>
                    {company.isPartner ? "パートナー企業" : "同窓生在籍"}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-lg text-balance">{company.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4 mr-2" />
                  {company.industry}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {company.location}
                </div>
                <p className="text-sm text-muted-foreground text-pretty">{company.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 space-y-4">
          <p className="text-muted-foreground">企業・団体の掲載をご希望の方は、お気軽にお問い合わせください</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              すべての企業・団体を見る
            </Button>
            <Button size="lg">掲載のお申し込み</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
