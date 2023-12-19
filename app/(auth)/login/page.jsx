"use client";

import { useState } from "react";
import { auth, firestore } from "../../firebase";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link"

function Login() {
  let router = useRouter("");

  let [email, setEmail] = useState("");
  let [password, setPwd] = useState("");

   let login =async (e) => {
    e.preventDefault();
    try{
        let userLogin = await signInWithEmailAndPassword(auth, email, password);
        console.log(userLogin);
        router.push("/expenseslist");
    }
    catch(err){
        alert("please enter valid email and password")
    }
  };

  let signInWithGoogle = async () =>{
    let provider = new GoogleAuthProvider();

    try{
      await signInWithPopup(auth, provider)
      router.push("/expenseslist");
      }
    catch{
      console.error("Google sign in failed")
    }
  }
  

  return (
    
      <div>
      <section className="userlogin">
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-md-5">
              <div className="card border-0 p-5">
                <form
                  className="text-center d-flex flex-column"
                  onSubmit={login}
                >
                  <div className="iconcontainer align-self-center mb-3">
                    <i className="fa-solid fa-lock"></i>
                  </div>

                  <div className="mb-3">
                    <label className="text-white mb-1">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-white mb-1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPwd(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button className="text-white" type="submit">
                      Login
                    </button>
                  </div>
                  <div className="mb-3">
                    <Link className="Link-a text-white" href={ "/register" } >
                      Create a User
                    </Link>
                  </div>
                  <div>
                    <a onClick={signInWithGoogle} className="Link-a text-white">Sign In with Google</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      </div>
  
    
  );
}

export default Login;
