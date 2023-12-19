import AuthNavbar from "./component/AuthNavbar"

function authLayout({children}){
    return(
        <>
            <AuthNavbar/>
             {children}
        </>
    )
}

export default authLayout