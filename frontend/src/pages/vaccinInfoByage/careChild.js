export default function careChild() {
  return (
    <>
      <div>
        <h2
          className="care-section-header"
          style={{ marginTop: "4%", marginLeft: "9%", color: "#5ec576" }}
        >
          <b> Care for your child after vaccinations</b>
        </h2>

        <p
          className="desc-para"
          style={{ fontSize: "15px", color: "black", marginRight: "7%" }}
        >
          <b style={{ fontSize: "18px", color: "#008fb3" }}>
            Monitor for Common Side Effects:
          </b>
          <p style={{ textAlign: "justify" }}>
            Some common side effects after vaccinations include soreness or
            redness at the injection site, mild fever, fussiness, and fatigue.
            Keep an eye on your child for these symptoms.{" "}
          </p>
          <b style={{ fontSize: "18px", color: "#008fb3" }}>
            {" "}
            Provide Comfort:
          </b>{" "}
          <p style={{ textAlign: "justify" }}>
            Offer comfort to your child if they are experiencing any discomfort.
            This may include cuddling, breastfeeding or bottle feeding (for
            infants), or offering a favorite toy or blanket.
          </p>
          <b style={{ fontSize: "18px", color: "#008fb3" }}>
            Administer Pain Relief:
          </b>{" "}
          <p style={{ textAlign: "justify" }}>
            If your child is experiencing discomfort or fever, you can give them
            a suitable pain reliever or fever reducer, such as acetaminophen
            (e.g., Tylenol) or ibuprofen (e.g., Advil). Follow the dosing
            instructions based on your child's age and weight, and consult with
            your pediatrician if you're unsure.{" "}
          </p>
          <b style={{ fontSize: "18px", color: "#008fb3" }}> Keep Hydrated:</b>{" "}
          <p style={{ textAlign: "justify" }}>
            Make sure your child stays hydrated by offering plenty of fluids,
            such as water, breast milk, formula, or age-appropriate beverages.
            Hydration can help alleviate symptoms and maintain overall
            well-being.
          </p>
          <b style={{ fontSize: "18px", color: "#008fb3" }}> Rest:</b>
          <p style={{ textAlign: "justify" }}>
            Allow your child to rest as needed. After vaccinations, some
            children may be more tired than usual, so it's essential to provide
            opportunities for rest and quiet activities.
          </p>
        </p>
      </div>
    </>
  );
}
