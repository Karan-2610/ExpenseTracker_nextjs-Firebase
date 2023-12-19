function authNavbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand text-white">RemixExpenses</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
               <span className="navbar-toggler-icon"></span>
        </button>


        <div className="navbar-collapse collapse" id="navbarNav">
                {/* <ul className="navbar-nav ms-auto me-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white">Manage Expenses</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link active text-white ">Analyse Expenses</a>
                    </li>
                </ul> */}
                <div  className="position-absolute top-0 end-0">
                <a href="login">
                {/* <button className="loginbtn btn btn-primary" >Login</button> */}
                </a>
                </div>
            </div>

        </div>

    </nav>
        </>
    )

}

export default authNavbar