"use client";
import { auth } from "@/app/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link"


function RegisterAuth() {
  let router = useRouter();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPwd] = useState("");

  let register = async (e) => {
    e.preventDefault();

    let userDetails = createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name
    );
    console.log(userDetails);
    await updateProfile((await userDetails).user, {
      displayName: name,
    });
    alert("Register Successfully");

    router.push("/login");
  };
  let signInWithGoogle = async () =>{
    let provider = new GoogleAuthProvider();

    try{
      await signInWithPopup(auth, provider)
      router.push("/expenseslist");
      }
    catch{
      console.error("Google sign in failed",error.message)
    }
  }
  
  return (
    <div>
      <section class="userlogin">
        <div class="container">
          <div class="row justify-content-center mt-4">
            <div class="col-md-5">
              <div class="card border-0 p-5">
                <form
                  class="text-center d-flex flex-column"
                  onSubmit={register}
                >
                  <div class="iconcontainer align-self-center mb-3">
                    <i class="fa-solid fa-lock"></i>
                  </div>
                  <div class="mb-3">
                    <label class="text-white mb-1">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div class="mb-3">
                    <label class="text-white mb-1">Email Address</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="text-white mb-1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      onChange={(e) => setPwd(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <button class="text-white" type="submit">
                      Login
                    </button>
                  </div>
                  <div class="mb-3">
                    <Link href={"/login"} className="Link-a text-white">
                      Allready register?Login
                    </Link>
                  </div>
                  <div>
                    <a onClick={signInWithGoogle} className="Link-a text-white">
                      Sign In with Google
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>

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

export default RegisterAuth;
