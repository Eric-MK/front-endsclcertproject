<template>
  <div class="login-page min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-3xl mb-8 font-bold text-indigo-100 text-center">
      Log In to SpursMatchUp
    </h1>
    <form class="bg-black rounded-lg shadow-md p-8 max-w-md w-full" @submit.prevent="loginUser">
      <div class="mb-4">
        <label class="block text-blue-900 font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="email"
          :class="{ 'border-red-500': errors.email }"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <p v-if="errors.email" class="text-red-500 text-xs italic">
          {{ errors.email[0] }}
        </p>
      </div>
      <div class="mb-6">
        <label class="block text-blue-900 font-bold mb-2" for="password">
          Password
        </label>
        <input
          v-model="password"
          :class="{ 'border-red-500': errors.password }"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <p v-if="errors.password" class="text-red-500 text-xs italic">
          {{ errors.password[0] }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Log In
        </button>
        <router-link
          to="/register"
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Not a member yet? Register now.
        </router-link>
      </div>
    </form>
  </div>
</template>


<style>
.login-page {
background-image: url('/home2.jpg'); 
/*  background-size: ; 
 */  background-position: center;
  background-attachment: fixed;
} 



</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: {},
    };
  },
  methods: {
    loginUser() {
  axios
    .post("http://127.0.0.1:8000/api/login", {
      email: this.email,
      password: this.password,
    })
    .then((response) => {
      console.log(response); // Add this line to check the response structure
      localStorage.setItem("user_id", response.data.user_id); // Update the property name to "user_id"
      this.$router.push("/home");
    
    
    })
    .catch((error) => {
      // Handle login errors
      if (error.response && error.response.data) {
        this.errors = error.response.data;
      } else {
        this.errors = { message: "An error occurred" };
      }
      alert(this.errors.message);

    });
},

  },
};
</script>
