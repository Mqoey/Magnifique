<template>
  <div class="home">
    <div
      class="banner-area auto-height bg-cover-bottom"
      :style="backgroundImageInlineStyle"
    >
      <div class="container">
        <div class="double-items">
          <div class="row align-center">
            <div class="col-lg-6 col-md-6 info">
              <h2 class="wow fadeInDown" data-wow-duration="1s">
                We're Experienced <span>Creative Advertising</span> Agency
              </h2>
              <p class="wow fadeInLeft" data-wow-duration="1.5s">
                In today's digital business world, you need a partner who can
                help you take advantage of marketing opportunities across a
                variety of channels in real-time combines a data-driven approach
                with knowledge gained from years in digital marketing to deliver
                outstanding results to our clients.
              </p>
              <a
                href="https://www.youtube.com/watch?v=owhuBrGIOsE"
                class="
                  popup-youtube
                  theme
                  video-play-button
                  relative
                  video-inline
                "
              >
                <i class="fa fa-play"></i>
              </a>
            </div>
            <div
              class="col-lg-6 col-md-6 thumb width-110 wow fadeInRight"
              data-wow-duration="1s"
            >
              <img src="assets/img/illustration/8.png" alt="Thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Banner -->

    <!-- Start Our Benefits 
    ============================================= -->
    <div class="benifits-area reverse default-padding">
      <div class="container">
        <div class="row align-center">
          <div class="col-lg-6 thumb wow fadeInLeft">
            <img src="assets/img/illustration/44.png" alt="Thumb" />
          </div>

          <div class="col-lg-6 info wow fadeInDown">
            <h5>Why Choose us</h5>
            <h2>Get More Trafic <strong>On Your Business</strong></h2>
            <p>
              Magnifique Incoparated is an end-to-end provider of digital
              marketing services. Whether you're looking for a turnkey managed
              strategy, an independent audit, or services specific to a
              short-term campaign, our experience and approach are sure to prove
              to be a valuable asset. Our in-house services include:
            </p>
            <ul>
              <li>
                <h5>Branding & Signage</h5>
              </li>
              <li>
                <h5>Advertising</h5>
              </li>
              <li>
                <h5>Social Media Marketing</h5>
              </li>
              <li>
                <h5>Search Engine Optimization</h5>
              </li>
              <li>
                <h5>Digital Content & Video</h5>
              </li>
            </ul>
            <router-link
              to="/contact"
              class="btn circle btn-md btn-gradient blue"
              >Get Started Now</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- End Our Benefits -->

    <!-- Start Why Choose Us 
    ============================================= -->
    <div class="choose-us-area default-padding-bottom bg-gray">
      <div class="container">
        <div class="row align-center">
          <div class="col-lg-6 thumb wow fadeInUp">
            <img src="assets/img/illustration/7.png" alt="Thumb" />
          </div>
          <div class="col-lg-6 info wow fadeInDown">
            <h2>
              We Offer a Full Range of <br />
              <strong>Digital Marketing</strong> Services!
            </h2>
            <p>
              We are a creative advertising unit located in Harare. We enjoy
              working closely with new clients and watching them succeed in
              their advertising, branding and content creation efforts.
            </p>
            <p>
              We help businesses improve their ad campaigns, social media
              strategy, content marketing efforts, and overall marketing
              strategy.
            </p>
            <router-link
              to="/contact"
              class="btn circle btn-md btn-gradient blue"
              >Start a Project</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- End Why Choose Us -->

    <!-- Start Services Area
    ============================================= -->
    <div class="services-area default-padding bottom-less">
      <!-- Fixed Shape  -->
      <div class="shape-bottom">
        <img src="assets/img/shape/12.png" alt="Shape" />
      </div>
      <!-- Fixed Shape  -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="site-heading text-center">
              <h5>What we do</h5>
              <h2>
                Let’s Check our scientific Digital <br />Marketing solutions
              </h2>
              <div class="heading-divider"></div>
            </div>
          </div>
        </div>
        <div class="services-items text-center">
          <div class="row">
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="500ms">
                <div class="icon">
                  <i class="flaticon-bullhorn"></i>
                </div>
                <div class="info">
                  <h4>
                    <a href="#">Social Media Marketing</a>
                  </h4>
                  <p>
                    Social Media has changed how brands communicate with their
                    audiences forever.
                  </p>
                  <router-link to="/services"
                    ><i class="fas fa-arrow-right"></i>Read More</router-link
                  >
                </div>
              </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="600ms">
                <div class="icon">
                  <i class="flaticon-keyword-1"></i>
                </div>
                <div class="info">
                  <h4>
                    <a href="#">Keyward Research</a>
                  </h4>
                  <p>
                    Technical SEO <br />
                    Full SEO Audits <br />
                    SEO Consulting
                  </p>
                  <router-link to="/services"
                    ><i class="fas fa-arrow-right"></i>Read More</router-link
                  >
                </div>
              </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="700ms">
                <div class="icon">
                  <i class="flaticon-marketing"></i>
                </div>
                <div class="info">
                  <h4>
                    <a href="#">Digital Content & Video</a>
                  </h4>
                  <p>
                    Successful brands in the world developed detailed content
                    strategies that help them inspire audiences.
                  </p>
                  <router-link to="/services"
                    ><i class="fas fa-arrow-right"></i>Read More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Services Area -->

    <!-- Start Fun Factor Area
    ============================================= -->
    <div class="fun-factor-area bg-gray default-padding-bottom">
      <div class="container">
        <div class="client-items text-center">
          <div class="row">
            <div class="col-lg-3 col-md-6 item">
              <div class="fun-fact">
                <div class="timer" data-to="17" data-speed="5000">17</div>
                <span class="medium">Projects Executed</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 item">
              <div class="fun-fact">
                <div class="timer" data-to="8" data-speed="3500">8</div>
                <span class="medium">Data Analytics</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 item">
              <div class="fun-fact">
                <div class="timer" data-to="5" data-speed="4500">5</div>
                <span class="medium">Data Management</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 item">
              <div class="fun-fact">
                <div class="timer" data-to="12" data-speed="4000">12</div>
                <span class="medium">Satisfied Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Fun Factor Area -->

    <!-- Start Process Area
    ============================================= -->
    <div class="process-area default-padding-bottom bg-gray">
      <div class="container">
        <div class="process-items">
          <div class="row align-center">
            <div class="col-lg-6 thumb">
              <img src="assets/img/illustration/3.png" alt="Thumb" />
            </div>

            <div class="col-lg-6 info">
              <h2>
                We love What we Do <strong>And Helping others Succeed</strong>
              </h2>
              <div class="content">
                <div class="item">
                  <div class="icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <h4><strong>01.</strong> Research</h4>
                  <p>
                    Welcome fat who window extent either formal. Removing
                    welcomed civility or hastened is. Justice elderly but
                    perhaps expense.
                  </p>
                </div>
                <div class="item">
                  <div class="icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <h4><strong>02.</strong> Data Collection</h4>
                  <p>
                    Welcome fat who window extent either formal. Removing
                    welcomed civility or hastened is. Justice elderly but
                    perhaps expense.
                  </p>
                </div>
                <div class="item">
                  <div class="icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                  <h4><strong>03.</strong> Targeting</h4>
                  <p>
                    Welcome fat who window extent either formal. Removing
                    welcomed civility or hastened is. Justice elderly but
                    perhaps expense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Blog
    ============================================= -->
    <div class="blog-area default-padding bottom-less bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="site-heading text-center">
              <h5>Latest News</h5>
              <h2>
                Stay Update with Anada from <br />
                latest & popular News
              </h2>
              <div class="heading-divider"></div>
            </div>
          </div>
        </div>
        <div class="blog-items content-less">
          <div class="row">
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="600ms">
                <div class="thumb">
                  <a href="#"
                    ><img src="assets/img/blog/5.jpg" alt="Thumb"
                  /></a>
                </div>
                <div class="info">
                  <div class="tags">
                    <a href="#">SEO</a>
                    <a href="#">Analysis</a>
                  </div>
                  <div class="meta">
                    <ul>
                      <li><i class="fas fa-calendar-alt"></i> 18 Nov, 2022</li>
                      <li>By <a href="#">Fungai</a></li>
                    </ul>
                  </div>
                  <h4>
                    <a href="#">Consulted admitting is power acuteness. </a>
                  </h4>
                  <a class="btn circle btn-theme border btn-sm" href="#"
                    >Read More <i class="fas fa-long-arrow-alt-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="600ms">
                <div class="thumb">
                  <a href="#"
                    ><img src="assets/img/blog/2.jpg" alt="Thumb"
                  /></a>
                </div>
                <div class="info">
                  <div class="tags">
                    <a href="#">Performance</a>
                    <a href="#">High</a>
                  </div>
                  <div class="meta">
                    <ul>
                      <li><i class="fas fa-calendar-alt"></i> 05 Dec, 2022</li>
                      <li>By <a href="#">Fungai</a></li>
                    </ul>
                  </div>
                  <h4>
                    <a href="#">Unsatiable entreaties may collecting Power.</a>
                  </h4>
                  <a class="btn circle btn-theme border btn-sm" href="#"
                    >Read More <i class="fas fa-long-arrow-alt-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <!-- End Single Item -->
            <!-- Single Item -->
            <div class="single-item col-lg-4 col-md-6">
              <div class="item wow fadeInUp" data-wow-delay="600ms">
                <div class="thumb">
                  <a href="#"
                    ><img src="assets/img/blog/3.jpg" alt="Thumb"
                  /></a>
                </div>
                <div class="info">
                  <div class="tags">
                    <a href="#">Affiliate</a>
                    <a href="#">Process</a>
                  </div>
                  <div class="meta">
                    <ul>
                      <li><i class="fas fa-calendar-alt"></i> 26 Sep, 2022</li>
                      <li>By <a href="#">Fungai</a></li>
                    </ul>
                  </div>
                  <h4>
                    <a href="#">Consulted admitting is power acuteness. </a>
                  </h4>
                  <a class="btn circle btn-theme border btn-sm" href="#"
                    >Read More <i class="fas fa-long-arrow-alt-right"></i
                  ></a>
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
export default {
  computed: {
    backgroundImageInlineStyle() {
      return `background-image: url("assets/img/shape/bg-2.png");`;
    },
  },
};
</script>
