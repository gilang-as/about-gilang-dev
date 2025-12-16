"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { translations, type Language } from "@/lib/translations"

export default function Page() {
  const [lang, setLang] = useState<Language>("en")
  const t = translations[lang]

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved) {
      setLang(saved)
    }

    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLang(e.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-8 md:py-12 lg:py-16 px-4 md:px-6">
      <div
        className="max-w-5xl mx-auto bg-white dark:bg-neutral-800 shadow-sm"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      >
        {/* Header */}
        <header className="px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 border-b border-neutral-200 dark:border-neutral-700">
          <div className="w-[95%] mx-auto flex flex-col gap-6">
            <div className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-between gap-4 text-center md:text-left">
              <div>
                <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {t.name}
                </h1>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mt-2">{t.title}</p>
                <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-500 mt-2 max-w-2xl">{t.intro}</p>
              </div>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>

            <nav className="w-full flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
              <a
                href="#about"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {t.sections.about}
              </a>
              <a
                href="#skills"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {t.sections.skills}
              </a>
              <a
                href="#projects"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {t.sections.projects}
              </a>
              <a
                href="#experience"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {t.sections.experience}
              </a>
              <a
                href="#video-blog"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {t.sections.videoBlog}
              </a>
              <a
                href="#contact"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {t.sections.contact}
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-[95%] mx-auto">
          {/* About Section */}
          <section className="pt-12 px-6 md:px-8 lg:px-12" id="about">
            <div className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6 justify-center md:justify-start">
              <svg
                className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <h2 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {t.about.title}
              </h2>
            </div>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <div className="py-6 md:py-7 lg:py-8 flex justify-center">
            <div className="w-[95%] border-b border-neutral-300 dark:border-neutral-600"></div>
          </div>

          {/* Skills Section */}
          <section className="px-6 md:px-8 lg:px-12" id="skills">
            <div className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6 justify-center md:justify-start">
              <svg
                className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {t.skills.title}
              </h2>
            </div>
            <div className="space-y-3">
              {t.skills.categories.map((category, index) => (
                <div key={index}>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">{category.name}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{category.items}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="py-6 md:py-7 lg:py-8 flex justify-center">
            <div className="w-[95%] border-b border-neutral-300 dark:border-neutral-600"></div>
          </div>

          {/* Projects Section */}
          <section className="px-6 md:px-8 lg:px-12" id="projects">
            <div className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6 justify-center md:justify-start">
              <svg
                className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <h2 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {t.projects.title}
              </h2>
            </div>
            <div className="space-y-6 md:space-y-8">
              {t.projects.items.map((project, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 text-sm md:text-base">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">{project.tech}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="py-6 md:py-7 lg:py-8 flex justify-center">
            <div className="w-[95%] border-b border-neutral-300 dark:border-neutral-600"></div>
          </div>

          {/* Experience Section */}
          <section className="px-6 md:px-8 lg:px-12" id="experience">
            <div className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6 justify-center md:justify-start">
              <svg
                className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {t.experience.title}
              </h2>
            </div>
            <div className="space-y-6 md:space-y-8">
              {t.experience.items.map((job, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm md:text-base">
                      {job.title}
                    </h3>
                    <span className="text-sm text-neutral-500 dark:text-neutral-500">{job.period}</span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">{job.company}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="py-6 md:py-7 lg:py-8 flex justify-center">
            <div className="w-[95%] border-b border-neutral-300 dark:border-neutral-600"></div>
          </div>

          {/* Video Blog Section */}
          <section className="px-6 md:px-8 lg:px-12" id="video-blog">
            <div className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6 justify-center md:justify-start">
              <svg
                className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {t.videoBlog.title}
              </h2>
            </div>
            <div className="space-y-5 md:space-y-6">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 text-sm md:text-base">
                  {t.videoBlog.videos.title}
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {t.videoBlog.videos.items.map((video, index) => (
                    <li key={index}>
                      <a
                        href={video.url}
                        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline decoration-dotted"
                      >
                        {video.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.videoBlog.videos.moreLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline decoration-dotted"
                >
                  {t.videoBlog.videos.moreLink.text} →
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 text-sm md:text-base">
                  {t.videoBlog.articles.title}
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {t.videoBlog.articles.items.map((article, index) => (
                    <li key={index}>
                      <a
                        href={article.url}
                        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline decoration-dotted"
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.videoBlog.articles.moreLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline decoration-dotted"
                >
                  {t.videoBlog.articles.moreLink.text} →
                </a>
              </div>
            </div>
          </section>

          <div className="py-6 md:py-7 lg:py-8 flex justify-center">
            <div className="w-[95%] border-b border-neutral-300 dark:border-neutral-600"></div>
          </div>

          {/* Contact Section */}
          <section className="px-6 md:px-8 lg:px-12 pb-8 md:pb-10 lg:pb-12" id="contact">
            <div className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6 justify-center md:justify-start">
              <svg
                className="w-4 h-4 text-neutral-500 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {t.contact.title}
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t.contact.email.label}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base text-neutral-800 dark:text-neutral-200 break-all">
                    {t.contact.email.value}
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(t.contact.email.value)
                    }}
                    className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors"
                    title="Copy email"
                  >
                    <svg
                      className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  {t.contact.social.label}
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {t.contact.social.items.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors"
                      title={social.name}
                    >
                      {social.name === "GitHub" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      {social.name === "LinkedIn" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {social.name === "Twitter" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {t.contact.downloadCV}
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-neutral-200 dark:border-neutral-700">
            <div className="w-[95%] mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.footer.copyright}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-center gap-1">
                {t.footer.madeWith}
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
