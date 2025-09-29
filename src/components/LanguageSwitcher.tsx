'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const currentLocale = useLocale()
  const [locale, setLocale] = useState(currentLocale)

  useEffect(() => {
    setLocale(currentLocale)
  }, [currentLocale])

  const switchLanguage = (newLocale: string) => {
    // Set cookie for middleware to read
    document.cookie = `preferred-locale=${newLocale}; path=/; max-age=31536000` // 1 year
    // Also store in localStorage for client-side access
    localStorage.setItem('preferred-locale', newLocale)
    // Refresh the page to apply the new locale
    window.location.reload()
  }

  return (
    <div className="flex gap-2 mb-4">
      <button 
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded ${
          locale === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        English
      </button>
      <button 
        onClick={() => switchLanguage('es')}
        className={`px-3 py-1 rounded ${
          locale === 'es' 
            ? 'bg-green-600 text-white' 
            : 'bg-green-500 text-white hover:bg-green-600'
        }`}
      >
        Español
      </button>
    </div>
  )
}