import React, { useState } from 'react';

function AdminLogin(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if ((adminuserid === "mass") && (adminpassword === "takeme")) {
      sessionStorage.setItem("Key_Veriable", 'ADMIN')

      props.history.push('/')

    }
    

    setAdminUserId('')
    setAdminPassword('')

  }

  return (
    <div className='container'>
      <h3 className='admin-text'>ADMIN LOGIN</h3>
     
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={adminuserid}
        className="form-control form-control-sm"
        onChange={(e) => setAdminUserId(e.target.value)} 
        placeholder="ADMIN USER ID"
        required />

        <input type="password"
         value={adminpassword}
         className="form-control form-control-sm"
         onChange={(e) => setAdminPassword(e.target.value)} 
         placeholder="ADMIN PASSWORD"
         required />
        
        <input type="submit"
         value="Login"
         className="btn btn-lg btn-outline-dark rounded-pill" />
      </form>
    </div>

  );
}
export default AdminLogin