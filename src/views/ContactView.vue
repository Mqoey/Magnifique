<template>
  <div>
    <div class="breadcrumb-area bg-gradient text-center">
      <!-- Fixed BG -->
      <div class="fixed-bg" :style="backgroundImageInlineStyle"></div>
      <!-- Fixed BG -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1>Contact Us</h1>
            <ul class="breadcrumb">
              <li><a href="#"><i class="fas fa-home"></i> Home</a></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumb -->
    
    <!-- Start Contact Area  
        ============================================= -->
    <div id="contact" class="contact-us-area default-padding">
      <div class="container">
        <div class="row">
    
          <div class="col-lg-4 wow fadeInUp address text-light">
            <div class="address-items">
              <div class="item">
                <h4>Office Location</h4>
                <div class="info">
                  <p>22 Baker Street,<br> London, United Kingdom,<br> W1U 3BW</p>
                </div>
              </div>
              <div class="item">
                <h4>Contact Info</h4>
                <div class="info">
                  <ul>
                    <li>Phone: <span>+44-20-7328-4499</span></li>
                    <li>Fax: <span>+44-20-7328-4499</span></li>
                    <li>Email: <span>info@digilab.com</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    
          <div class="col-lg-8 wow fadeInLeft contact-form">
            <h2>Need help? <strong>Let's ask your questions</strong></h2>
            <form action="https://validthemes.live//themeforest/digilab/assets/mail/contact.php" method="POST"
              class="contact-form">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <input class="form-control" id="name" name="name" placeholder="Name" type="text">
                    <span class="alert-error"></span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input class="form-control" id="email" name="email" placeholder="Email*" type="email">
                    <span class="alert-error"></span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input class="form-control" id="phone" name="phone" placeholder="Phone" type="text">
                    <span class="alert-error"></span>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group comments">
                    <textarea class="form-control" id="comments" name="comments"
                      placeholder="Tell Us About Project *"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" name="submit" id="submit">
                    Send Message <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
                <!-- Alert Message -->
                <div class="col-lg-12 alert-notification">
                  <div id="message" class="alert-msg"></div>
                </div>
              </div>
            </form>
          </div>
    
        </div>
      </div>
    </div>
    <!-- End Contact -->
    
    <!-- Start Google Maps 
        ============================================= -->
    <div class="maps-area">
      <div class="google-maps">
        <iframe
          src="https://maps.google.com/maps?q=134%20Bajila%20Close,%20Westwood%20Harare&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
    </div>
    <!-- End Google Maps -->
  </div>
</template>

<script>
export default
  {
    computed: {
      backgroundImageInlineStyle() {
        return `background-image: url("assets/img/shape/bg-4.png");`;
      },
      backgroundImageInlineStyle2() {
        return `background-image: url("img/bg/1h1.png");`;
      },
      backgroundImageInlineStyl3() {
        return `background-image: url("img/bg/1h2.png");`;
      },
      backgroundImageInlineStyle4() {
        return `background-image: url("img/bg/1h3.png");`;
      }
    }
  }
</script>

<style>

</style>