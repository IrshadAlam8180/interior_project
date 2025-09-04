  
var header = `<header>
        <div class="container-fluid">
            <div class="navbar  align-item-center justify-content">
                <div class="nav-logo">
                   <a href="index.html"><img src="img/logo_white.png"></a>
                </div>

                <div class="nav-content">
<button type="button" class="menu-toggle"><i class="fa-solid fa-list"></i></button>
                    <ul id="nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="About_us.html">About</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <a href="reach_out.html" class="nav_btn">Reach Out</a> 
            </div>
        </div>
   </header>`;
var footer = `<!--start: footer area-->
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="footer_area">

        <div class="footer_top  space-between">
          <div class="logo_img">
            <img src="img/logo_white.png" width="180px" alt="Windoor Interior Logo">
            <p class="tagline">Designing Dreams. Building Comfort.</p>
          </div>

          <div class="payment">
            <img src="img/visa.png" alt="Visa" width="100px">
            <img src="img/rupay.png" alt="Rupay" width="50px">
            <img src="img/maestro.png" alt="Maestro" width="50px">
            <img src="img/paytm.png" alt="Paytm" width="50px">
          </div>
        </div>

       
        <div class="footer_blogs row">
          <div class="col-sm-3">
            <div class="footer_heading">
              <h4>Contact Us</h4>
            </div>
            <ul class="footer_list">
              <li><a href="#">A31, Block A2 Rajouri Garden, New Delhi</a></li>
              <li><a href="#">+91 858 8071 982</a></li>
              <li><a href="#">windoor9987@gmail.com</a></li>
            </ul>
          </div>

          
          <div class="col-sm-3">
            <div class="footer_heading">
              <h4>Our Services</h4>
            </div>
            <ul class="footer_list">
              <li><a href="#">Modular Kitchen Design</a></li>
              <li><a href="#">Living Room Interiors</a></li>
              <li><a href="#">Wardrobe Solutions</a></li>
              <li><a href="#">Office Interiors</a></li>
            </ul>
          </div>

         
          <div class="col-sm-3">
            <div class="footer_heading">
              <h4>About Windoor</h4>
            </div>
            <ul class="footer_list">
              <li><a href="#">Our Vision & Values</a></li>
              <li><a href="#">Client Testimonials</a></li>
              <li><a href="#">Our Design Process</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

         <div class="col-sm-3"> 
      <div class="footer_social_section">
  <h4>Follow Us</h4>
  <div class="footer_social">
    <a href="#" class="social-icon facebook" width="40px"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="social-icon instagram" width="40px"><i class="fab fa-instagram"></i></a>
    <a href="#" class="social-icon linkedin" width="40px"><i class="fab fa-linkedin-in"></i></a>
  </div>
</div>

    </div>


         </div>
        <div class="footer_bottom">
          <p>© 2025 Windoor Interior. All Rights Reserved.</p>
        </div>

     
        </div>
    </div>
  </div>
</footer>
<!--start: footer area-->`;

$('#header').append(header);
$('#footer').append(footer);






