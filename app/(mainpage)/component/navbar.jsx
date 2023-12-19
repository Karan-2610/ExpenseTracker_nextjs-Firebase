
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";


function Navbar() {

  let router = useRouter()
  function logout(){
    auth.signOut();
    router.push("/login")  

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand text-white">RemixExpenses</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
               <span className="navbar-toggler-icon"></span>
        </button>


        <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item">
                <Link href={"/expenseslist"} className="nav-link text-white">
                  Manage Expenses
                </Link>
              </li>
              <li>
                <Link href={"/analytic"} className="nav-link active text-white ">
                  Analyse Expenses
                </Link>
              </li>
            </ul>
            <div  className="ms-3">
              <button className="loginbtn btn btn-primary" onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
