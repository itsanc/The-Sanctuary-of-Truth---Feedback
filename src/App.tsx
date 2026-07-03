import { useState } from "react";
import { motion } from "motion/react";
import { Languages } from "lucide-react";
import heroBg from "./assets/images/sanctuary_front_daytime_1782958095699.jpg";
import googleMapsIcon from "./assets/images/google_maps_icon_1782955688474.jpg";
import dianpingIcon from "./assets/images/dianping_icon_1782955700235.jpg";
import sanctuaryLogoCircular from "./assets/images/sanctuary_logo_circular_fixed_1782956999997.jpg";

export default function App() {
  const [lang, setLang] = useState<"EN" | "TH">("EN");
  const isDarkMode = true; // Kept permanently as premium dark mode

  // Translation dictionary with strict constraints:
  // - Main Card Titles ("Share on Map", "Share on Dianping", "Direct to Management") remain in English
  // - Footer is static (not included in translations)
  const t = {
    EN: {
      siteTitle: "The Sanctuary of Truth",
      siteSubtitle: "ปราสาทสัจธรรม • PATTAYA",
      heroTitle: "Your Voice",
      heroTitleSpan: "Matters",
      heroSubtitle: "Help us preserve history. Share your experience or send comments directly to our team at the world's largest hand-carved wooden structure.",
      mapLabel: "Location Guide",
      dianpingLabel: "Visitor Insight",
      mgmtLabel: "Official Channel",
    },
    TH: {
      siteTitle: "ปราสาทสัจธรรม",
      siteSubtitle: "THE SANCTUARY OF TRUTH • พัทยา",
      heroTitle: "ทุกความคิดเห็น",
      heroTitleSpan: "มีคุณค่า",
      heroSubtitle: "ร่วมเป็นส่วนหนึ่งในการอนุรักษ์ประวัติศาสตร์ แบ่งปันประสบการณ์ หรือส่งข้อเสนอแนะโดยตรงถึงทีมงานของเรา ณ ปราสาทสัจธรรม",
      mapLabel: "แนะนำสถานที่",
      dianpingLabel: "มุมมองผู้เข้าชม",
      mgmtLabel: "ช่องทางอย่างเป็นทางการ",
    }
  };

  const active = t[lang];

  const cards = [
    {
      title: "Share on Map", // kept strictly in English as requested
      label: active.mapLabel, // translated
      icon: googleMapsIcon,
      url: "https://share.google/cKRWEh4GGHksaqVjR",
      alt: "Google Maps logo",
      iconStyle: "rounded-full border border-[#D4AF37]/30 shadow-md",
    },
    {
      title: "Share on Dianping", // kept strictly in English as requested
      label: active.dianpingLabel, // translated
      icon: dianpingIcon,
      url: "https://m.dianping.com/shopshare/k2t2X1kdHXcRK2at?msource=Appshare2021&utm_source=shop_share&issilencelogin=0",
      alt: "Dianping logo",
      iconStyle: "rounded-[2.5rem] shadow-md border border-transparent",
    },
    {
      title: "Direct to Management", // kept strictly in English as requested
      label: active.mgmtLabel, // translated
      icon: sanctuaryLogoCircular,
      url: "https://sites.google.com/view/sanctuaryoftruth-feedback/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%84%E0%B8%84%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%81",
      alt: "Sanctuary of Truth seal logo",
      iconStyle: "rounded-full border border-white bg-white shadow-md p-1",
    },
  ];

  return (
    <div className="min-h-screen font-sans flex flex-col relative overflow-x-hidden transition-colors duration-500 ease-in-out bg-[#0A0A0A] text-white selection:bg-amber-500/30 selection:text-amber-200">
      {/* Elegant Gold-striped Pinstripe Background Pattern */}
      <div 
        className="absolute top-0 right-0 w-full md:w-1/3 h-full pointer-events-none z-0 transition-opacity duration-500" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', 
          backgroundSize: '30px 30px',
          opacity: 0.03
        }}
      />

      {/* Header Bar */}
      <header className="w-full px-4 sm:px-6 md:px-12 py-5 flex justify-between items-center border-b z-30 transition-colors duration-500 border-white/5 bg-black/40 backdrop-blur-md">
        {/* Top Header Logo (Left-aligned - translated dynamically) */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center overflow-hidden transition-colors duration-500 border-[#D4AF37]/40 bg-black/60">
            <img 
              src={sanctuaryLogoCircular} 
              alt="The Sanctuary of Truth Logo Seal" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase font-cinzel leading-tight transition-colors duration-500 text-white">
              {active.siteTitle}
            </span>
            <span className="text-[8px] md:text-[9px] font-medium tracking-widest text-[#D4AF37] leading-tight font-sans">
              {active.siteSubtitle}
            </span>
          </div>
        </div>

        {/* Action Controls (Right-aligned) */}
        <div className="flex items-center gap-2 sm:gap-3 z-40">
          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === "EN" ? "TH" : "EN")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white/80 bg-white/[0.02]"
            title="Change language / เปลี่ยนภาษา"
          >
            <Languages size={13} className="text-[#D4AF37]" />
            <span>{lang === "EN" ? "TH" : "EN"}</span>
          </button>
        </div>
      </header>

      {/* Hero Header Banner */}
      <div 
        id="hero-section"
        className="relative h-[60vh] min-h-[460px] w-full flex flex-col justify-center items-center overflow-hidden bg-black transition-colors duration-500"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.98)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        {/* Ambient radial gold vignette overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#D4AF37]/8 via-transparent to-transparent pointer-events-none z-10" />

        {/* Hero Copywriting Content (Translated dynamically) */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-6 flex flex-col items-center">
          {/* Symmetrical Top Ornament */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6 opacity-70" />

          <motion.h1 
            key={`${lang}-title`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight font-serif italic mb-4 select-none drop-shadow-sm text-white"
          >
            {active.heroTitle} <span className="text-[#D4AF37] not-italic font-normal font-serif">{active.heroTitleSpan}</span>
          </motion.h1>
          
          <motion.p 
            key={`${lang}-desc`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-sm text-white/80"
          >
            {active.heroSubtitle}
          </motion.p>

          {/* Symmetrical Bottom Ornament */}
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-8 opacity-40" />
        </div>
      </div>

      {/* Elegant gold hairline separator bar */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent z-20" />

      {/* Grid of Clickable Cards */}
      <div className="flex-1 flex items-center py-16 md:py-24 z-10 transition-colors duration-500 bg-gradient-to-b from-[#0A0A0A] to-[#0d0d0d]">
        <div className="max-w-6xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {cards.map((card, idx) => (
              <motion.a
                key={`${idx}-${lang}`}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group flex flex-col items-center rounded-lg p-8 shadow-xl border cursor-pointer text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/[0.03] backdrop-blur-md border-white/5 hover:border-[#D4AF37]/60 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.12)] hover:-translate-y-2"
              >
                {/* Custom Styled Large Icon container with a soft golden outer ring */}
                <div className="w-36 h-36 md:w-40 md:h-40 mb-6 flex items-center justify-center relative p-1 rounded-full border transition-all duration-500 bg-black/20 border-white/5 group-hover:border-[#D4AF37]/20">
                  <img
                    src={card.icon}
                    alt={card.alt}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${card.iconStyle}`}
                  />
                  {/* Subtle golden halo effect on hover */}
                  <div className="absolute inset-0 rounded-full group-hover:bg-amber-500/5 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Visitor Label / Guide (Translated dynamically) */}
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#D4AF37] mb-2 uppercase font-cinzel opacity-90 group-hover:text-amber-500 transition-colors duration-300">
                  {card.label}
                </span>

                {/* Primary Card action Title (Stays strictly in English: Share on Map, Share on Dianping, Direct to Management) */}
                <span className="text-xl md:text-2xl font-light font-serif group-hover:text-[#D4AF37] transition-colors duration-300 tracking-wide text-white">
                  {card.title}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Luxury Footer (Kept static as requested, not translating) */}
      <footer className="py-12 border-t flex flex-col items-center px-8 md:px-16 text-center text-[9px] md:text-[10px] tracking-widest uppercase font-cinzel gap-6 transition-colors duration-500 bg-black border-white/5 text-white/40">
        {/* Address Info */}
        <div className="flex flex-col items-center gap-2 max-w-2xl">
          <p className="text-[#D4AF37] font-semibold tracking-[0.12em] text-center normal-case font-sans text-xs">
            206/2 Moo 5, Soi Naklua 12, Naklua, Banglamung, Chonburi 20150 Thailand
          </p>
          <p className="font-light tracking-wide text-center normal-case font-sans text-[10px] md:text-[11px] transition-colors duration-500 text-white/30">
            206/2 หมู่ที่ 5 ซอยนาเกลือ 12 ตำบลนาเกลือ อำเภอบางละมุง จังหวัดชลบุรี 20150
          </p>
        </div>

        {/* Ornament line */}
        <div className="w-16 h-[1px] transition-colors duration-500 bg-white/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-5xl gap-4 text-center">
          <p>© {new Date().getFullYear()} The Sanctuary of Truth Museum Pattaya</p>
          <p className="text-[#D4AF37]/70 tracking-[0.2em] font-semibold">Refining through reflection</p>
        </div>
      </footer>
    </div>
  );
}
