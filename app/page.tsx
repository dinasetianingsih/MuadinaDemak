"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Menu,
  X,
  Droplets,
  AlertCircle,
  UserX,
  Crown,
  Heart,
  GraduationCap,
  BookOpen,
  Star,
  Expand,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Youtube,
  Check,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Color palette
const colors = {
  champagne: "#F5E6D3",
  cream: "#FDF8F4",
  roseGold: "#C9956C",
  roseGoldLight: "#E8C5A0",
  charcoal: "#2C2C2C",
  softGray: "#7A7A7A",
  white: "#FFFFFF",
  gold: "#B8962E",
  blush: "#F0D5C8",
  darkBrown: "#4A3728",
}

// WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// TikTok SVG Icon
function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )
}

// Navbar Component
function Navbar({
  isMenuOpen,
  setIsMenuOpen,
  setIsContactOpen,
  scrollY,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  setIsContactOpen: (open: boolean) => void
  scrollY: number
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300"
      style={{
        backgroundColor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${colors.roseGoldLight}`,
        boxShadow: scrollY > 50 ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <nav className="h-full max-w-[1400px] mx-auto px-5 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span style={{ color: colors.roseGold }} className="text-base">✦</span>
          <span
            className="text-[22px] italic"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: colors.roseGold,
            }}
          >
            Muadina
          </span>
          <span
            className="text-[13px] uppercase tracking-[0.1em]"
            style={{ color: colors.charcoal }}
          >
            Demak
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: "Beranda", id: "hero" },
            { label: "Portofolio", id: "portfolio" },
            { label: "Layanan", id: "services" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[13px] uppercase tracking-[0.1em] transition-colors duration-200"
              style={{ color: colors.charcoal }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.roseGold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.charcoal)}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setIsContactOpen(true)}
            className="text-[13px] uppercase tracking-[0.1em] transition-colors duration-200"
            style={{ color: colors.charcoal }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.roseGold)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.charcoal)}
          >
            Kontak
          </button>
        </div>

        {/* Desktop CTA Button */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="hidden lg:flex items-center px-5 py-2 rounded-full text-[13px] uppercase tracking-[0.08em] font-medium border-[1.5px] transition-all duration-200 hover:scale-[1.02]"
          style={{
            borderColor: colors.roseGold,
            color: colors.roseGold,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.roseGold
            e.currentTarget.style.color = colors.white
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
            e.currentTarget.style.color = colors.roseGold
          }}
        >
          Hubungi Kami
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: colors.charcoal }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute top-[72px] left-0 right-0 shadow-lg"
          style={{ backgroundColor: colors.white }}
        >
          {[
            { label: "Beranda", id: "hero" },
            { label: "Portofolio", id: "portfolio" },
            { label: "Layanan", id: "services" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full h-12 text-left px-5 text-[14px] uppercase tracking-[0.08em]"
              style={{
                color: colors.charcoal,
                borderBottom: `1px solid ${colors.roseGoldLight}`,
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setIsContactOpen(true)
              setIsMenuOpen(false)
            }}
            className="w-full h-12 text-left px-5 text-[14px] uppercase tracking-[0.08em]"
            style={{ color: colors.charcoal }}
          >
            Kontak
          </button>
        </div>
      )}
    </header>
  )
}

// Hero Section
function HeroSection({ setIsContactOpen }: { setIsContactOpen: (open: boolean) => void }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen pt-[72px] flex flex-col lg:flex-row"
    >
      {/* Left Panel */}
      <div
        className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-20 py-16 lg:py-0 relative overflow-hidden"
        style={{ backgroundColor: colors.cream }}
      >
        {/* Decorative large GLOW text */}
        <span
          className="absolute top-1/2 left-0 -translate-y-1/2 text-[120px] lg:text-[200px] font-semibold select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: colors.roseGold,
            opacity: 0.05,
          }}
        >
          GLOW
        </span>

        {/* Top decorative text */}
        <div
          className={`flex items-center gap-3 mb-6 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <span
            className="text-[12px] italic"
            style={{ color: colors.roseGold }}
          >
            ✦ Premium Makeup Artist
          </span>
          <div
            className="h-[1px] w-16"
            style={{ backgroundColor: colors.roseGoldLight }}
          />
        </div>

        {/* Badge */}
        <div
          className={`inline-flex self-start px-4 py-1.5 rounded-full mb-6 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{
            backgroundColor: `${colors.roseGold}15`,
            border: `1px solid ${colors.roseGold}30`,
            animationDelay: "150ms",
            animationFillMode: "forwards",
          }}
        >
          <span
            className="text-[12px] uppercase tracking-[0.05em]"
            style={{ color: colors.roseGold }}
          >
            ✦ Dipercaya 500+ Pengantin Sejak 2019
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl lg:text-6xl xl:text-[72px] font-semibold italic leading-[1.15] mb-6 relative opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: colors.charcoal,
            animationDelay: "300ms",
            animationFillMode: "forwards",
          }}
        >
          Tampil Anggun
          <br />
          dan{" "}
          <span className="relative inline-block">
            Memesona
            {/* Wavy underline SVG */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8C30 2 60 12 90 6C120 0 150 10 198 4"
                stroke={colors.roseGold}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          di Hari Istimewamu
        </h1>

        {/* Divider */}
        <div
          className={`h-[1px] w-16 my-6 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{
            backgroundColor: colors.roseGoldLight,
            animationDelay: "450ms",
            animationFillMode: "forwards",
          }}
        />

        {/* Subheadline */}
        <p
          className={`text-base lg:text-[17px] leading-[1.8] max-w-lg mb-8 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{
            color: colors.softGray,
            animationDelay: "600ms",
            animationFillMode: "forwards",
          }}
        >
          Kami hadir untuk memastikan kamu tampil sempurna — dengan riasan
          profesional berbasis teknik HD yang ringan di wajah, tahan hingga 14
          jam, dan tetap memancarkan kecantikan alami yang sesungguhnya milikmu.
        </p>

        {/* Stats Row */}
        <div
          className={`flex items-center gap-6 lg:gap-8 mb-8 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{
            animationDelay: "750ms",
            animationFillMode: "forwards",
          }}
        >
          {[
            { number: "500+", label: "Klien Puas" },
            { number: "14 Jam", label: "Ketahanan Makeup" },
            { number: "5★", label: "Rating Rata-rata" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col"
              style={{
                paddingRight: index < 2 ? "24px" : 0,
                borderRight:
                  index < 2 ? `1px solid ${colors.roseGoldLight}` : "none",
              }}
            >
              <span
                className="text-2xl lg:text-[32px] font-bold"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: colors.roseGold,
                }}
              >
                {stat.number}
              </span>
              <span
                className="text-[11px] uppercase tracking-[0.05em]"
                style={{ color: colors.softGray }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{
            animationDelay: "900ms",
            animationFillMode: "forwards",
          }}
        >
          <a
            href="https://wa.me/6282137199389?text=Halo%20Muadina%20Demak,%20saya%20tertarik%20dengan%20layanan%20makeup%20artist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
            style={{
              backgroundColor: colors.roseGold,
              color: colors.white,
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Hubungi via WhatsApp
          </a>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="inline-flex items-center gap-1 px-4 py-4 text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200"
            style={{
              color: colors.roseGold,
              borderBottom: `1px solid ${colors.roseGold}`,
            }}
          >
            Lihat Portofolio →
          </button>
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-0">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bride.jpg"
            alt="Riasan pengantin premium oleh Muadina Demak - tampilan anggun dan memesona"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(253,248,244,0.3), transparent)",
            }}
          />
        </div>

        {/* Floating Testimonial Card */}
        <div
          className="absolute bottom-8 left-4 lg:bottom-16 lg:left-8 w-[220px] p-4 rounded-2xl shadow-2xl animate-float z-10"
          style={{ backgroundColor: colors.white }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden relative">
              <Image
                src="/images/happy-bride.jpg"
                alt="Pengantin bahagia dengan riasan Muadina Demak"
                fill
                className="object-cover"
              />
            </div>
            <span
              className="text-[13px] font-medium"
              style={{ color: colors.charcoal }}
            >
              Riasan Pengantin Adat Jawa
            </span>
          </div>
          <div className="flex gap-0.5 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={14}
                fill={colors.gold}
                color={colors.gold}
              />
            ))}
          </div>
          <p
            className="text-[13px] italic mb-2"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: colors.charcoal,
            }}
          >
            {'"Riasan terbaik yang pernah saya rasakan!"'}
          </p>
          <p className="text-[11px]" style={{ color: colors.softGray }}>
            — Sari W., Pengantin 2024
          </p>
        </div>
      </div>
    </section>
  )
}

