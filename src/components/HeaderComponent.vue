<template>
  <div>
    <header id="home">
    
      <!-- Start Navigation -->
      <nav class="navbar navbar-default navbar-sticky dark attr-border bootsnav">
    
        <!-- Start Top Search -->
        <div class="container">
          <div class="row">
            <div class="top-search">
              <div class="input-group">
                <form action="#">
                  <input type="text" name="text" class="form-control" placeholder="Search">
                  <button type="submit">
                    <i class="ti-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- End Top Search -->
    
        <div class="container">
    
          <!-- Start Atribute Navigation -->
          <div class="attr-nav">
            <ul>
              <li class="search"><a href="#"><i class="fas fa-search"></i></a></li>
            </ul>
          </div>
          <!-- End Atribute Navigation -->
    
          <!-- Start Header Navigation -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="index.html">
              <img src="assets/img/logo-orange.png" class="logo" alt="Logo">
            </a>
          </div>
          <!-- End Header Navigation -->
    
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle active" data-toggle="dropdown">Home</a>
                <ul class="dropdown-menu">
                  <li><a href="index-1.html">Home Version One</a></li>
                  <li><a href="index-2.html">Home Version Two</a></li>
                  <li><a href="index-3.html">Home Version Three</a></li>
                  <li><a href="index-4.html">Home Version Four</a></li>
                  <li><a href="index-5.html">Home Version Five</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Company</a>
                <ul class="dropdown-menu">
                  <li><a href="about-us.html">About Company</a></li>
                  <li><a href="team.html">Meet Our Team</a></li>
                  <li><a href="team-carousel.html">Team Carousel</a></li>
                  <li><a href="contact.html">Get in Touch</a></li>
                  <li><a href="process.html">Our Process</a></li>
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="404.html">Error Page</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services</a>
                <ul class="dropdown-menu">
                  <li><a href="services.html">Services Version One</a></li>
                  <li><a href="services-2.html">Services Version Two</a></li>
                  <li><a href="services-3.html">Services Version Three</a></li>
                  <li><a href="services-4.html">Services Version Four</a></li>
                </ul>
              </li>
              <li><a href="case-studies.html">Case Studies</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog</a>
                <ul class="dropdown-menu">
                  <li><a href="blog-standard.html">Blog Standard</a></li>
                  <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                  <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                  <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                  <li><a href="blog-single.html">Blog Single</a></li>
                  <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div>
    
      </nav>
      <!-- End Navigation -->
    
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>

</style>