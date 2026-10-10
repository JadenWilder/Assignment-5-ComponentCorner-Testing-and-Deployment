import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <section id="home">
        <Hero
          title="Fresh Fits. Classic Kicks."
          subtitle="Shop fitted hats, snapbacks, and sneakers that bring your everyday style together without breaking the bank."
          buttonText="Shop Collection"
        />
      </section>

      <section className="about-section" id="about">
        <h2>Welcome to ComponentCorner</h2>
        <p>
          We believe looking good should not have to cost too much. From
          classic fitted hats and adjustable snapbacks to everyday sneakers,
          our collection brings together style, comfort, and prices that
          make sense. Whether you are putting together a fresh outfit or
          looking for your next favorite pair of shoes, ComponentCorner
          makes shopping simple and affordable.
        </p>
      </section>
    </>
  );
}

export default HomePage;