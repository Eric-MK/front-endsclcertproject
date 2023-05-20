<template>
    <div class="profile-page">
      <h1 class="text-3xl mb-8 font-bold text-gray-700 text-center">
        User Profile
      </h1>
      <div v-if="loading" class="text-center">
        Loading...
      </div>
      <div v-else>
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
            @click="updateProfile"
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
  </div>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      password: "",
      profileImage: null,
      errors: {},
      loading: true,
    };
  },
  mounted() {
    this.fetchUserProfile();
  },
  methods: {
    fetchUserProfile() {
      const userId = this.$route.params.id;
      axios
        .get(`/api/user/${userId}/show`)
        .then((response) => {
          this.user = response.data.user;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
    updateProfile() {
      const userId = this.$route.params.id;
      const formData = new FormData();
      formData.append("name", this.user.name);
      formData.append("email", this.user.email);
      if (this.password) {
        formData.append("password", this.password);
      }
      if (this.profileImage) {
        formData.append("profile_image", this.profileImage);
      }
      axios
        .put(`/api/user/${userId}/update`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.user = response.data.user;
          this.password = "";
          this.profileImage = null;
          this.errors = {};
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    deleteProfile() {
      const userId = this.$route.params.id;
      axios
        .delete(`/api/user/${userId}/delete`)
        .then(() => {
          this.$router.push("/logout");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleProfileImageChange(event) {
      this.profileImage = event.target.files[0];
    },
  },
};
</script>