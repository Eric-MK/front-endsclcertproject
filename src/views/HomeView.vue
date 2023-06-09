<template>

<MyNavigation/>

<div class="homepage">
    <div class="banner">
      <h1>{{ matchTitle }}</h1>
      <p>{{ matchDescription }}</p>

      <router-link to="/ticket"><button>Buy Tickets</button></router-link>
      
    </div>
<div class="match-details mt-5">
  <p class="text-lg"> <strong>Venue : </strong>{{ venue }}</p>
  <p class="text-lg"> <strong>Place : </strong>{{ place }}</p>
  <p class="text-lg"><strong>Time : </strong>{{ time }}</p>
</div>

    <div class="rivalry">
      <h2>The Rivalry</h2>
      <p>{{ rivalryDescription }}</p>
      <div class="trophy-section">
        <h3>Trophies Won</h3>
        <div class="trophy">
          <div class="trophy-info">
            <h4>{{ tottenhamName }}</h4>
            <p>{{ tottenhamTrophies }}</p>
          </div>
        </div>
        <div class="trophy">
          <div class="trophy-info">
            <h4>{{ arsenalName }}</h4>
            <p>{{ arsenalTrophies }}</p>
          </div>
        </div>
      </div>
      <div class="greatest-players-section">
        <h3>Team Players</h3>
        <div class="greatest-players">
          <div class="players-team">
            <h4>{{ tottenhamName }}</h4>
            <ul>
              <li v-for="player in tottenhamPlayers" :key="player">{{ player }}</li>
            </ul>
          </div>
          <div class="players-team">
            <h4>{{ arsenalName }}</h4>
            <ul>
              <li v-for="player in arsenalPlayers" :key="player">{{ player }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="greatest-managers-section">
        <h3>Team Managers</h3>
        <div class="">
          <div class="managers-team">
            <h4>{{ tottenhamName }}</h4>
            <ul>
              <li v-for="manager in tottenhamManagers" :key="manager">{{ manager }}</li>
            </ul>
          </div>
          <div class="managers-team">
            <h4>{{ arsenalName }}</h4>
            <ul>
              <li v-for="manager in arsenalManagers" :key="manager">{{ manager }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 
</div>
<MyFooter/>
</template>

<style>

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}


/* Homepage */
.homepage {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
}

.banner {
  background-image: url('/home2.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #F5F5F5;
  text-align: center;
}

.banner h1 {
  font-size: 60px;
  margin-bottom: 10px;
  font-family: serif;

  
}

.banner p {
  font-size: 24px;
  margin-bottom: 90px;
}

.banner button {
  background-color: #d61717	;
  border: none;
  color: #f5eeee;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 150px;

}

.banner button:hover {
  background-color: #8a0707;
  color: #fff;
}

.rivalry h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.rivalry p {
  font-size: 18px;
  margin-bottom: 40px;
}

.trophy-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.trophy {
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 4px;
  flex-basis: 48%;
}

.trophy-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.trophy-info h4 {
  font-size: 24px;
  margin-bottom: 10px;
}

.trophy-info p {
  font-size: 18px;
  color: #666;
}

.greatest-players-section {
  margin-bottom: 40px;
}

.greatest-players-section h3 {
  font-size: 36px;
  margin-bottom: 20px;
}

.greatest-players {
  display: flex;
  justify-content: space-between;
}

.players-team {
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 4px;
  flex-basis: 48%;
}

.players-team h4 {
  font-size: 24px;
  margin-bottom: 10px;
}

.players-team ul {
  font-size: 18px;
  color: #666;
}

.greatest-managers-section {
  margin-bottom: 40px;
}

.greatest-managers-section h3 {
  font-size: 36px;
  margin-bottom: 20px;
}

.greatest-managers {
  display: flex;
  justify-content: space-between;
}

.managers-team {
  background-color: #f5f5f5;
  padding: 10px;
margin-bottom: 20px;
}
.managers-team h4 {
font-size: 1.5rem;
margin-bottom: 10px;
}

.managers-team ul {
list-style: none;
margin: 0;
padding: 0;
}

.managers-team li {
margin-bottom: 5px;
font-size: 1.1rem;
}

/* Footer */

footer {
background-color: #333;
color: #fff;
padding: 50px;
}

.footer-container {
display: flex;
flex-wrap: wrap;
}

.footer-section {
flex: 1;
margin-right: 30px;
}

.footer-section h4 {
font-size: 1.5rem;
margin-bottom: 10px;
}

.footer-section ul {
list-style: none;
margin: 0;
padding: 0;
}

.footer-section li {
margin-bottom: 10px;
}

.footer-section a {
color: #fff;
}

.footer-section a:hover {
text-decoration: underline;
}

/* Responsive */

@media (max-width: 768px) {
.banner {
text-align: center;
}

.trophy-section,
.greatest-players-section,
.greatest-managers-section {
display: flex;
flex-direction: column;
}

.trophy,
.greatest-players,
.managers-team {
margin-right: 0;
}

.footer-container {
flex-direction: column;
}

.footer-section {
margin-right: 0;
margin-bottom: 30px;
}
}
</style>
<script>
import MyNavigation from '../views/Navigation.vue'
import MyFooter from '../views/Footer.vue'

export default {
    name: 'Homepage',
  data() {
    return {

      matchTitle: 'The Historic Match',
      matchDescription: 'The biggest match of the season featuring Tottenham and Arsenal.',
      venue: 'Wembley Stadium',
      place: 'London, England',
      time: '20:00 PM GMT',
      matchTitle: 'The Historic Match',
      matchDescription: 'The biggest match of the season featuring Tottenham and Arsenal.',
      rivalryDescription: 'The rivalry between Tottenham and Arsenal dates back over a century, with both teams competing for dominance in North London. Tottenham has won 2 league titles, 8 FA Cups, and 4 League Cups, while Arsenal has won 13 league titles, 14 FA Cups, and 2 League Cups. The two teams have faced each other over 200 times in all competitions.',
      tottenhamName: 'Tottenham Hotspur',
      tottenhamTrophies: '2 League Titles, 8 FA Cups, 4 League Cups',
      tottenhamPlayers: ['Harry Kane', 'Gareth Bale', 'Luka Modric', 'Son', 'Kulesevski', 'Pedro Perro', 'Cristian Romero', 'Lloris', 'Bentacur', 'Bissouma'],
      tottenhamManagers: ['Mauricio Pochettino'],
      arsenalName: 'Arsenal',
      arsenalTrophies: '13 League Titles, 14 FA Cups, 2 League Cups',
      arsenalPlayers: ['Thierry Henry', 'Dennis Bergkamp', 'Tony Adams', 'Ian Wright', 'Patrick Vieira'],
      arsenalManagers: ['Arsene Wenger'],
    }
  },
  components: {
    MyNavigation,
     MyFooter
  },
}

</script>
