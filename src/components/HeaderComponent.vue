<template>
  <div>
    <header id="home">
      <nav class="navbar navbar-default navbar-sticky dark attr-border bootsnav">
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
    
        <div class="container">
          <div class="attr-nav">
            <ul>
              <li class="search"><a href="#"><i class="fas fa-search"></i></a></li>
            </ul>
          </div>
          
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i class="fa fa-bars"></i>
            </button>
            <router-link to="/"><img src="assets/img/logo.png" class="logo" alt="Logo"></router-link>
          </div>

          <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/services">Services</router-link>
              </li>  
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">About Us</a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/about">Our Company</router-link>
                  </li>
                  <li>
                    <router-link to="/team">Our Team</router-link>
                  </li>
                  <li>
                    <router-link to="/contact">Get in Touch</router-link>
                  </li>
                  <li>
                    <router-link to="/process">Our Process</router-link>
                  </li>
                  <li>
                    <router-link to="/faq">Faq</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/contact">Contact us</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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