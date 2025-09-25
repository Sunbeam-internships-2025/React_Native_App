// testLogin.js
// const axios = require('axios');

// axios.post('http://10.0.2.2:1111/student/login', {
//   email: 'test@example.com',
//   password: '123456',
// })
// .then(res => console.log(res.data))
// .catch(err => console.log(err.message));



import axios from 'axios';

axios.post('http://localhost:1111/student/login', {
  email: 'harsh@gmail.com',
  password: 'h5',
})
.then(res => console.log('Success:', res.data))
.catch(err => console.error('Error:', err.message));
