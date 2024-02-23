export default function ElevenToTwelveYear() {
  return (
    <>
      <div>
        <h2 className="schedule-header">Vaccines at 11-12 Years</h2>
        <img className="vac-img" src="/images/12years.jpg" />
        <h5 className="description">Vaccines your child should get</h5>
        <p className="desc-para">
          Although your 11 or 12-year-old is getting closer to their teen years,
          they are still dependent on you. Help them stay healthy by keeping
          them up to date with the recommended vaccines.
        </p>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                id="accordian-button"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Human Papillomavirus (HPV)
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Human papillomavirus (HPV) is a common virus that can cause
                several cancers in men and women. Although typically given to
                children ages 11-12 years, the HPV vaccine can be given as early
                as 9 years old to help protect them against cancers caused by
                HPV infection. For best protection, most children this age will
                need two shots of the HPV vaccine, 6-12 months apart.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingsix">
              <button
                id="accordian-button"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsesix"
                aria-expanded="false"
                aria-controls="flush-collapsesix"
              >
                Influenza
              </button>
            </h2>
            <div
              id="flush-collapsesix"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingsix"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Flu is a respiratory illness caused by influenza viruses. Flu
                spreads easily and can cause serious illness, especially in
                children younger than 5 years and children of any age with
                certain chronic conditions including asthma. Everyone 6 months
                of age and older should get a flu vaccine every year ideally by
                the end of October.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingseven">
              <button
                id="accordian-button"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseseven"
                aria-expanded="false"
                aria-controls="flush-collapseseven"
              >
                Meningococcal Vaccination : 1st dose
              </button>
            </h2>
            <div
              id="flush-collapseseven"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingseven"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Meningococcal disease can refer to any illness caused by a type
                of bacteria called Neisseria meningitidis. These bacteria can
                cause meningococcal meningitis or bloodstream infections, which
                can be serious, even deadly. The meningococcal vaccine called
                MenACWY helps protect against four types of the bacteria that
                causes meningococcal disease (serogroups A, C, W, and Y).
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingeight">
              <button
                id="accordian-button"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseeight"
                aria-expanded="false"
                aria-controls="flush-collapseeight"
              >
                Diphtheria, Tetanus, and Whooping Cough Vaccination
              </button>
            </h2>
            <div
              id="flush-collapseeight"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingeight"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                A Tdap booster shot protects older children from three serious
                diseases—diphtheria, tetanus, and whooping cough (pertussis).
                While people of any age in the United States can get all three
                of these potentially deadly diseases, whooping cough is most
                common. Preteens and teens who get whooping cough may cough for
                10 weeks or more, possibly leading to rib fractures from severe
                coughing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
