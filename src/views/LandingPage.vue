
<template>
  <div class="landing-page min-h-screen flex flex-col justify-center items-center bg-white">
    <h1 class="text-5xl mb-8 font-bold text-white">Welcome to <span style="font-style: oblique;">SpursMatchUp</span></h1>
    <p class="text-xl mb-4 text-white-600">Get ready to experience the thrill of the Champions League final!</p>
    <p class="text-lg mb-4 text-white">Join the thousands of passionate Tottenham Hotspur and Arsenal fans from around the world who will be tuning in to watch this historic match.</p>
    <p class="text-lg mb-4 text-white">But don't just watch from the sidelines – be a part of the action and purchase your tickets today!</p>
    <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="goToLogin">Sign In</button>
  </div>
</template>



<style>
.landing-page {
background-image: url('/home2.jpg'); 
/*  background-size: ;  */
  background-position: center;
  background-attachment: fixed;
}  
span{
  color: #000080	;
}
 

</style>  

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
