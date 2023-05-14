<template>
  <div class="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-5xl mb-8 font-bold text-gray-700">Welcome to SpursMatchUp</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="goToLogin">Log In</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      // Use Vue Router to navigate to the login page
      this.$router.push('/login');
    }
  }
}
</script>
