const uri = 'https://jsonplaceholder.typicode.com/users';
arr=[]
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))

arr= data