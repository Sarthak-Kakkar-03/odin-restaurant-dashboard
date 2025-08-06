
const loadMenu = () => {
    const content = document.getElementById("content");
    content.textContent = ""

    const heading = document.createElement('h1');
    const listHolder = document.createElement("div");
    const beverageListHeading = document.createElement("h2");
    const foodListHeading = document.createElement("h2");
    const beverageList = document.createElement("ul");
    const foodList = document.createElement("ul");

    beverageList.appendChild(createListItem('Mojito', 'A minty drink'));
    beverageList.appendChild(createListItem("Water", "Plain water"));

    foodList.appendChild(createListItem("Chicken", "Grilled to perfection"));
    foodList.appendChild(createListItem("Beef", "Roasted to perfection"));

    heading.textContent = "Menu";
    beverageListHeading.textContent = "Beverages";
    foodListHeading.textContent = "Food";

    content.appendChild(heading);
    content.appendChild(beverageListHeading);
    listHolder.appendChild(beverageList);
    content.appendChild(foodListHeading);
    listHolder.appendChild(foodList)
    content.appendChild(listHolder);
}

const createListItem = (name, description) => {
    const listItem = document.createElement('li');
    const holderDiv = document.createElement('div');
    const itemName = document.createElement('h3');
    const itemDescription = document.createElement('p');
    itemName.textContent = name;
    itemDescription.textContent = description;
    holderDiv.appendChild(itemName);
    holderDiv.appendChild(itemDescription);
    listItem.appendChild(holderDiv);
    return listItem
}

export default loadMenu;