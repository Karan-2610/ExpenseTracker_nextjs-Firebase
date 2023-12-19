import Pricecard from "../component/Pricecard";

function Pricing(){
    return(
<section className="pricing">
  <div className="container">
    <h1 className="text-center text-white my-2">Great Project,Great Pricing</h1>
    <div className="row justify-content-center ">
      <div className="col-md-3 mt-5">
        <Pricecard name="Basic" price= "Free Forever" user = "1" exp= "100" f1="Basic Analytic"/>
      </div>
      <div className="col-md-3 mt-5">
        <Pricecard name="Pro" price= "$9.99/Month" user = "2" exp= "500" f1="Basic Analytic"/>
      </div>
    </div>
  </div>
</section>

    )
}

export default Pricing;