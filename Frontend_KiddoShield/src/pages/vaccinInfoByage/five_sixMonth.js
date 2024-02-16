export default function FiveToSixMonths() {
  return (
    <>
      <div>
        <h2 className="schedule-header">Vaccines at 5 to 6 Months</h2>
        <img className="vac-img" src="/images/6month.jpg" />
        <h5 className="description">Vaccines your baby should get</h5>
        <p className="desc-para">
          At 6 months old, your baby is ready for another round of vaccines,
          including their first flu shot. As your little one continues to grow
          and develop, help protect them from these potentially serious
          diseases.
        </p>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                id="accordian-button"
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                DTaP (Diphtheria, Tetanus, Pertussis) : 3rd dose
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                This vaccine protects against diphtheria, tetanus, and pertussis
                (whooping cough).
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                id="accordian-button"
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Haemophilus influenzae type b disease : 3rd dose
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Hib disease is a serious illness caused by the bacteria
                Haemophilus influenzae type b (Hib). Babies and children younger
                than 5 years old are most at risk for Hib disease. It can cause
                lifelong disability and be deadly. Doctors recommend that your
                child get three or four doses of the Hib vaccine (depending on
                the brand).
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingfour">
              <button
                id="accordian-button"
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefour"
                aria-expanded="false"
                aria-controls="flush-collapsefour"
              >
                Pneumococcal vaccine (PCV) : 3rd dose
              </button>
            </h2>
            <div
              id="flush-collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingfour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Pneumococcal disease can cause potentially serious and even
                deadly infections. The pneumococcal conjugate vaccine protects
                against the bacteria that cause pneumococcal disease.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingfive">
              <button
                id="accordian-button"
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefive"
                aria-expanded="false"
                aria-controls="flush-collapsefive"
              >
                Polio vaccine : 3rd dose
              </button>
            </h2>
            <div
              id="flush-collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingfive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Polio is a disabling and life-threatening disease caused by
                poliovirus, which can infect the spinal cord and cause
                paralysis. It most often sickens children younger than 5 years
                old. Polio was eliminated in the United States with vaccination,
                and continued use of polio vaccine has kept this country
                polio-free.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingsix">
              <button
                id="accordian-button"
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsesix"
                aria-expanded="false"
                aria-controls="flush-collapsesix"
              >
                Rotavirus : 3rd dose
              </button>
            </h2>
            <div
              id="flush-collapsesix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingsix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Rotavirus can be very dangerous, even deadly for babies and
                young children. Doctors recommend that your child get two or
                three doses of the Rotavirus vaccine (depending on the brand).
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingseven">
              <button
                id="accordian-button"
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseseven"
                aria-expanded="false"
                aria-controls="flush-collapseseven"
              >
                Influenza (Flu): Yearly
              </button>
            </h2>
            <div
              id="flush-collapseseven"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingseven"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Flu is a respiratory illness caused by influenza viruses. Flu
                spreads easily and can cause serious illness, especially in
                children younger than 5 years and children of any age with
                certain chronic conditions including asthma. Everyone 6 months
                of age and older should get a flu vaccine every year ideally by
                the end of October.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
