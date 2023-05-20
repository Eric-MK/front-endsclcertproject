<template>
  <div class="login-page min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-3xl mb-8 font-bold text-gray-700 text-center">
      Log In to SpursMatchUp
    </h1>
    <form
      class="bg-white rounded-lg shadow-md p-8 max-w-md w-full"
      @submit.prevent="loginUser"
    >
      <!-- Input fields and error handling -->

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Handle successful login
          const user = response.data.user;
          // Save the user ID to use for populating the profile page
          localStorage.setItem("user_id", user.id);
          this.$router.push("/home");
        })
        .catch((error) => {
          // Handle login errors
          this.errors = error.response.data;
        });
    },
  },
};
</script>
<template>
  <div class="login-page min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-3xl mb-8 font-bold text-gray-700 text-center">
      Log In to SpursMatchUp
    </h1>
    <form
      class="bg-white rounded-lg shadow-md p-8 max-w-md w-full"
      @submit.prevent="loginUser"
    >
      <!-- Input fields and error handling -->

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Handle successful login
          const user = response.data.user;
          // Save the user ID to use for populating the profile page
          localStorage.setItem("user_id", user.id);
          this.$router.push("/home");
        })
        .catch((error) => {
          // Handle login errors
          this.errors = error.response.data;
        });
    },
  },
};
</script>
