<template>
    <nav>
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/tottenham-players">Tottenham Players</router-link>
        </li>
        <li>
          <router-link to="/arsenal-players">Arsenal Players</router-link>
        </li>
      </ul>
    </nav>

    
  </template>
  
  <script>

  

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

li {
  margin: 0 10px;
}

li {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
}

li:hover {
  background-color: #423e3e;
}

  </style>