// Problem & Value Section
function ProblemValueSection() {
  return (
    <section
      id="value"
      className="py-20 lg:py-24"
      style={{ backgroundColor: colors.champagne }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Problem */}
          <div>
            <span
              className="text-[12px] uppercase tracking-[0.1em] mb-4 block"
              style={{ color: colors.roseGold }}
            >
              ✦ Kekhawatiran Umum Para Pengantin
            </span>
            <h2
              className="text-3xl lg:text-[42px] font-medium leading-[1.2] mb-6"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: colors.charcoal,
              }}
            >
              Takut Tampil Tidak Sempurna di Hari Terpentingmu?
            </h2>
            <p
              className="text-base leading-[1.75] mb-8"
              style={{ color: colors.softGray }}
            >
              Banyak pengantin datang kepada kami dengan kekhawatiran yang
              sama...
            </p>

            {/* Problem Cards */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: Droplets,
                  title: "Makeup Mudah Luntur & Berminyak",
                  desc: 'Kulit wajah tampak kusam dan riasan terlihat "meleleh" saat sesi foto atau bahkan sebelum acara selesai.',
                },
                {
                  icon: AlertCircle,
                  title: "Hasil Terlihat 'Cakey' dan Tidak Natural",
                  desc: "Foundation yang terlalu tebal membuat wajah tampak seperti topeng dan terlihat aneh di foto kamera HD.",
                },
                {
                  icon: UserX,
                  title: "Wajah Terlihat Terlalu Berbeda dari Aslinya",
                  desc: "Riasan yang tidak sesuai justru menyembunyikan kecantikan asli dan membuat klien merasa tidak percaya diri.",
                },
              ].map((problem) => (
                <div
                  key={problem.title}
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: colors.white,
                    borderLeft: `3px solid ${colors.roseGold}`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <problem.icon
                      size={24}
                      style={{ color: colors.roseGold }}
                      className="flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <h3
                        className="text-[16px] font-medium mb-1"
                        style={{ color: colors.charcoal }}
                      >
                        {problem.title}
                      </h3>
                      <p
                        className="text-[14px] leading-[1.6]"
                        style={{ color: colors.softGray }}
                      >
                        {problem.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Solution */}
          <div
            className="p-8 lg:p-10 rounded-3xl shadow-xl"
            style={{ backgroundColor: colors.white }}
          >
            <span
              className="text-[12px] uppercase tracking-[0.1em] mb-4 block"
              style={{ color: colors.roseGold }}
            >
              ✦ Solusi Muadina Demak
            </span>
            <h2
              className="text-2xl lg:text-[32px] font-medium leading-[1.2] mb-4"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                color: colors.roseGold,
              }}
            >
              Riasan Flawless yang Tetap Menonjolkan Dirimu
            </h2>
            <p
              className="text-[15px] leading-[1.75] mb-6"
              style={{ color: colors.softGray }}
            >
              Kami menggunakan pendekatan makeup yang berbeda — bukan menutupi,
              tapi menonjolkan. Setiap sentuhan riasan dirancang khusus untuk
              membuat kecantikan alami Anda bersinar lebih terang.
            </p>

            {/* Solution Checklist */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                "Teknik HD Makeup — ringan, natural, fotogenik sempurna",
                "Produk premium tahan 14+ jam tanpa touch-up berlebihan",
                "Konsultasi warna kulit & karakter wajah sebelum hari-H",
                "Rias yang menonjolkan, bukan menutupi, kecantikan aslimu",
                "Berpengalaman 5+ tahun dengan 500+ klien puas",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${colors.roseGold}20` }}
                  >
                    <Check size={12} style={{ color: colors.roseGold }} />
                  </div>
                  <span
                    className="text-[14px]"
                    style={{ color: colors.charcoal }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Image strip */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 relative"
                    style={{ borderColor: colors.white }}
                  >
                    <Image
                      src={`/images/portfolio-${i}.jpg`}
                      alt={`Hasil riasan klien Muadina Demak ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span
                className="text-[13px] italic ml-2"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: colors.softGray,
                }}
              >
                Hasil nyata klien Muadina Demak ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Crown,
      number: "01",
      title: "Rias Pengantin Premium",
      desc: "Tampil sempurna di hari pernikahan dengan riasan bridal mewah yang tahan lama dan membuatmu bersinar sepanjang acara.",
      tags: ["Adat Jawa", "Modern", "Internasional"],
      image: "/images/service-bridal.jpg",
    },
    {
      icon: Heart,
      number: "02",
      title: "Rias Tunangan & Pre-Wedding",
      desc: "Abadikan momen lamaran dan sesi foto pre-wedding dengan tampilan romantis yang sempurna di setiap sudut kamera.",
      tags: ["Outdoor", "Indoor", "Konseptual"],
      image: "/images/service-prewedding.jpg",
    },
    {
      icon: GraduationCap,
      number: "03",
      title: "Rias Wisuda & Pesta",
      desc: "Rayakan pencapaian istimewamu dengan riasan glam yang cerah, segar, dan tahan sepanjang hari perayaan.",
      tags: ["Wisuda", "Gala Dinner", "Sweet 17"],
      image: "/images/service-graduation.jpg",
    },
    {
      icon: BookOpen,
      number: "04",
      title: "Kursus Privat Makeup",
      desc: "Pelajari teknik makeup profesional langsung dari ahlinya dalam sesi privat yang disesuaikan dengan kebutuhan dan level kamu.",
      tags: ["Pemula", "Intermediate", "Pro"],
      image: "/images/service-course.jpg",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 lg:py-24"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-[12px] uppercase tracking-[0.1em] mb-4 block"
            style={{ color: colors.roseGold }}
          >
            ✦ Layanan Kami
          </span>
          <h2
            className="text-3xl lg:text-[48px] font-medium leading-[1.2] mb-4"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: colors.charcoal,
            }}
          >
            Setiap Momen Spesial Layak Tampilan Terbaik
          </h2>
          <p
            className="text-base max-w-xl mx-auto mb-6"
            style={{ color: colors.softGray }}
          >
            Dari hari pernikahan hingga wisuda, kami hadir untuk setiap tonggak
            berharga dalam hidupmu.
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3">
            <div
              className="h-[1px] w-16"
              style={{ backgroundColor: colors.roseGoldLight }}
            />
            <span style={{ color: colors.roseGold }}>◆</span>
            <div
              className="h-[1px] w-16"
              style={{ backgroundColor: colors.roseGoldLight }}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="p-8 rounded-3xl shadow-md relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              style={{
                backgroundColor: colors.white,
                borderColor: "transparent",
              }}
            >
              {/* Service Number */}
              <span
                className="absolute top-4 right-4 text-[72px] font-medium select-none"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: colors.roseGold,
                  opacity: 0.08,
                }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: colors.champagne }}
              >
                <service.icon size={36} style={{ color: colors.roseGold }} />
              </div>

              {/* Accent line */}
              <div
                className="h-[3px] w-10 mb-4"
                style={{ backgroundColor: colors.roseGold }}
              />

              {/* Title */}
              <h3
                className="text-[24px] lg:text-[26px] font-medium mb-3"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: colors.charcoal,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-[15px] leading-[1.7] mb-4"
                style={{ color: colors.softGray }}
              >
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[12px]"
                    style={{
                      backgroundColor: `${colors.roseGold}10`,
                      color: colors.roseGold,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <button
                className="text-[14px] font-medium transition-all duration-200 hover:underline"
                style={{ color: colors.roseGold }}
              >
                Pelajari Lebih →
              </button>

              {/* Image */}
              <div className="mt-6 rounded-xl overflow-hidden h-[180px] relative">
                <Image
                  src={service.image}
                  alt={`${service.title} - layanan Muadina Demak`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Portfolio Section
function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Semua")
  const filters = ["Semua", "Pengantin", "Pre-Wedding", "Wisuda", "Pesta"]

  const portfolioItems = [
    {
      image: "/images/portfolio-1.jpg",
      type: "Pengantin",
      client: "Maharani K.",
      height: "h-[300px]",
    },
    {
      image: "/images/portfolio-2.jpg",
      type: "Pengantin",
      client: "Dewi S.",
      height: "h-[420px]",
    },
    {
      image: "/images/portfolio-3.jpg",
      type: "Pengantin",
      client: "Ayu P.",
      height: "h-[360px]",
    },
    {
      image: "/images/portfolio-4.jpg",
      type: "Wisuda",
      client: "Rina A.",
      height: "h-[280px]",
    },
    {
      image: "/images/portfolio-5.jpg",
      type: "Pre-Wedding",
      client: "Maya & Adi",
      height: "h-[450px]",
    },
    {
      image: "/images/portfolio-6.jpg",
      type: "Pesta",
      client: "Sinta M.",
      height: "h-[320px]",
    },
  ]

  const filteredItems =
    activeFilter === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeFilter)

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-24"
      style={{ backgroundColor: colors.charcoal }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-[12px] uppercase tracking-[0.1em] mb-4 block"
            style={{ color: colors.roseGold }}
          >
            ✦ Galeri Karya
          </span>
          <h2
            className="text-3xl lg:text-[48px] font-medium leading-[1.2] mb-4"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: colors.white,
            }}
          >
            Setiap Riasan, Sebuah Cerita
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: colors.softGray }}>
            Koleksi karya pilihan yang merepresentasikan dedikasi kami terhadap
            keindahan dan kesempurnaan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-5 py-2 rounded-full text-[13px] uppercase tracking-[0.05em] transition-all duration-200"
              style={{
                backgroundColor:
                  activeFilter === filter ? colors.roseGold : "transparent",
                color:
                  activeFilter === filter ? colors.white : colors.softGray,
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`${item.height} mb-4 rounded-2xl overflow-hidden relative cursor-pointer group break-inside-avoid`}
            >
              <Image
                src={item.image}
                alt={`Hasil riasan ${item.type} untuk ${item.client} oleh Muadina Demak`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ backgroundColor: `${colors.roseGold}90` }}
              >
                <Expand size={32} style={{ color: colors.white }} />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <p className="text-white text-[14px] font-medium">
                    {item.type}
                  </p>
                  <p className="text-white/70 text-[12px]">{item.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Saya sungguh tidak menyangka hasilnya bisa sebagus ini! Dari pagi sampai resepsi malam, makeup saya tetap segar dan tidak luntur sama sekali. Semua tamu bertanya siapa MUA-nya. Terima kasih Muadina Demak, kamu membuat hari pernikahanku sempurna!",
      name: "Maharani Kusuma",
      service: "Rias Pengantin Premium — Maret 2024",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "Awalnya saya takut riasan saya bakal terlihat 'menor' dan tidak natural. Tapi Muadina Demak benar-benar mendengarkan keinginan saya. Hasilnya? Natural, glowing, dan justru lebih cantik dari yang saya bayangkan. Foto pre-wedding kami jadi luar biasa!",
      name: "Cantika Paramitha",
      service: "Rias Pre-Wedding — Januari 2024",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "Kursus privat makeup-nya worth it banget! Dalam 2 sesi saja saya sudah bisa makeup sendiri untuk acara formal. Kak Arta sabar banget ngajarin dari basic sampai contouring. Ilmunya langsung bisa saya praktekin sehari-hari!",
      name: "Rizky Amelia",
      service: "Kursus Privat Makeup — Februari 2024",
      image: "/images/testimonial-3.jpg",
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-24"
      style={{ backgroundColor: colors.champagne }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-[12px] uppercase tracking-[0.1em] mb-4 block"
            style={{ color: colors.roseGold }}
          >
            ✦ Kata Mereka
          </span>
          <h2
            className="text-3xl lg:text-[48px] font-medium leading-[1.2] mb-4"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: colors.charcoal,
            }}
          >
            Kepercayaan Klien adalah Mahkota Kami
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill={colors.gold} color={colors.gold} />
            ))}
          </div>
          <p className="text-[14px]" style={{ color: colors.softGray }}>
            4.9/5 dari 200+ ulasan
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl shadow-lg relative"
              style={{ backgroundColor: colors.white }}
            >
              {/* Quote mark */}
              <span
                className="absolute top-4 left-4 text-[80px] leading-none"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: `${colors.roseGold}20`,
                }}
              >
                {'"'}
              </span>

              {/* Quote text */}
              <p
                className="text-[18px] italic leading-[1.7] mb-6 relative z-10"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: colors.charcoal,
                }}
              >
                {testimonial.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={colors.gold}
                    color={colors.gold}
                  />
                ))}
              </div>

              {/* Divider */}
              <div
                className="h-[1px] w-full mb-4"
                style={{ backgroundColor: colors.roseGoldLight }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-[52px] h-[52px] rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={`Foto ${testimonial.name} - klien Muadina Demak`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-[15px] font-semibold"
                    style={{ color: colors.charcoal }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-[12px]" style={{ color: colors.softGray }}>
                    {testimonial.service}
                  </p>
                </div>
              </div>

              {/* Verified badge */}
              <div
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full mt-3"
                style={{ backgroundColor: "#10B98115" }}
              >
                <Check size={12} color="#10B981" />
                <span className="text-[11px]" style={{ color: "#10B981" }}>
                  Klien Terverifikasi
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Latar belakang elegan dengan mawar dan bokeh"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(44, 28, 20, 0.75)" }}
        />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        {/* Decorative */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div
            className="h-[1px] w-12"
            style={{ backgroundColor: colors.roseGold }}
          />
          <span style={{ color: colors.roseGold }}>✦</span>
          <div
            className="h-[1px] w-12"
            style={{ backgroundColor: colors.roseGold }}
          />
        </div>

        <span
          className="text-[12px] uppercase tracking-[0.1em] mb-4 block"
          style={{ color: colors.roseGold }}
        >
          ✦ Jadwalkan Sesi Anda
        </span>

        <h2
          className="text-3xl lg:text-[56px] font-medium italic leading-[1.2] mb-6"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            color: colors.white,
          }}
        >
          Wujudkan Tampilan Impianmu
          <br />
          Bersama Kami
        </h2>

        <p
          className="text-[17px] leading-[1.8] mb-8"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Tanggal terbatas setiap bulan. Pesan sekarang dan pastikan hari
          istimewamu diabadikan dengan riasan yang sempurna.
        </p>

        {/* Availability indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span
            className="text-[14px]"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Tersedia untuk booking bulan Juli — Desember 2026
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
                href="https://wa.me/6282137199389?text=Halo%20Muadina%20Demak,%20saya%20ingin%20cek%20ketersediaan%20tanggal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-base font-semibold transition-all duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: colors.white,
              color: colors.roseGold,
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Cek Ketersediaan Tanggal via WhatsApp
          </a>
          <a
              href="https://instagram.com/muadinademak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-5 rounded-full text-base transition-all duration-200 hover:bg-white/10"
            style={{
              border: "1.5px solid white",
              color: colors.white,
            }}
          >
            Lihat Instagram Kami →
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {[
            { emoji: "🏆", text: "5+ Tahun Pengalaman" },
            { emoji: "📸", text: "HD & Camera Ready" },
            { emoji: "💎", text: "Produk Premium" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="text-[13px]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {badge.emoji} {badge.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: colors.darkBrown }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-base" style={{ color: colors.roseGold }}>
                ✦
              </span>
              <span
                className="text-[24px]"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: colors.white,
                }}
              >
                Muadina Demak
              </span>
            </div>
            <p
              className="text-[13px] mb-6"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Merayakan Kecantikan Alami Setiap Perempuan Indonesia
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/muadinademak" },
                { icon: TikTokIcon, href: "https://tiktok.com/@muadinademak", isCustom: true },
                { icon: Youtube, href: "https://youtube.com/@muadinademak" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#C9956C]"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  {social.isCustom ? (
                    <social.icon className="w-5 h-5 text-white" />
                  ) : (
                    <social.icon size={20} color="white" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              className="text-[11px] uppercase tracking-[0.1em] mb-4"
              style={{ color: colors.roseGold }}
            >
              Navigasi
            </h4>
            <nav className="flex flex-col gap-3">
              {["Beranda", "Layanan", "Portofolio", "Tentang Kami", "Kontak"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-[14px] transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h4
              className="text-[11px] uppercase tracking-[0.1em] mb-4"
              style={{ color: colors.roseGold }}
            >
              Layanan
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                "Rias Pengantin Premium",
                "Rias Tunangan & Pre-Wedding",
                "Rias Wisuda & Pesta",
                "Kursus Privat Makeup",
              ].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-[14px] transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="text-[11px] uppercase tracking-[0.1em] mb-4"
              style={{ color: colors.roseGold }}
            >
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: colors.roseGold }}
                />
                <span
                  className="text-[14px]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Demak, Jawa Tengah
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: colors.roseGold }} />
                <span
                  className="text-[14px]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  082137199389
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: colors.roseGold }} />
                <span
                  className="text-[14px]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  muadinademak@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} style={{ color: colors.roseGold }} />
                <span
                  className="text-[14px]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Senin–Sabtu: 08.00–18.00 WIB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-[1px] w-full mb-6"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <p
            className="text-[13px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            © 2026 Muadina Demak. Hak Cipta Dilindungi.
          </p>
          <p
            className="text-[13px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Dibuat dengan ♥ untuk Perempuan Indonesia
          </p>
          <p
            className="text-[13px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Kebijakan Privasi · Syarat & Ketentuan
          </p>
        </div>
      </div>
    </footer>
  )
}

// Contact Modal
function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "",
    date: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Halo Muadina Demak!%0A%0ANama: ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0ALayanan: ${formData.service}%0ATanggal Acara: ${formData.date}%0A%0APesan:%0A${formData.message}`
    window.open(`https://wa.me/6282137199389?text=${text}`, "_blank")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md"
        style={{ backgroundColor: colors.white }}
      >
        <DialogHeader>
          <DialogTitle
            className="text-[24px]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: colors.charcoal,
            }}
          >
            ✦ Hubungi Muadina Demak
          </DialogTitle>
          <p className="text-[14px]" style={{ color: colors.softGray }}>
            Isi formulir di bawah dan kami akan menghubungi kamu dalam 1x24 jam.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2"
            style={{
              borderColor: colors.roseGoldLight,
              color: colors.charcoal,
            }}
          />
          <input
            type="tel"
            placeholder="Nomor WhatsApp"
            required
            value={formData.whatsapp}
            onChange={(e) =>
              setFormData({ ...formData, whatsapp: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2"
            style={{
              borderColor: colors.roseGoldLight,
              color: colors.charcoal,
            }}
          />
          <select
            required
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2"
            style={{
              borderColor: colors.roseGoldLight,
              color: formData.service ? colors.charcoal : colors.softGray,
            }}
          >
            <option value="">Pilih Jenis Layanan</option>
            <option value="Rias Pengantin Premium">Rias Pengantin Premium</option>
            <option value="Rias Tunangan & Pre-Wedding">
              Rias Tunangan & Pre-Wedding
            </option>
            <option value="Rias Wisuda & Pesta">Rias Wisuda & Pesta</option>
            <option value="Kursus Privat Makeup">Kursus Privat Makeup</option>
          </select>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2"
            style={{
              borderColor: colors.roseGoldLight,
              color: colors.charcoal,
            }}
          />
          <textarea
            placeholder="Ceritakan Kebutuhanmu"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2 resize-none"
            style={{
              borderColor: colors.roseGoldLight,
              color: colors.charcoal,
            }}
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[14px] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: colors.roseGold,
              color: colors.white,
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Kirim Pesan via WhatsApp
          </button>
        </form>

        <p className="text-center text-[13px] mt-4" style={{ color: colors.softGray }}>
          atau langsung{" "}
          <a
            href="https://wa.me/6282137199389"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: colors.roseGold }}
          >
            chat via WhatsApp →
          </a>
        </p>
      </DialogContent>
    </Dialog>
  )
}

// WhatsApp Floating Button
function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/6282137199389"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 group"
      style={{ backgroundColor: "#25D366" }}
      title="Chat dengan Kami!"
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ backgroundColor: "#25D366" }}
      />
      <WhatsAppIcon className="w-7 h-7 text-white relative z-10" />
      {/* Tooltip */}
      <span
        className="absolute right-full mr-3 px-3 py-2 rounded-lg text-[13px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          backgroundColor: colors.white,
          color: colors.charcoal,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        Chat dengan Kami!
      </span>
    </a>
  )
}

// Scroll Progress Bar
function ScrollProgressBar({ progress }: { progress: number }) {
  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[60] transition-all duration-100"
      style={{
        width: `${progress}%`,
        backgroundColor: colors.roseGold,
      }}
    />
  )
}

// Main Component
export default function MuadinaDemakLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <ScrollProgressBar progress={scrollProgress} />
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsContactOpen={setIsContactOpen}
        scrollY={scrollY}
      />
      <main>
        <HeroSection setIsContactOpen={setIsContactOpen} />
        <ProblemValueSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WhatsAppFloatingButton />
    </>
  )
}
