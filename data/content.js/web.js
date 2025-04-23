// Function to render hero section
function renderHero(hero) {
  const template = document.querySelector("#hero-template").content.cloneNode(true);
  template.querySelector("h1").textContent = hero.title;
  template.querySelector("p").textContent = hero.description;

  const buttons = template.querySelectorAll("button");
  buttons[0].textContent = hero.buttons[0].text;
  buttons[1].textContent = hero.buttons[1].text;
  buttons[1].classList.add(hero.buttons[1].className);

  document.querySelector("main").appendChild(template);
}

// Function to render featured products
function renderFeaturedProducts(featured) {
  const template = document.querySelector("#featured-products-template").content.cloneNode(true);
  template.querySelector("h2").textContent = featured.title;

  const productGrid = template.querySelector(".product-grid");
  productGrid.innerHTML = "";  // Clear existing products

  featured.products.forEach(product => {
    const productTemplate = document.createElement("div");
    productTemplate.classList.add("product", "col-4");
    productTemplate.innerHTML = `
      <img src="${product.image}" alt="${product.alt}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button>${product.buttonText}</button>
    `;
    productGrid.appendChild(productTemplate);
  });

  document.querySelector("main").appendChild(template);
}

// Function to render features
function renderFeatures(features) {
  const template = document.querySelector("#features-template").content.cloneNode(true);
  template.querySelector("h2").textContent = features.title;

  const featureGrid = template.querySelector(".feature-grid");
  featureGrid.innerHTML = "";  // Clear existing features

  features.features.forEach(feature => {
    const featureTemplate = document.createElement("div");
    featureTemplate.classList.add("feature", "col-4");
    featureTemplate.innerHTML = `
      <img src="${feature.image}" alt="${feature.alt}">
      <p>${feature.description}</p>
    `;
    featureGrid.appendChild(featureTemplate);
  });

  document.querySelector("main").appendChild(template);
}

// Function to render CTA section
function renderCTA(cta) {
  const template = document.querySelector("#cta-template").content.cloneNode(true);
  template.querySelector("h2").textContent = cta.title;
  template.querySelector("p").textContent = cta.description;
  template.querySelector("img").src = cta.image;
  template.querySelector("img").alt = cta.alt;
  template.querySelector("button").textContent = cta.buttonText;

  document.querySelector("main").appendChild(template);
}

// Function to render testimonials
function renderTestimonials(testimonials) {
  const template = document.querySelector("#testimonials-template").content.cloneNode(true);
  template.querySelector("h2").textContent = testimonials.title;

  const testimonialGrid = template.querySelector(".testimonial-grid");
  testimonialGrid.innerHTML = "";  // Clear existing testimonials

  testimonials.testimonials.forEach(testimonial => {
    const testimonialTemplate = document.createElement("div");
    testimonialTemplate.classList.add("testimonial", "col-6");
    testimonialTemplate.innerHTML = `
      <p>${testimonial.text}</p>
      <p class="author">${testimonial.author}</p>
    `;
    testimonialGrid.appendChild(testimonialTemplate);
  });

  document.querySelector("main").appendChild(template);
}

// Render all sections
renderHero(data.hero);
renderFeaturedProducts(data.featuredProducts);
renderFeatures(data.features);
renderCTA(data.cta);
renderTestimonials(data.testimonials);
