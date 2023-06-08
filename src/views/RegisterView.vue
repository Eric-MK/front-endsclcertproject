<template>
  <body>
    
 
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-4 text-indigo-100 mt-10">Registration :</h2>

      <form @submit.prevent="registerUser" class="bg-slate-900	rounded-lg shadow-md p-8 max-w-md mx-auto w-full" >
        <div class="mb-4">
          <label for="name" class="text-lg font-medium text-blue-900">Name:</label>
          <input type="text" id="name" v-model="formData.name" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
        </div>
        <div class="mb-4">
          <label for="email" class="text-lg font-medium text-blue-900">Email:</label>
          <input type="email" id="email" v-model="formData.email" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
        </div>
        <div class="mb-4">
          <label for="password" class="text-lg font-medium text-blue-900 ">Password:</label>
          <input type="password" id="password" v-model="formData.password" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
        </div>
        <div class="mb-4">
          <label for="password_confirmation" class="text-lg font-medium text-blue-900">Confirm Password:</label>
          <input type="password" id="password_confirmation" v-model="formData.password_confirmation" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
        </div>
        <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Register</button>
      </form>
    </div>
  </body>
  </template>
  

  <style>
body{
background-image: url('/home2.jpg');  
/*  background-size: ; 
 */  background-position: center;
  background-attachment: fixed;
} 

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
  <script>

import axios from 'axios';

  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          profile_image: null,
        },
      };
    },
    methods: {
      onFileChange(event) {
        this.formData.profile_image = event.target.files[0];
      },
      registerUser() {
        const formData = new FormData();
        formData.append('name', this.formData.name);
        formData.append('email', this.formData.email);
        formData.append('password', this.formData.password);
        formData.append('password_confirmation', this.formData.password_confirmation);
        formData.append('profile_image', this.formData.profile_image);
  
        axios.post('http://127.0.0.1:8000/api/register', formData)
          .then(() => {
            // Registration successful, redirect to the login page
            this.$router.push('/login');
          })
          .catch(error => {

        /*     if (error.response && error.response.status === 422) {
    // Validation errors occurred
    console.log(error.response.data);
  } else {
    console.error(error);
    // Handle other errors
  }
  alert('An error occurred. Please try again.');

}); */
            if (error.response && error.response.status === 422) {
              // Validation errors occurred
              const errors = error.response.data.errors;
              let errorMessage = 'Validation errors occurred:\n';

              for (let key in errors) {
                errorMessage += `- ${errors[key][0]}\n`;
              }

              // Show validation error popup
              alert(errorMessage);
  } else {
    console.error(error);
    // Handle other errors
  }

});

      },
    },
  };
  </script>
  