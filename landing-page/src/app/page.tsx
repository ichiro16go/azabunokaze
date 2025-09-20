import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import AnnouncementsSection from "@/components/announcements-section"
import { EventsSection } from "@/components/events-section"
import { ActivityReportsSection } from "@/components/activity-reports-section"
import { CompaniesSection } from "@/components/companies-section"
import { AlumniStudentsSection } from "@/components/alumni-students-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AnnouncementsSection />
        <EventsSection />
        <ActivityReportsSection />
        <CompaniesSection />
        <AlumniStudentsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
