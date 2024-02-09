import React from 'react'
import "./modal.css"
function modal({children}) {
  return (
    <main className='main-modal'>
        <section className='inner-modal'>
            {children}
        </section>
    </main>
  )
}

export default modal