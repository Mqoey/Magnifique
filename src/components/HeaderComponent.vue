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
              <!-- <li class="dropdown">
                <a href="#" class="dropdown-toggle active" data-toggle="dropdown">Home</a>
                <ul class="dropdown-menu">
                  <li><a href="index-1.html">Home Version One</a></li>
                  <li><a href="index-2.html">Home Version Two</a></li>
                </ul>
              </li> -->
              <li>
                <router-link to="/">Home</router-link>
              </li>
              
              <li>
                <router-link to="/services">Services</router-link>
              </li>
              
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">About Us</a>
                <ul class="dropdown-menu">
                  <li><a href="#">About Company</a></li>
                  <li><a href="#">Meet Our Team</a></li>
                  <li><a href="#">Get in Touch</a></li>
                  <li><a href="#">Our Process</a></li>
                  <li><a href="#">Faq</a></li>
                </ul>
              </li>
              
              <li>
                <router-link to="/contact">Contact us</router-link>
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