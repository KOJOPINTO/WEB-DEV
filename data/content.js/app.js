// Select the container where content will be rendered
const app = document.getElementById("app");

// Helper function to create elements
const createElement = (tag, className = "", content = "") => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
};

// Render Hero Section
const renderHero = () => {
  const hero = data.hero;

  const heroSection = createElement("section", "hero");
  const title = createElement("h1", "", hero.title);
  const desc = createElement("p", "", hero.description);

  heroSection.appendChild(title);
  heroSection.appendChild(desc);

  hero.buttons.forEach((btn) => {
    const button = createElement("button", btn.className || "", btn.text);
    heroSection.appendChild(button);
  });

  app.appendChild(heroSection);
};

// Render Featured Products Section
const renderFeaturedProducts = () => {
  const section = createElement("section", "featured-products");
  const title = createElement("h2", "", data.featuredProducts.title);
  section.appendChild(title);

  data.featuredProducts.products.forEach((product) => {
    const productCard = createElement("div", "product-card");

    const img = createElement("img");
    img.src = product.image;
    img.alt = product.alt;

    const name = createElement("h3", "", product.name);
    const price = createElement("p", "price", product.price);
    const button = createElement("button", "", product.buttonText);

    productCard.append(img, name, price, button);
    section.appendChild(productCard);
  });

  app.appendChild(section);
};

// Render Features Section
const renderFeatures = () => {
  const section = createElement("section", "features");
  const title = createElement("h2", "", data.features.title);
  section.appendChild(title);

  data.features.features.forEach((feature) => {
    const featureDiv = createElement("div", "feature");

    const img = createElement("img");
    img.src = feature.image;
    img.alt = feature.alt;

    const desc = createElement("p", "", feature.description);

    featureDiv.append(img, desc);
    section.appendChild(featureDiv);
  });

  app.appendChild(section);
};

// Render CTA Section
const renderCTA = () => {
  const section = createElement("section", "cta");
  const title = createElement("h2", "", data.cta.title);
  const desc = createElement("p", "", data.cta.description);

  const img = createElement("img");
  img.src = data.cta.image;
  img.alt = data.cta.alt;

  const button = createElement("button", "", data.cta.buttonText);

  section.append(title, desc, img, button);
  app.appendChild(section);
};

// Render Testimonials Section
const renderTestimonials = () => {
  const section = createElement("section", "testimonials");
  const title = createElement("h2", "", data.testimonials.title);
  section.appendChild(title);

  data.testimonials.testimonials.forEach((testimonial) => {
    const blockquote = createElement("blockquote", "", testimonial.text);
    const author = createElement("cite", "", testimonial.author);

    section.appendChild(blockquote);
    section.appendChild(author);
  });

  app.appendChild(section);
};

// Main function to render all sections
const renderWebsite = () => {
  renderHero();
  renderFeaturedProducts();
  renderFeatures();
  renderCTA();
  renderTestimonials();
};

// Execute the render function after the DOM is loaded
document.addEventListener("DOMContentLoaded", renderWebsite);
