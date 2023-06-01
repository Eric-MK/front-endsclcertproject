<template>
  <div class="flex flex-col min-h-screen">
    <MyNavigation/>

    <div class="flex-grow container mx-auto">
      <h2 class="text-2xl font-bold mb-4 text-black mt-10">Ticket Management</h2>
  
      <div v-if="ticket">
        <div class="mb-4">
          <p class="text-lg font-medium text-blue-900">Ticket Information:</p>
          <p>User_ID: {{ ticket.user_id }}</p>
          <p>Quantity: {{ ticket.quantity }}</p>
          <p>Total Price: ${{ ticket.total_price }}</p>
        </div>
        <button @click="deleteTicket" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete Ticket</button>
      </div>
      <div v-else>
        <p class="text-lg font-medium text-blue-900">No ticket purchased</p>
        <div class="flex">
          <input type="number" v-model="quantity" class="w-16 mr-2 text-blue-900 border border-blue-900 rounded">
          <button @click="purchaseTicket" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Purchase Ticket</button>
        </div>
      </div>
    </div>

    <MyFooter/>
  </div>
</template>


<style>
html, body {
  height: 100%;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
}

.container {
  margin-left: auto;
  margin-right: auto;
}

.text-2xl {
  font-size: 1.5rem;
}

.font-bold {
  font-weight: bold;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-indigo-100 {
  color: #e5e7eb;
}

.text-lg {
  font-size: 1.125rem;
}

.text-blue-900 {
  color: #1f2937;
}

.bg-red-600 {
  background-color: #dc2626;
}

.hover\:bg-red-700:hover {
  background-color: #b91c1c;
}

.text-white {
  color: #fff;
}

.font-medium {
  font-weight: 500;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.rounded {
  border-radius: 0.25rem;
}
</style>


  <script>
  import axios from 'axios';
  import MyNavigation from '../views/Navigation.vue'
import MyFooter from '../views/Footer.vue'
  
  export default {
    data() {
      return {
        ticket: null,
        userId: localStorage.getItem('user_id'),
        userName: '', // New property
        quantity: 1, // Default quantity value

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
            console.log(response.data); // Log the response data

            this.ticket = response.data.ticket;

          })
          .catch(error => {
            console.error(error);
          });
      },
      purchaseTicket() {
        const data = {
          user_id: this.userId,
          quantity: this.quantity, // Assuming purchase quantity is 1
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
  