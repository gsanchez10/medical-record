'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  
  // Extract the current path without locale
  const currentPath = pathname.startsWith('/en') ? pathname.slice(3) : 
                     pathname.startsWith('/es') ? pathname.slice(3) : pathname

  return (
    <div className="flex gap-2 mb-4">
      <Link 
        href={`/en${currentPath}`}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        English
      </Link>
      <Link 
        href={`/es${currentPath}`}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Español
      </Link>
    </div>
  )
}