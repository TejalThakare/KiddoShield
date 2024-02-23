import "../../styles/vaccinationInfoByAge.css";
export default function OneToTwoMonth() {
  return (
    <>
      <div>
        <h2 className="schedule-header">Vaccines at 1 to 2 Months</h2>
        <img className="vac-img" src="/images/2month.jpg" />

        <h5 className="description">Vaccines your baby should get</h5>
        {/* <p className="desc-para">
          At the age of 1-2 months, infants usually receive vaccinations to
          protect against several diseases, including:
        </p> */}
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
                DTaP (Diphtheria, Tetanus, Pertussis) : 1st dose
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                A DTaP vaccine is the best protection from three serious
                diseases: diphtheria, tetanus, and whooping cough (pertussis).
                All three of these diseases can be deadly for people of any age,
                and whooping cough is especially dangerous for babies.
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
                Haemophilus influenzae type b disease : 1st dose
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
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                id="accordian-button"
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Hepatitis B
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Hepatitis B is an infectious and potentially serious disease
                that can cause liver damage and liver cancer. If babies are
                infected at birth, hepatitis B can be a lifelong, chronic
                infection. There is no cure for hepatitis B, but the hepatitis B
                vaccine is the best way to prevent it.
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
                Pneumococcal vaccine (PCV) : 1st dose
              </button>
            </h2>
            <div
              id="flush-collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingfour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                This vaccine protects against pneumococcal bacteria, which can
                cause pneumonia, meningitis, and other infections.
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
                Polio vaccine : 1st dose
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
                Rotavirus : 1st dose
              </button>
            </h2>
            <div
              id="flush-collapsesix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingsix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                This vaccine protects against rotavirus, a common cause of
                severe diarrhea and dehydration in infants and young children.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
