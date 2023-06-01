<template>
  <nav>
    <ul>
      <li class="centered">
        <router-link to="/home">Home</router-link>
      </li>
      <li class="centered">
        <router-link to="/tottenham-players">Tottenham Players</router-link>
      </li>
      <li class="centered">
        <router-link to="/ticket">Tickets</router-link>
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
  background-color: #423e3e;
}

.profile-link {
  margin-left: 50%; /* Moves the profile link to the far right */
}

.profile-icon {
  width: 30px;
  height: 30px;
}
</style>

