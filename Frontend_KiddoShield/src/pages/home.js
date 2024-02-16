import "../styles/home.css";

import { Link, Navigate, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="header__title">
          <h1 id="header-title">
            Get a{/* <!-- Green highlight effect --> */}&nbsp;
            <span className="highlight">Drop</span>
            <br />
            <span className="highlight">Stop</span>&nbsp; the&nbsp;
            <span className="highlight">Strop</span>
          </h1>
          <h4>A shot for healthier tomorrow.</h4>
          <h5>
            <a
              href="#section--1"
              className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Learn more ↓
            </a>
          </h5>
          <img
            src="images/injection.png"
            className="header__img"
            alt="vaccine"
          />
        </div>
      </header>

      <section className="section" id="section--1">
        <div className="section__title">
          <h2 className="section__description">Features</h2>
        </div>

        <div className="features">
          <img
            src="images/child.jpg"
            alt="Computer"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon"></div>
            <h5 className="features__header">
              <b> Recommended Vaccines by Age</b>
            </h5>
            <p>
              Vaccines prevent illness, disability and ensuring children's
              health and well-being. By immunizing against contagious diseases,
              vaccinations also create a shield of protection for vulnerable
              children and the broader community.
            </p>
            <h5>
              <Link
                to="/vaccinesByAge"
                className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Click Here →
              </Link>
            </h5>
          </div>

          <div className="features__feature">
            <div className="features__icon"></div>
            <h5 className="features__header">
              <b>Watch your money grow</b>
            </h5>
            <p>
              Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
              inventore ab? Nulla incidunt eius numquam sequi iste pariatur
              quibusdam!
            </p>
          </div>
          <img
            style={{ marginTop: "7%" }}
            src="images/img1"
            data-src="img/grow.jpg"
            alt="Plant"
            className="features__img lazy-img"
          />

          <img
            style={{ marginTop: "8%" }}
            src="images/diseaseimg.jpg"
            data-src="images/diseaseimg.jpg"
            alt="Credit card"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon"></div>
            <h5 className="features__header">
              <b>Free debit card included</b>
            </h5>
            <p>
              Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
              eveniet consequatur odit quam quos possimus assumenda dicta fuga
              inventore ab.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="section--2">
        <div className="section__title">
          <h2 className="section__description">Operations</h2>
          <h3 className="section__header">
            Everything as simple as possible, but no simpler.
          </h3>
        </div>

        <div className="operations">
          <div className="operations__tab-container">
            <button
              className="btn operations__tab operations__tab--1 operations__tab--active"
              data-tab="1"
            >
              <span>01</span>Instant Transfers
            </button>
            <button
              className="btn operations__tab operations__tab--2"
              data-tab="2"
            >
              <span>02</span>Instant Loans
            </button>
            <button
              className="btn operations__tab operations__tab--3"
              data-tab="3"
            >
              <span>03</span>Instant Closing
            </button>
          </div>
          <div className="operations__content operations__content--1 operations__content--active">
            <div className="operations__icon operations__icon--1">
              {/* <svg>
                  <use xlink:href="img/icons.svg#icon-upload"></use>
                </svg> */}
            </div>
            <h5 className="operations__header">
              Tranfser money to anyone, instantly! No fees, no BS.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="operations__content operations__content--2">
            <div className="operations__icon operations__icon--2">
              {/* <svg>
                  <use xlink:href="img/icons.svg#icon-home"></use>
                </svg> */}
            </div>
            <h5 className="operations__header">
              Buy a home or make your dreams come true, with instant loans.
            </h5>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="operations__content operations__content--3">
            <div className="operations__icon operations__icon--3">
              {/* <svg>
                  <use xlink:href="img/icons.svg#icon-user-x"></use>
                </svg> */}
            </div>
            <h5 className="operations__header">
              No longer need your account? No problem! Close it instantly.
            </h5>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="section--3">
        <div className="section__title section__title--testimonials">
          <h2 className="section__description">Not sure yet?</h2>
          <h3 className="section__header">
            Millions of Bankists are already making their lifes simpler.
          </h3>
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="images/immunization.jpg"
                alt="First slide"
                style={{
                  maxHeight: "500px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="images/injection.png"
                alt="Second slide"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="images/injection.png"
                alt="Second slide"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            style={{ left: "22%" }}
          >
            {" "}
            <div className="arrow-circle">
              <h2 className="arrow-text" style={{ color: "black" }}>
                ←
              </h2>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            style={{ right: "22%" }}
          >
            <div className="arrow-circle">
              <h2 className="arrow-text" style={{ color: "black" }}>
                →
              </h2>
            </div>
          </a>
        </div>
        <hr></hr>
        <h2 id="faq-header" className="section__description">
          FAQ's
        </h2>
        <div className="accordion" id="faqs">
          {/* first  accordian*/}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h5 className="text-center">
                  <b> How do I schedule an appoinment for vaccine?</b>
                </h5>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          {/* second */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h5 className="text-center">
                  <b> When Should Children Get Vaccinated?</b>
                </h5>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Children should follow the recommended vaccination schedule
                provided by healthcare professionals. Most vaccinations begin
                during infancy and continue through childhood and adolescence.
                It's important to adhere to the recommended schedule to ensure
                children are protected from serious diseases at the appropriate
                times in their development.
              </div>
            </div>
          </div>
          {/* third */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h5 className="text-center">
                  <b> What Are the Consequences of Not Vaccinating Children?</b>
                </h5>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          {/* fourth */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <h5 className="text-center">
                  <b> What are the potential side effects of vaccines?</b>
                </h5>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Most side effects of vaccines are mild and temporary, such as
                redness or soreness at the injection site. Serious side effects
                are rare. Your healthcare provider can discuss potential side
                effects with you.
              </div>
            </div>
          </div>
          {/* five */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <h5 className="text-center">
                  <b> Can vaccines be given during pregnancy?</b>
                </h5>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Some vaccines, such as the flu vaccine and Tdap (tetanus,
                diphtheria, and pertussis) vaccine, are recommended during
                pregnancy to protect both the mother and the baby. Your
                healthcare provider can advise you on which vaccines are safe
                during pregnancy.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            We want to make vaccination easy and accessible to everyone.
          </h3>
        </div>
        <button
          className="btn btn-success  rounded-pill"
          id="btn-rgt"
          style={{ display: "inline-block" }}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/registration");
          }}
        >
          Register
        </button>
      </section>
    </>
  );
}
