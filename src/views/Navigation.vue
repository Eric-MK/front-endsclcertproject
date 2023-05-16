<template>
    <nav>
      <ul>
        <li class="kr">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="kr">
          <router-link to="/tottenham-players">Tottenham Players</router-link>
        </li>
        <li class="kr">
          <router-link to="/arsenal-players">Arsenal Players</router-link>
        </li>
      </ul>
    </nav>

    
  </template>
  
  <script>
export default {
  name: 'MyNavigation',
}
</script>
  
  <style>
 nav {
  display: flex;
  justify-content: center;
  background-color: #05172e;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.kr {
  margin: 0 10px;
}

.kr {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
}

.kr:hover {
  background-color: #423e3e;
}

  </style>