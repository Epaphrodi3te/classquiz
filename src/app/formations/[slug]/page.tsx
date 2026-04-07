"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/lib/courses";
import { useParams } from "next/navigation";
import { getIllustration } from "@/components/illustrations";
import {
  UserIcon,
  FireIcon,
  CpuIcon,
  ZapIcon,
  DollarIcon,
  TargetIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BookOpenIcon,
} from "@/components/icons";

const iconMap = {
  user: UserIcon,
  fire: FireIcon,
  cpu: CpuIcon,
  zap: ZapIcon,
  dollar: DollarIcon,
  target: TargetIcon,
};

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = courses.find((c) => c.slug === slug);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Formation introuvable</h1>
          <Link href="/formations" className="text-[#25F4EE] hover:underline">
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[course.icon];
  const chapter = course.chapters[activeChapter];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/formations"
              className="text-gray-400 hover:text-white transition flex items-center gap-1"
            >
              <ChevronLeftIcon className="w-4 h-4" />
              Retour
            </Link>
            <span className="text-white font-semibold">{course.title}</span>
          </div>
        </div>
      </nav>

      <div className="pt-20 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-80 lg:min-h-screen bg-white/[0.02] border-r border-white/10 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#25F4EE]" />
            </div>
            <div>
              <h2 className="font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-500">
                {course.chapters.length} chapitres
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {course.chapters.map((ch, i) => (
              <button
                key={ch.id}
                onClick={() => setActiveChapter(i)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition flex items-center gap-3 ${
                  i === activeChapter
                    ? "bg-[#FE2C55]/20 text-white border border-[#FE2C55]/30"
                    : "text-gray-400 hover:bg-white/5"
                }`}
              >
                <span className="text-gray-500 text-xs w-5 text-center">
                  {i + 1}
                </span>
                {ch.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 lg:p-10 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <BookOpenIcon className="w-5 h-5 text-gray-500" />
            <h1 className="text-2xl font-bold">{chapter.title}</h1>
          </div>

          {/* Illustration */}
          {!chapter.videoUrl && (
            <div className="mb-8">
              {getIllustration(slug)}
            </div>
          )}

          {/* Video */}
          {chapter.videoUrl && (
            <div className="mb-8 aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src={chapter.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={chapter.title}
              />
            </div>
          )}

          {/* Text content */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(chapter.content) }}
          />

          {/* Navigation */}
          <div className="flex justify-between mt-12 pt-6 border-t border-white/10">
            <button
              onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
              disabled={activeChapter === 0}
              className="flex items-center gap-2 text-gray-400 hover:text-white disabled:opacity-30 transition"
            >
              <ChevronLeftIcon className="w-4 h-4" />
              Precedent
            </button>
            <button
              onClick={() =>
                setActiveChapter(
                  Math.min(course.chapters.length - 1, activeChapter + 1)
                )
              }
              disabled={activeChapter === course.chapters.length - 1}
              className="flex items-center gap-2 text-[#FE2C55] hover:text-white transition disabled:opacity-30"
            >
              Suivant
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function markdownToHtml(md: string): string {
  let html = md
    .replace(/#### (.*)/g, "<h4>$1</h4>")
    .replace(/### (.*)/g, "<h3>$1</h3>")
    .replace(/## (.*)/g, "<h2>$1</h2>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    .replace(/^> (.*)/gm, "<blockquote>$1</blockquote>")
    .replace(/^- (.*)/gm, "<li>$1</li>")
    .replace(/^\d+\. (.*)/gm, "<li>$1</li>");

  html = html.replace(
    /(<li>.*<\/li>\n?)+/g,
    (match) => `<ul>${match}</ul>`
  );

  html = html
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (
        !block ||
        block.startsWith("<h") ||
        block.startsWith("<ul") ||
        block.startsWith("<ol") ||
        block.startsWith("<pre") ||
        block.startsWith("<blockquote")
      ) {
        return block;
      }
      return `<p>${block}</p>`;
    })
    .join("\n");

  return html;
}
