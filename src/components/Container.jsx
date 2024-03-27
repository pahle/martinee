import React from 'react'

export default function Container({children, title}) {
  return (
    <section className="lg:mt-20 mt-12 flex justify-center px-6" >
      <div className="max-w-5xl w-full">
        {title && (
            <h1 className="text-center text-2xl font-extrabold mb-8">
          {title}
        </h1>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  )
}
