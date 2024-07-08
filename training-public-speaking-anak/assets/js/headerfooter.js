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
          <button type="button" class="btn btn-primary" onclick="location.href = 'https://www.dialogika.co/en';">
            Click Here for English Version
          </button>
          
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

        <a href="../promo/" class="appointment-btn">Materi <span class="d-none d-md-inline">Class</span></a>

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
          <a href="https://wa.link/ms2gko" class="google-plus"><i
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
