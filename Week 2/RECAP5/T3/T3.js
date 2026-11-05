'use strict';

const fakeURL = "https://reqres.in/api/unknown/23";

async function errorHandling() {
  try {
    const response = await fetch(fakeURL, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    })
    //have to throw an error for a 404 because the fetch request doesn't see it as an error
    if (!response.ok) {
      throw new Error('Not found!')
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`An error was encountered: ${error.message}`);
  }
}

errorHandling();
