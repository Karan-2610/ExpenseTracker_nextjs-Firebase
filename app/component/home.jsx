import Image from "next/image";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand text-white">RemixExpenses</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item">
                <a href="#" className="nav-link  active text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white ">
                  Pricing
                </a>
              </li>
            </ul>
            <a href="login">
              <button className="loginbtn btn btn-primary">Login</button>
            </a>
          </div>
        </div>
      </nav>
      <section className="home">
        <div className="container">
          <h1 className=" text-start text-white my-5">
            <pre>$ A Central Space</pre>
          </h1>
          <div className="row">
            <div className="col-md-5 image">
              <Image
                src="/k.png"
                class="border border-5"
                width={500}
                height={550}
                alt="Image"
              />
            </div>
            <div className="col-md-6">
              <h5 className="text-white">
                Manage your expenses in one central space
              </h5>
              <a href="expenseslist">
                <button className="text-white">
                  Get Started <i className="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default HomePage;
