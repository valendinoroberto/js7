document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#name');
    const temp = document.querySelector('.temp');
    const desc = document.querySelector('.desc');
    const clouds = document.querySelector('.clouds');
    const button = document.querySelector('#submitButton');
    const button1 = document.querySelector('#submitPostButton');
  
    // GET request event listener
    button.addEventListener('click', () => {
      fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.length > 0) {
            const book = data[0];
            main.textContent = book.title;
            temp.textContent = `Price: ${book.price}`;
            desc.textContent = `Genre: ${book.genreName}`;
            clouds.textContent = `Is Out: ${book.isOut}`;
          }
        })
        .catch(err => {
          console.error(err);
          alert("GET request failed");
        });
    });
  
    // POST request payload
    const post = {
      "id": 4,
      "title": "prova",
      "price": 24,
      "isOut": true,
      "isbn": "asdasdasdasdasd",
      "genreId": 1,
      "shelfId": 1,
      "genreName": "string"
    };
  
    // POST request options
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    };
  
    // POST request event listener
    button1.addEventListener('click', () => {
      fetch('https://librarymanagementpw.azurewebsites.net/api/Book', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('POST request successful:', data);
        })
        .catch(error => {
          console.error('POST request failed:', error);
          alert("POST request failed");
        });
    });
  });
  