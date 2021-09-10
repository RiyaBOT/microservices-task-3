const uri = 'https://jsonplaceholder.typicode.com/users';


  /* need to use onload function */
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");
  
  formData.append('#id', fileField.files[0]);
  formData.append('name', fileField.files[1]);
  formData.append('username', fileField.files[2]);
  formData.append('email', fileField.files[3]);

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'PUT',
    body: formData
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', JSON.stringify(response)))