export default function SevenToTenYear() {
  return (
    <>
      <div>
        <h2 className="schedule-header">Vaccines at 7-10 Years</h2>
        <img className="vac-img" src="/images/10years.jpg" />
        <h5 className="description">Vaccines your child should get</h5>
        <p className="desc-para">
          Growing up means more school days and playdates, which also means more
          opportunities for spreading germs and getting sick. As your child
          enters school age and interacts with more kids, help protect them from
          diseases by staying up to date on vaccinations.
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
        </div>
      </div>
    </>
  );
}
