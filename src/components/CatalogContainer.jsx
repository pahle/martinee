import React from 'react'

export default function CatalogContainer({children}) {
  return (
    <section className="h-dvh flex justify-center items-center" >
      <div className="max-w-5xl w-full">
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  )
}
