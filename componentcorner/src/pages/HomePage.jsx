import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <section id="home">
        <Hero
          title="Upgrade Your Setup"
          subtitle="Discover quality tech products designed to make your everyday life better."
          buttonText="Shop Products"
        />
      </section>

      <section className="about-section" id="about">
        <h2>Why ComponentCorner?</h2>
        <p>
          We make it easy to find useful technology without making the
          shopping experience complicated. Our goal is to offer quality
          products at prices that make sense.
        </p>
      </section>
    </>
  );
}

export default HomePage;