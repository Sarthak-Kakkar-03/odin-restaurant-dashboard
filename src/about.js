const loadAbout = () => {
    const content = document.getElementById("content");
    content.textContent = ""; 

    const heading = document.createElement("h1");
    const aboutSection = document.createElement("div");
    const aboutText = document.createElement("p");
    const teamHeading = document.createElement("h2");
    const teamList = document.createElement("ul");

    heading.textContent = "About Us";
    aboutText.textContent = "At Ember & Oak, our story begins with a passion for locally sourced food, a love for community, and a dedication to warmth and hospitality.";

    teamHeading.textContent = "Our Team";
    teamList.appendChild(createTeamMember("Chef Aria", "Executive Chef & Co-founder"));
    teamList.appendChild(createTeamMember("Liam Bennett", "Sommelier and Partner"));

    aboutSection.appendChild(aboutText);
    aboutSection.appendChild(teamHeading);
    aboutSection.appendChild(teamList);

    content.appendChild(heading);
    content.appendChild(aboutSection);
};

const createTeamMember = (name, role) => {
    const listItem = document.createElement("li");
    const nameEl = document.createElement("h3");
    const roleEl = document.createElement("p");

    nameEl.textContent = name;
    roleEl.textContent = role;

    listItem.appendChild(nameEl);
    listItem.appendChild(roleEl);
    return listItem;
};

export default loadAbout;
