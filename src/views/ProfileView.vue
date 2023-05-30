<template>
    <MyNavigation/>
    <div class="profile-page bg-white py-8">
      <h1 class="text-3xl mb-8 font-bold text-gray-700 text-center">
        User Profile
      </h1>
      <div v-if="loading" class="text-center">
        Loading...
      </div>
  
      <form v-else @submit.prevent="updateProfile" class="max-w-md mx-auto">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name
          </label>
          <input
            v-model="user.name"
            name="name"
            :class="{ 'border-red-500': errors.name }"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            v-show="userLoaded"
          />
          <p v-if="errors.name" class="text-red-500 text-xs italic">
            {{ errors.name[0] }}
          </p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="user.email"
            name="email"
            :class="{ 'border-red-500': errors.email }"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            v-show="userLoaded"
          />
          <p v-if="errors.email" class="text-red-500 text-xs italic">
            {{ errors.email[0] }}
          </p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            v-model="password"
            name="password"
            :class="{ 'border-red-500': errors.password }"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your new password"
          />
          <p v-if="errors.password" class="text-red-500 text-xs italic">
            {{ errors.password[0] }}
          </p>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password_confirmation">
            Confirm Password
          </label>
          <input
            v-model="password_confirmation"
            name="password_confirmation"
            :class="{ 'border-red-500': errors.password_confirmation }"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password_confirmation"
            type="password"
            placeholder="Confirm your new password"
          />
          <p v-if="errors.password_confirmation" class="text-red-500 text-xs italic">
            {{ errors.password_confirmation[0] }}
          </p>
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="profile_image">
          Profile Image
        </label>
        <input
          ref="profileImage"
          name="profile_image"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="profile_image"
          type="file"
          accept="image/*"
          @change="handleProfileImageChange"
        />
        <p v-if="errors.profile_image" class="text-red-500 text-xs italic">
          {{ errors.profile_image[0] }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save Changes
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="deleteProfile"
        >
          Delete Profile
        </button>
        <button
        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="logout"
      >
        Logout
      </button>
      </div>
    </form>
  </div>
  <MyFooter/>
</template>
  

<script>
import MyNavigation from '../views/Navigation.vue'
import MyFooter from '../views/Footer.vue'

import axios from "axios";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      password: "",
      password_confirmation: "",
      profileImage: null,
      errors: {},
      loading: true,
      user_id: "",
      userLoaded: false,
    }
  },
  components: {
    MyNavigation,
     MyFooter
  },
  mounted() {
    this.fetchUserProfile();
  },
  methods: {
    fetchUserProfile() {
      const user_id = localStorage.getItem("user_id");
      console.log("user_id:", user_id);
      if (user_id) {
        this.user_id = user_id; // Set the user_id property

        axios
          .get(`http://127.0.0.1:8000/api/user/${user_id}/show`)
          .then((response) => {
            console.log(response);
            this.user = response.data.user;
            this.loading = false;
            this.userLoaded = true;
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
          });
      } else {
        console.log("error error");
      }
    },
    updateProfile(event) {
      event.preventDefault();
      const userId = this.user_id;
      console.log("user_id:", userId);
      console.log("user.name:", this.user.name);
      console.log("user.email:", this.user.email);
      console.log("this.user:", this.user);

      const requestData = {
        name: this.user.name,
        email: this.user.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        profile_image: this.profileImage,
      };
      console.log("req data", requestData);
      axios
        .put(`http://127.0.0.1:8000/api/user/${this.user_id}/update`, requestData)
        .then((response) => {
          this.user = response.data.user;
          this.password = "";
          this.password_confirmation = "";
          this.profileImage = null;
          this.errors = {};
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          } else {
            console.log(error);
          }
        });
    },
    deleteProfile() {
      const userId = this.user_id;
      axios
        .delete(`http://127.0.0.1:8000/api/user/${userId}/delete`)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleProfileImageChange(event) {
      this.profileImage = event.target.files[0];
    },
    logout() {
      localStorage.removeItem("user_id");
      this.$router.push("/");
    }
  },
};
</script>

  