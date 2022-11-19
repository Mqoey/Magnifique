<template>
  <div>
    <div class="breadcrumb-area bg-gradient text-center">
      <!-- Fixed BG -->
      <div
        class="fixed-bg"
        style="background-image: url(assets/img/shape/bg-4.png)"
      ></div>
      <!-- Fixed BG -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1>Our Team</h1>
            <ul class="breadcrumb">
              <li><router-link to="/">Home</router-link></li>
              <li><a href="#">Pages</a></li>
              <li class="active">Team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumb -->

    <!-- Start Team 
        ============================================= -->
    <div class="team-area default-padding bottom-less">
      <div class="container">
        <div class="team-items text-center">
          <div class="row">
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="500ms">
                <div class="thumb">
                  <img src="assets/img/team/1.jpg" alt="Thumb" />
                </div>
                <div class="info">
                  <span>Chief Executive Officer</span>
                  <h4>Fungai Tonderai Machigere</h4>
                  <div class="contact">
                    <i class="fab fa-twitter"></i>
                    <a href="https://twitter.com/kingftm1994">kingftm1994</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="600ms">
                <div class="thumb">
                  <img src="assets/img/team/2.jpg" alt="Thumb" />
                </div>
                <div class="info">
                  <span>Chief Marketing Officer</span>
                  <h4>Prudence Zhangazha</h4>
                  <div class="contact">
                    <i class="fab fa-twitter"></i>
                    <a href="https://twitter.com/prudence_klue06"
                      >prudence_klue06</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="700ms">
                <div class="thumb">
                  <img src="assets/img/team/3.jpg" alt="Thumb" />
                </div>
                <div class="info">
                  <span>Chief Finance Officer</span>
                  <h4>Tafadzwa Nontokozo Mawoza</h4>
                  <div class="contact">
                    <i class="fab fa-twitter"></i>
                    <a href="#">twitter</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Item -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>