function Pricecard(props){

    return(
        <div className="card border-0">
          <div className="card-header text-center rounded-0 d-flex flex-column align-item-center p-5 pb-2" style={{backgroundColor: '#8A56F9'}}>
            <div className="iconcontainer align-self-center">
              <i className="fa-solid fa-handshake" />
            </div>
            <h1 className="text-white">{props.name}</h1>
            <p className="text-white">{props.price}</p>
          </div>
          <div className="card-body border-0  text-center">
            <p> for {props.user} User</p>
            <p>Upto {props.exp} expenses/year</p>
            <p>{props.f1}</p>
            <button className="btn text-white">Learn More</button>
          </div>
          <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
        </div>
        

    )

}

export default Pricecard