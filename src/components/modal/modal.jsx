import React from 'react'
import "./modal.css"
function modal() {
  return (
    <main className='main-modal'>
        <section className='inner-modal'>
            <h1>User Management</h1>
            <p>If you need more info, please check Project Guidelines.</p>
            <label>Name<span>*</span></label>
            <input type='text' placeholder='Input Name'/>
            <label>Username<span>*</span></label>
            <input type='text' placeholder='Input Username'/>
            <label>Email<span>*</span></label>
            <input type='text' placeholder='Input Email'/>
            <label>Gender<span>*</span></label>
            <input type='text' placeholder='Choose Gender'/>
            <div>
                <button>Cancel</button>
                <button>Submit</button>
            </div>
        </section>
    </main>
  )
}

export default modal