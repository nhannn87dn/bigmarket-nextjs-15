import React from 'react'
import HeaderTopNavigation from './HeaderTopNavigation'

export default function HeaderTop() {
  return (
    <div className="header-top bg-primary py-2">
    <div className="max-w-7xl mx-auto text-white flex justify-end">
            <HeaderTopNavigation />
        </div>
    </div>
  )
}
