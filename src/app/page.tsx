import Link from "next/link";
import { courses } from "@/lib/courses";
import {
  UserIcon,
  FireIcon,
  CpuIcon,
  ZapIcon,
  DollarIcon,
  VideoIcon,
  TargetIcon,
  ArrowRightIcon,
} from "@/components/icons";

const iconMap = {
  user: UserIcon,
  fire: FireIcon,
  cpu: CpuIcon,
  zap: ZapIcon,
  dollar: DollarIcon,
  target: TargetIcon,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tiktok-gradient">
            FormaTikTok
          </Link>
          <Link href="/login" className="btn-primary text-sm px-6 py-2">
            Connexion
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-bg pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Deviens un createur{" "}
            <span className="tiktok-gradient">TikTok</span> professionnel
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Formation complete : cree ton compte, trouve ta niche virale,
            produis du contenu avec l&apos;IA et monetise ton audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login" className="btn-primary text-lg px-10 py-4">
              Acceder a la formation
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Ce que tu vas apprendre
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            6 modules complets pour passer de zero a createur TikTok
            professionnel
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = iconMap[course.icon];
              return (
                <div
                  key={course.slug}
                  className="card-hover bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#25F4EE]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    {course.chapters.length} chapitres
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi cette formation ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: VideoIcon,
                title: "Videos + Texte",
                desc: "Chaque module combine videos explicatives et guides ecrits detailles.",
              },
              {
                Icon: CpuIcon,
                title: "Contenu avec l'IA",
                desc: "Apprends a creer du contenu viral sans montrer ton visage grace a l'IA.",
              },
              {
                Icon: TargetIcon,
                title: "Monetisation",
                desc: "Des strategies concretes pour transformer tes vues en revenus.",
              },
            ].map((feat) => (
              <div key={feat.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <feat.Icon className="w-7 h-7 text-[#FE2C55]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pret a lancer ton compte TikTok ?
          </h2>
          <p className="text-gray-400 mb-8">
            Rejoins des centaines de createurs qui ont deja transforme leur
            presence sur TikTok.
          </p>
          <Link
            href="/login"
            className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2"
          >
            Commencer maintenant
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>2025 FormaTikTok. Tous droits reserves.</p>
        </div>
      </footer>
    </div>
  );
}
