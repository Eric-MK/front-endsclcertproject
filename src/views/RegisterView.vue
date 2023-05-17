<template>
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-4">Registration</h2>
      <form @submit.prevent="registerUser" class="max-w-sm mx-auto">
        <div class="mb-4">
          <label for="name" class="text-sm font-medium">Name:</label>
          <input type="text" id="name" v-model="formData.name" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
        </div>
        <div class="mb-4">
          <label for="email" class="text-sm font-medium">Email:</label>
          <input type="email" id="email" v-model="formData.email" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
        </div>
        <div class="mb-4">
          <label for="password" class="text-sm font-medium">Password:</label>
          <input type="password" id="password" v-model="formData.password" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
        </div>
        <div class="mb-4">
          <label for="password_confirmation" class="text-sm font-medium">Confirm Password:</label>
          <input type="password" id="password_confirmation" v-model="formData.password_confirmation" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
        </div>
        <div class="mb-4">
          <label for="profile_image" class="text-sm font-medium">Profile Image:</label>
          <input type="file" id="profile_image" @change="onFileChange" accept="image/*" class="mt-1" />
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Register</button>
      </form>
    </div>
  </template>
  
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
  if (error.response && error.response.status === 422) {
    // Validation errors occurred
    console.log(error.response.data);
  } else {
    console.error(error);
    // Handle other errors
  }
});

      },
    },
  };
  </script>
  