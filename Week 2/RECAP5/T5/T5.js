const baseURL = "https://media2.edu.metropolia.fi/restaurant";

const restaurantList = [];

async function getRestaurants() {
  try {
    const response = await fetch(`${baseURL}/api/v1/restaurants`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    restaurantList.push(...data);
    initializeRestaurants();
  } catch (error) {
    console.error("Failed to fetch.", error.message);
  }
}

async function getDailyMenu(id) {
  try {
    const response = await fetch(`${baseURL}/api/v1/restaurants/daily/${id}/fi`);
    if (!response.ok) {
      throw new Error(`Èrror: ${response.status}`);
    }
    const menuData = await response.json();
    return menuData;
  } catch (error) {
    console.error('Failed to fetch.', error.message);
    return null;
  }
}
// modal window components
const modalWindow = document.querySelector("dialog");
const modalName = document.querySelector("#name");
const modalAddress = document.querySelector("#address");
const modalPostalCode = document.querySelector("#postalcode");
const modalCity = document.querySelector("#city");
const modalPhonenum = document.querySelector("#phonenum");
const modalCompany = document.querySelector("#company");
const modalDailyMenu = document.querySelector("#dailymenu");
const modalButton = document.querySelector("#closebtn");

//close button
modalButton.addEventListener("click", () => {
  modalWindow.close();
});


// get the table
function createTable() {
  const table = document.querySelector("table");
  table.innerHTML = '';
  // looping for every restaurant, making a row and two cells and attaching them
  restaurantList.forEach((restaurant) => {
    let newRow = document.createElement("tr");
    let nameCell = document.createElement("td");
    nameCell.textContent = `${restaurant.name}`;
    let addressCell = document.createElement("td");
    addressCell.textContent = `${restaurant.address}`;
    newRow.appendChild(nameCell);
    newRow.appendChild(addressCell);
    table.appendChild(newRow);

    //highlight for restaurant name
    nameCell.addEventListener("click", async () => {
      const allRows = document.querySelectorAll("tr");
      allRows.forEach((row) => {
        row.classList.remove("highlight");
      });
        newRow.classList.add("highlight");

      //add info to modal
      const menu = getDailyMenu(restaurant._id);

      modalName.textContent = `Name: ${restaurant.name}`;
      modalAddress.textContent = `Address: ${restaurant.address}`;
      modalCity.textContent = `City: ${restaurant.city}`;
      modalCompany.textContent = `Company: ${restaurant.company}`;
      modalPhonenum.textContent = `Phone number: ${restaurant.phone}`;
      modalPostalCode.textContent = `Postal code: ${restaurant.postalCode}`;
      modalDailyMenu.innerHTML = menu
      modalWindow.showModal();



      if (menu && menu.courses && menu.courses.length > 0) {
        let menuHtml = "";
        menu.courses.forEach((course) => {
          menuHtml += `<li><strong>${course.name}</strong>: ${course.price || ""} (${course.diets || ""})</li>`;
        });
        modalDailyMenu.innerHTML = menuHtml;
      } else {
        modalDailyMenu.innerHTML = "<p>No menu available for today.</p>";
      }
    });
  });
}


function initializeRestaurants() {
  console.log(`Number of restaurants loaded: `, restaurantList.length);
  restaurantList.sort((a, b) => a.name.localeCompare(b.name));
  createTable();
}
getRestaurants();
