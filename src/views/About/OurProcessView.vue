<template>
  <div>
    <div class="breadcrumb-area bg-gradient text-center">
      <!-- Fixed BG -->
      <div class="fixed-bg" style="background-image: url(assets/img/shape/bg-4.png);"></div>
      <!-- Fixed BG -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1>Our Process</h1>
            <ul class="breadcrumb">
              <li><router-link to="/">Home</router-link></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Process</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumb -->
    
    <!-- Start Tabs 
        ============================================= -->
    <div class="tabs-content-area default-padding">
      <div class="container">
        <div class="center-tabs">
          <div class="row">
            <div class="col-lg-4">
              <ul id="tabs" class="nav nav-tabs">
                <li class="nav-item">
                  <a href="#" data-target="#tab1" data-toggle="tab" class="active nav-link">Our Mission</a>
                </li>
                <li class="nav-item">
                  <a href="#" data-target="#tab2" data-toggle="tab" class="nav-link">Our Vission</a>
                </li>
                <li class="nav-item">
                  <a href="#" data-target="#tab3" data-toggle="tab" class="nav-link">Success Rate</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-8">
              <div id="tabsContent" class="tab-content wow fadeInUp" data-wow-delay="0.5s">
                <div id="tab1" class="tab-pane fade active show">
                  <div class="row align-center">
                    <div class="col-lg-12 info">
                      <h5>Our Mission</h5>
                      <h2>Data Visualization Research <br> technique & Solution</h2>
                      <p>
                        Delightful unreserved impossible few estimating men favourable see entreaties. She propriety
                        immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat
                        make met can must form into gate. Me we offending prevailed discovery.
                      </p>
                      <a class="btn-simple" href="#"><i class="fas fa-angle-right"></i> Read More</a>
                    </div>
                  </div>
                </div>
                <div id="tab2" class="tab-pane fade">
                  <div class="row align-center">
                    <div class="col-lg-12 info">
                      <h5>Our Vission</h5>
                      <h3>Collect Ongoing Big Data <br> Design And Strategy</h3>
                      <p>
                        Delightful unreserved impossible few estimating men favourable see entreaties. She propriety
                        immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat
                        make met can must form into gate. Me we offending prevailed discovery.
                      </p>
                      <a class="btn-simple" href="#"><i class="fas fa-angle-right"></i> Read More</a>
                    </div>
                  </div>
                </div>
                <div id="tab3" class="tab-pane fade">
                  <div class="row align-center">
                    <div class="col-lg-12 info">
                      <h5>Success Rate</h5>
                      <h2>These entrepreneurs feel <br> bright and full of hope. </h2>
                      <p>
                        Delightful unreserved impossible few estimating men favourable see entreaties. She propriety
                        immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat
                        make met can must form into gate. Me we offending prevailed discovery.
                      </p>
                      <a class="btn-simple" href="#"><i class="fas fa-angle-right"></i> Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Tabs -->
    
    <!-- Start Process Area
        ============================================= -->
    <div class="process-area default-padding-bottom">
      <!-- Fixed Shape  -->
      <div class="shape-left-top shape opacity-default">
        <img src="assets/img/shape/4.png" alt="Shape">
      </div>
      <!-- Fixed Shape  -->
      <div class="container">
        <div class="process-items">
          <div class="row align-center">
    
            <div class="col-lg-6 thumb wow fadeInLeft">
              <img src="assets/img/illustration/3.png" alt="Thumb">
            </div>
    
            <div class="col-lg-6 info wow fadeInUp">
              <h2>We love What we Do <strong>And Helping others Succeed</strong></h2>
              <div class="content">
                <div class="item">
                  <div class="icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <h4><strong>01.</strong> Research</h4>
                  <p>
                    Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly
                    but perhaps expense.
                  </p>
                </div>
                <div class="item">
                  <div class="icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <h4><strong>02.</strong> Data Collection</h4>
                  <p>
                    Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly
                    but perhaps expense.
                  </p>
                </div>
                <div class="item">
                  <div class="icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <h4><strong>03.</strong> Targeting</h4>
                  <p>
                    Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly
                    but perhaps expense.
                  </p>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>