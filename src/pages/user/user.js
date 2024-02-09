import React, {useState, useEffect} from 'react'
import "./user.css"
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import axios from 'axios';
import Modal from '../../components/modal/modal';
function User() {
  const [user, setUser] = useState([])
  const [modalOpen, setModal] = useState(false)
  const getUser = () => {
    axios
        .get("https://dummyjson.com/users")
        .then((result) => {
          console.log("inihasil ==>",result.data.users)
          setUser(result.data.users)
        })
        .catch((err) => {
          console.log("ini error ==>", err)
        })
  }

  useEffect(() => {
    getUser();
  }, [])
  return (
    <main>
      {modalOpen? (
        <Modal>
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
                <button onClick={() => setModal(false)}>Cancel</button>
                <button>Submit</button>
            </div>
        </Modal>
      ): null}
      <section className='user-top'>
        <h1>User Management</h1>
        <p>Loremipsum/<span>Usermanagement</span></p>
      </section>
      <section className='user-management'>
        <div>
        <CiSearch/>
        <input type='text' placeholder='Search User Management'/>
        </div>
        <button onClick={() => setModal(true)}>
          Add User
        </button>
      </section>
      <section className='management-title'>
        <p>Name</p>
        <p>Username</p>
        <p>Email</p>
        <p>Gender</p>
        <p>Last Name</p>
        <p>Action</p>
      </section>
      <section className='main-user'>
          {user.slice(0, 6).map((item, id) => (
            <section key={id} className='management-title'>
            <span className='name-image'>
              <img src={item.image}/>
            <p>{item.firstName}</p>
            </span>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.gender}</p>
            <p>{item.lastName}</p>
            <p>...</p>
          </section>
          ))}
      </section>
      <section className='pagination'>
        <article>
          <p>Showing 7 of 50 User</p>
        </article>
        <div>
          <MdKeyboardArrowLeft className='arrow'/>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <MdKeyboardArrowRight className='arrow'/>
        </div>
      </section>
    </main>
  )
}

export default User