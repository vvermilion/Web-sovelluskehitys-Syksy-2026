'use strict';

const getURL = 'https://reqres.in/api/users/1';

async function fetchData() {
  try {
    const response = await fetch(getURL, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
