import React, { useState,useEffect } from 'react'
import {getAuth} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'

function Profiles() {
   const auth = getAuth();
   
   const [formData, setFormData] = useState({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
   })
   const navigate = useNavigate()

   const onLogout = () => {
      auth.signOut();
      navigate('/')
   }
   return <div className="profile">
      <header className="profileHeader">
         <p className="pageHeader">My Profile</p>
         <button type='button' className="logOut" onClick={onLogout}>
            Logout
         </button>
      </header>
   </div>
}

export default Profiles
