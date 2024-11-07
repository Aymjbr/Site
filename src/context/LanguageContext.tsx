import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, TranslationKeys } from '../utils/translations'

type Language = 'EN' | 'FR' | 'AR'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKeys
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Retrieve the saved language from localStorage or default to 'EN'
    const savedLanguage = localStorage.getItem('language') as Language
    return savedLanguage || 'EN'
  })

  useEffect(() => {
    // Save the current language to localStorage
    localStorage.setItem('language', language)
  }, [language])

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as TranslationKeys,
    dir: language === 'AR' ? 'rtl' : 'ltr'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 