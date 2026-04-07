import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { courses } from "@/lib/courses";
import {
  UserIcon,
  FireIcon,
  CpuIcon,
  ZapIcon,
  DollarIcon,
  TargetIcon,
  LogOutIcon,
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

export default async function FormationsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token || !verifyToken(token)) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/formations"
            className="text-2xl font-bold tiktok-gradient"
          >
            FormaTikTok
          </Link>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <LogOutIcon className="w-4 h-4" />
              Deconnexion
            </button>
          </form>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Mes formations</h1>
          <p className="text-gray-400 mb-10">
            Bienvenue. Choisissez un module pour commencer.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              const Icon = iconMap[course.icon];
              return (
                <Link
                  key={course.slug}
                  href={`/formations/${course.slug}`}
                  className="card-hover bg-white/5 border border-white/10 rounded-2xl p-6 block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#25F4EE]" />
                    </div>
                    <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                      Module {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {course.chapters.length} chapitres
                    </span>
                    <span className="text-[#FE2C55] text-sm font-medium flex items-center gap-1">
                      Commencer
                      <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
