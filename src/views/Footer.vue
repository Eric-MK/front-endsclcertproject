<template>
  <footer class="bg-gray-900 text-white py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 class="text-lg font-bold mb-4">About Us</h4>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida odio vel cursus suscipit.</p>
          <div class="social-icons mt-4">
            <a href="#" class="mr-2"><i class="fab fa-facebook text-white"></i></a>
            <a href="#" class="mr-2"><i class="fab fa-twitter text-white"></i></a>
            <a href="#" class="mr-2"><i class="fab fa-instagram text-white"></i></a>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-4">Contact Us</h4>
          <ul class="contacts text-sm">
            <li><strong>Phone:</strong> awesrfyguhjop</li>
            <li><strong>Email:</strong> asdfguijopk[l]</li>
            <li><strong>Address:</strong> 123 Main Street, City</li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-4">Quick Links</h4>
          <ul class="quick text-sm">
            <li><router-link to="/home">Home</router-link></li>
            <li><a href="#" class="text-white">Services</a></li>
            <li><router-link to="/ticket">Tickets</router-link></li>
            <li><router-link to="/profile-page">Profile</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


<style>

.contacts{

display: block;

}

.quick{
  display: block;

}

</style>
  
 
  <script>
  export default {
    name: 'MyFooter',
  }
  </script>