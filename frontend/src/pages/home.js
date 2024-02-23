import "../styles/home.css";

import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const lazyImagesRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy-img");
          observer.unobserve(lazyImage);
        }
      });
    }, options);

    lazyImagesRef.current.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
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
          <h2 className="section__description">Information</h2>
          <h1 style={{ fontSize: "40px" }}>
            <b>Everything you need to know about vaccines and health.</b>
          </h1>
        </div>

        <div className="features">
          <img
            ref={(img) => lazyImagesRef.current.push(img)}
            src="images/child.jpg"
            data-src="images/child.jpg"
            alt="injection"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon"></div>
            <h5 className="features__header">
              <b> Recommended Vaccines by Age</b>
            </h5>
            <p style={{ textAlign: "justify" }}>
              Vaccines prevent illness, disability and ensuring children's
              health and well-being. By immunizing against contagious diseases,
              vaccinations also create a shield of protection for vulnerable
              children and the broader community.
            </p>
            <h5>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/vaccinesByAge"
                className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Click Here →
              </Link>
            </h5>
          </div>

          <div className="features__feature">
            <div className="features__icon" style={{ marginTop: "3%" }}></div>
            <h5 className="features__header">
              <b>Diet Plan</b>
            </h5>
            <p>
              Proper nutrition plays key role in a child's growth, immunity and
              overall develpment. These healthy and balanced meal plans are
              customised to regional delicacies so that you can give your child
              a wholesome and nutritious diet that’s delicious all week long.
            </p>
            <h5>
              <Link
                to="/dietplan"
                onClick={() => window.scrollTo(0, 0)}
                className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Click Here →
              </Link>
            </h5>
          </div>
          <img
            style={{ marginTop: "7%" }}
            ref={(img) => lazyImagesRef.current.push(img)}
            src="images/img1"
            data-src="images/img1"
            alt="kid"
            className="features__img lazy-img"
          />

          <img
            style={{ marginTop: "10%" }}
            ref={(img) => lazyImagesRef.current.push(img)}
            src="images/diseaseimg.png"
            data-src="images/diseaseimg.png"
            alt="kid"
            className="features__img lazy-img"
          />
          <div style={{ marginTop: "10%" }} className="features__feature">
            <div className="features__icon"></div>
            <h5 className="features__header">
              <b>Diseases</b>
            </h5>
            <p style={{ textAlign: "justify" }}>
              Diseases encompass a wide range of health conditions that
              negatively affect the normal functioning of the body. They can be
              caused by various factors such as pathogens genetic mutations,
              environmental factors, lifestyle choices, and underlying medical
              conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="section--3">
        <div className="section__title section__title--testimonials">
          <h2 className="section__description">Want to know more?</h2>
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
                src="images/letsVaccinate.jpg"
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
                To schedule an vaccine appointment you have to login to the
                website and then ypu will get a form where you can schedule for
                vaccine
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
                Children who are not vaccinated are at a higher risk of
                contracting vaccine-preventable diseases such as measles, mumps,
                rubella, pertussis (whooping cough), polio, and influenza. These
                diseases can cause severe illness, complications.
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
