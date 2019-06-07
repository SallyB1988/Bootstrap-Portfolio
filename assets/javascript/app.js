const navbar = () => {
  let spbNavbar = `
    <body class="spb-body">
    <nav class="navbar sticky-top navbar-expand-lg navbar-light p-0 spb-navbar-bkg">
      <section class="container p-0">
        <a class="navbar-brand text-white font-weight-bold px-4 py-2 spb-logo" href="./index.html">Sally Beckwith</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse my-2 my-lg-0" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="./portfolio.html">Projects</a>
            </li>
          </ul>
        </div>      
      </section>
    </nav>
  `
  $("#spb-navbar").append(spbNavbar);
}

$(document).ready(navbar);



  {/* <li class="nav-item">
    <a class="nav-link" href="./contact.html">Contact</a>
  </li> */}