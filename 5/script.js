// Base URL
/const apiUrl = "https://opentdb.com/api.php?amount=1";

// Function to make a GET request
function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem:", error);
    });
}

fetchData(apiUrl);

// Function to make a POST request
function postData(url, data) {
  fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error))
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
