// Header
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  <!-- ======= Top Bar ======= -->
  <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope"></i> <a href="mailto:admin@dialogika.co">admin@dialogika.co</a>
        <i class="bi bi-phone"></i> +62 851 6299 2597
      </div>
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="https://link.dialogika.co/twitter" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://link.dialogika.co/facebook" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://link.dialogika.co/instagram" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://link.dialogika.co/linkedin" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
      </div>
    </div>
  </div>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

       <a href="../index.html" class="logo me-auto"><img src="assets/img/logo.webp" alt="" class="img-fluid"></a>

       <nav id="navbar" class="navbar order-last order-lg-0">
        
       </nav><!-- .navbar -->

      <a href="#departments" class="appointment-btn">Materi <span class="d-none d-md-inline">Class</span></a>

    </div>
  </header><!-- End Header -->

  <!-- ======= Mobile Nav ======= -->
  <nav class="navbar-canvas fixed-top">
    <div class="container-fluid">
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <a href="../index.html">
            <img src="assets/img/logo.webp" class="offcanvas-title" id="offcanvasNavbarLabel"/>
          </a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <a href="#hero"><div class="card"><div class="card-body">Home</div></div></a>
          <div class="card">
            <a href="#program-collapse" data-bs-toggle="collapse">
              <div class="card-body d-flex justify-content-between">
                <span>Program</span>
                <i class='bx bxs-chevron-down bx-tada'></i>
              </div>
            </a>
            <div class="collapse" id="program-collapse">
              <a href="#program-online" data-bs-toggle="collapse">
                <div class="card">
                  <div class="card-body d-flex justify-content-between">
                    <span>Online</span>
                    <i class='bx bxs-chevron-down bx-tada'></i>
                  </div>
                    <div class="collapse" id="program-online">
                      <a href="../program/basic-play.html"><div class="card card-body">Basic Play</div></a>
                      <a href="../program/basic-plus.html">
                        <div class="card card-body">
                            <div class="justify-content-between d-flex">
                                <span>Basic Plus</span>
                                <span class="badge bg-warning rounded-pill text-dark">Best Buy</span>
                            </div>
                        </div>
                      </a>
                      <a href="../program/basic-private.html"><div class="card card-body">Basic Private</div></a>
                      <hr/>
                      <a href="../program/kids-play.html"><div class="card card-body">Kids Play</div></a>
                      <a href="../program/kids-plus.html"><div class="card card-body">
                        <div class="justify-content-between d-flex">
                          <span>Kids Plus </span>
                          <span class="badge bg-info rounded-pill">New</span>
                        </div>
                      </div></a>
                      <a href="../program/kids-plus.html"><div class="card card-body">Kids Private</div></a>
                    </div>
                </div>
              </a>
              <a href="#program-offline" data-bs-toggle="collapse">
                <div class="card">
                  <div class="card-body d-flex justify-content-between">
                    <span>Offline</span>
                    <i class='bx bxs-chevron-down bx-tada'></i>
                  </div>
                    <div class="collapse" id="program-offline">
                      <a href="../program/first-class.html">
                        <div class="card card-body">
                            <div class="justify-content-between d-flex">
                                <span>First Class</span>
                                <span class="badge bg-warning rounded-pill text-dark">Best Buy</span>
                            </div>
                        </div>
                      </a>
                      <a href="../program/first-kids.html"><div class="card card-body">
                        <div class="justify-content-between d-flex">
                          <span>First Kids </span>
                          <span class="badge bg-info rounded-pill">New</span>
                        </div>
                      </div></a>
                      <hr/>
                      <a href="../program/first-private.html"><div class="card card-body">First Private</div></a>
                    </div>
                </div>
              </a>
            </div>
          </div>
          <a href="../corporate/"><div class="card card-body">Corporate</div></a>
          <a href="../event/"><div class="card card-body">
            <div class="justify-content-between d-flex">
              <span>Event </span>
              <!-- <span class="badge bg-info rounded-pill">New</span> -->
            </div>
          </div></a>
          <a href="../service/" onclick="return false;"><div class="card card-body">
            <div class="justify-content-between d-flex">
              <span>Service </span>
              <span class="badge bg-warning rounded-pill">Coming Soon</span>
            </div>
          </div></a>
          <a href="../shop/" onclick="return false;"><div class="card card-body">
            <div class="justify-content-between d-flex">
              <span>Shop </span>
              <span class="badge bg-warning rounded-pill">Coming Soon</span>
            </div>
          </div></a>
          <a href="../blog/"><div class="card card-body">Blog</div></a>
        </div>
      </div>
    </div>
  </nav><!-- End Mobile Nav -->

    `;
  }
}

//Footer
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
  
  <!-- ======= Footer ======= -->
  <footer id="footer">

      

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Dialogika</span></strong> | PT. Dialogika Persona Indonesia
        </div>

      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://link.dialogika.co/twitter" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://link.dialogika.co/facebook" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://link.dialogika.co/instagram" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://link.dialogika.co/wasap-2597-dialogika-co" class="google-plus"><i
            class="bx bxl-whatsapp"></i></a>
        <a href="https://link.dialogika.co/linkedin" class="linkedin"><i class="bx bxl-linkedin"></i></i></a>
      </div>
    </div>
  </footer><!-- End Footer -->

    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
