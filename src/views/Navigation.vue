<template>
  
  <nav>
    <ul>
      <li>
        <h1 class="text-2xl font-bold text-white"><span style="font-style: oblique;"><u>SpursMatchUp</u></span></h1>
      </li>
      <li class="centered">
        <router-link to="/home" active-class="active-link">Home</router-link>
      </li>
      <li class="centered">
        <router-link to="/services" active-class="active-link">Services</router-link>
      </li>
      <li class="centered">
        <router-link to="/ticket" active-class="active-link">Tickets</router-link>
      </li>
    </ul>
    <div class="profile-link">
      <router-link to="/profile-page">
        <img src="user.png" alt="Profile" class="profile-icon" />
      </router-link>
    </div>
  </nav>

</template>

<style>
nav {
  display: flex;
  justify-content: center; /* Centers the tabs */
  align-items: center; /* Vertically centers the items */
  background-color: #111827;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.centered {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
}

.centered:hover {
  text-decoration: underline;
}

.profile-link {
  margin-left: 50%; /* Moves the profile link to the far right */
}

.profile-icon {
  width: 30px;
  height: 30px;
}

.active-link {
  background-color: rgb(0,0,139);
  padding: 10px;
  border-radius: 5px;
  
}
</style>

