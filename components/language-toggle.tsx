"use client"

import { useState, useEffect } from "react"

export function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "id">("en")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("language") as "en" | "id" | null
    if (saved) {
      setLanguage(saved)
      window.dispatchEvent(new CustomEvent("languageChange", { detail: saved }))
    } else {
      window.dispatchEvent(new CustomEvent("languageChange", { detail: "en" }))
    }
  }, [])

  const selectLanguage = (newLang: "en" | "id") => {
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLang }))
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded transition-colors flex items-center gap-2"
        aria-label="Select language"
      >
        {language === "en" ? "English" : "Indonesian"}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded shadow-lg z-50">
          <button
            onClick={() => selectLanguage("en")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors ${
              language === "en" ? "bg-neutral-50 dark:bg-neutral-700 font-medium" : ""
            }`}
          >
            English
          </button>
          <button
            onClick={() => selectLanguage("id")}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors ${
              language === "id" ? "bg-neutral-50 dark:bg-neutral-700 font-medium" : ""
            }`}
          >
            Indonesian
          </button>
        </div>
      )}
    </div>
  )
}
