<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida odio vel cursus suscipit.</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: info@example.com</li>
            <li>Address: 123 Main Street, City</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <style>
  .footer {
    background-color: #333333;
    color: #FFFFFF;
    padding: 2rem 0;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 0 0 30%;
    margin-bottom: 2rem;
  }
  
  .footer-section h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .footer-section p {
    margin-bottom: 1rem;
  }
  
  .footer-section ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .footer-section ul li {
    margin-bottom: 0.5rem;
  }
  
  .social-icons a {
    display: inline-block;
    margin-right: 1rem;
    color: #FFFFFF;
    font-size: 1.5rem;
  }
  
  .social-icons a:hover {
    color: #CCE7FF;
  }
  
  /* Add font-awesome CDN link to your index.html file */
  </style>

  <script>
  export default {
    name: 'MyFooter',
  }
  </script>