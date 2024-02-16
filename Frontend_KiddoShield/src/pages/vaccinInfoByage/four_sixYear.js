export default function FourToSixYear() {
  return (
    <>
      <div>
        <h2 className="schedule-header">Vaccines at 4-6 Years</h2>
        <img className="vac-img" src="/images/6years.jpg" />
        <h5 className="description">Vaccines your baby should get</h5>
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
                Chickenpox : 2nd dose
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Chickenpox is a very contagious disease known for its itchy,
                blister-like rash and a fever. Chickenpox is a mild disease for
                many, but can be serious, even life-threatening, especially in
                babies, teenagers, pregnant women, and people with weakened
                immune systems.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                id="accordian-button"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                DTaP (Diphtheria, Tetanus, Pertussis) : 5th dose
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                A DTaP vaccine is the best protection from three serious
                diseases: diphtheria, tetanus, and whooping cough (pertussis).
                All three of these diseases can be deadly for people of any age,
                and whooping cough is especially dangerous for babies.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingfive">
              <button
                id="accordian-button"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefive"
                aria-expanded="false"
                aria-controls="flush-collapsefive"
              >
                Polio vaccine : 4th dose
              </button>
            </h2>
            <div
              id="flush-collapsefive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingfive"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Polio is a disabling and life-threatening disease caused by
                poliovirus, which can infect the spinal cord and cause
                paralysis. It most often sickens children younger than 5 years
                old. Polio was eliminated in the United States with vaccination,
                and continued use of polio vaccine has kept this country
                polio-free.
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
            <h2 class="accordion-header" id="flush-headingnine">
              <button
                id="accordian-button"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsenine"
                aria-expanded="false"
                aria-controls="flush-collapsenine"
              >
                Measles, Mumps, and Rubella (MMR) : 2nd dose
              </button>
            </h2>
            <div
              id="flush-collapsenine"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingnine"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                The MMR vaccine helps prevent three diseases: measles, mumps,
                and rubella (German measles). These diseases are contagious and
                can be serious.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
