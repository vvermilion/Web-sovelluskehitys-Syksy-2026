"use strict";

const myURL = "https://reqres.in/api/users";

async function postData() {
  try {
    const response = await fetch(myURL, {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        id: 12345,
        first_name:'Jane',
        last_name:'Doe',
        email:'janedoe@email.com'
      }),
    });

    const data = await response.json();
    console.log('Success, posted data: ', data.id, data.first_name, data.last_name, data.email);
  } catch (error) {
    console.error('Error, could not post');
  }
}

postData();
