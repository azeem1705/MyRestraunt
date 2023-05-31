import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div class="footer">
  <div class="inner-footer">

    <div class="footer-items">
      <h1>My Restraunt</h1>
      <p>description</p>
    </div>

    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div> 
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/menu"><li>Menu</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/about"><li>About</li></Link>
        </ul>
    </div>


    <div class="footer-items">
      <h3>Recipes</h3>
      <div class="border1"></div> 
        <ul>
          <Link to="#"><li>Masala Tea</li></Link>
          <Link to="#"><li>Green Tea</li></Link>
          <Link to="#"><li>Black Tea</li></Link>
          <Link to="#"><li>Herbal Tea</li></Link>
        </ul>
    </div>


    <div class="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
        </ul> 
      

        <div class="social-media">
          <Link to="#"><i class="fab fa-instagram"></i></Link>
          <Link to="#"><i class="fab fa-facebook"></i></Link>
          <Link to="#"><i class="fab fa-google-plus-square"></i></Link>
        </div> 
    </div>
  </div>
  

  <div class="footer-bottom">
    Copyright &copy; Bcom Chaiwala 2023.
  </div>
</div>
  

</>
  )
}

export default Footer