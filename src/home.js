import restaurantImg from "../assets/chris-g-3HC5qpBEdrQ-unsplash.jpg"


const loadHome = () => {
    const content = document.getElementById("content");
    content.textContent = "";

    const heading = document.createElement("h1");
    const img = document.createElement("img");
    const para = document.createElement("p");

    heading.textContent = "Welcome to Ember & Oak";
    img.src = restaurantImg;
    img.alt = "Restaurant image"
    para.textContent = "Nestled in the heart of the city, Ember & Oak is where rustic charm meets modern flavor. Our chefs craft each dish with locally sourced ingredients, bringing you comfort food with a twist. Whether you're here for a cozy dinner, a celebratory evening, or just a glass of wine and good company, Ember & Oak welcomes you like family."
    content.appendChild(heading);
    content.appendChild(img);
    content.appendChild(para);

};

export default loadHome;