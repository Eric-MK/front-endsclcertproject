<template>
<MyNavigation/>
    <div class="service-page">
      <h1>Our Services</h1>
      
      <div class="service">
        <h2>Match Ticket Booking</h2>
        <p>
          Experience the thrill of live football matches by booking tickets through SpursMatchUp. We provide a seamless ticket booking process, allowing you to secure your spot for the upcoming matches of Tottenham Hotspur. Whether you're a die-hard fan or just want to enjoy the atmosphere of a live game, we've got you covered.
        </p>
        <p>
          Our platform offers a wide range of ticket options. Don't miss out on the chance to witness the North London derby and other exciting clashes.
        </p>
      </div>
    </div>
<MyFooter/>
  </template>
  
  <style>
  .service-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
    display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;
}

.service {
margin-bottom: 100px;
}

.service h2 {
font-size: 24px;
margin-bottom: 10px;
}

.service p {
font-size: 16px;
line-height: 1.6;
margin-bottom: 20px;
}

</style>  
<script>
import MyNavigation from '../views/Navigation.vue'
import MyFooter from '../views/Footer.vue'

export default {
    name: 'service',
  components: {
    MyNavigation,
     MyFooter
  },
}


</script>
