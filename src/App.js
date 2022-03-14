import React, { useState } from 'react'
function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")


  const storeData= async(e)=>{
    e.preventDefault()

    const result  = await fetch("https://react-form-5dc75-default-rtdb.firebaseio.com/user.json",{
      method:"POST",
      headers:{
        "Content-Type":"appplication/json"
      },
      body:JSON.stringify({
        Email:email,
        password:password,
        City:city,
        Zip:zip
      })
    })

    if(result){
      setEmail("")
      setPassword("")
      setCity("")
      setZip("")
      alert("form submit ho gya")
    }

  }
  

  return (
    <>

      <div className="container my-5">
        <div className="row">
          <div className="col-9">
            <form className="row g-3" method='POST'>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" required value={city} onChange={(e) => { setCity(e.target.value) }} />
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" required value={zip} onChange={(e) => { setZip(e.target.value) }} />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary" onClick={storeData}>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>


    

    </>
  )
}

export default App