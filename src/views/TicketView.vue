<template>
    <MyNavigation/>

    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-4 text-indigo-100 mt-10">Ticket Management</h2>
  
      <div v-if="ticket">
        <div class="mb-4">
          <p class="text-lg font-medium text-blue-900">Ticket Information:</p>
          <p>User ID: {{ ticket.user_id }}</p>
          <p>Quantity: {{ ticket.quantity }}</p>
          <p>Total Price: ${{ ticket.total_price }}</p>
        </div>
        <button @click="deleteTicket" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete Ticket</button>
      </div>
      <div v-else>
        <p class="text-lg font-medium text-blue-900">No ticket purchased</p>
        <button @click="purchaseTicket" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Purchase Ticket</button>
      </div>
    </div>
    <MyFooter/>

  </template>
  
  <script>
  import axios from 'axios';
  import MyNavigation from '../views/Navigation.vue'
import MyFooter from '../views/Footer.vue'
  
  export default {
    data() {
      return {
        ticket: null,
        userId: localStorage.getItem('user_id'),
      };
    },
    components: {
    MyNavigation,
     MyFooter
  },
    mounted() {
      this.fetchTicket();
    },
    methods: {
      fetchTicket() {
        axios.get(`http://127.0.0.1:8000/api/tickets/${this.userId}`)
          .then(response => {
            this.ticket = response.data.ticket;
          })
          .catch(error => {
            console.error(error);
          });
      },
      purchaseTicket() {
        const data = {
          user_id: this.userId,
          quantity: 1, // Assuming purchase quantity is 1
        };
  
        axios.post('http://127.0.0.1:8000/api/tickets/purchase', data)
          .then(response => {
            this.ticket = response.data.ticket;
          })
          .catch(error => {
            console.error(error);
          });
      },
      deleteTicket() {
        axios.delete(`http://127.0.0.1:8000/api/tickets/${this.userId}/delete`)
          .then(() => {
            this.ticket = null;
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  