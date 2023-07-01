<style>
header {
  background: white;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  padding: 20px 0px;
  margin: 0px 20px;
  display: inline-block;
  position: relative;
  opacity: 0.75;
}

.nav-link:hover {
  opacity: 1;
}

.nav-link::before {
  transition: 300ms;
  height: 5px;
  content: "";
  position: absolute;
  background-color: #FF6600;
}

.nav-link-ltr::before {
  width: 0%;
  bottom: 10px;
}

.nav-link-ltr:hover::before {
  width: 100%;
}

.dropdown {
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  padding: 20px 0px;
  margin: 0px 20px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  opacity: 1;
}

.dropdown-content a {
  float: none;
  color: #000000;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  opacity: 1;
}

.dropdown-content a:hover {
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>

<header>
  <div class="navbar">
    <a class="nav-link nav-link-ltr" href="/">Home</a>
    <a class="nav-link nav-link-ltr" href="/about">About</a>
    <!-- <a class="nav-link nav-link-ltr" href="/blog">Writing</a> -->
    <div class="dropdown">
      Writing
      <div class="dropdown-content">
        <a class="nav-link nav-link-ltr" href="/blog">All Writing</a>
        <a class="nav-link nav-link-ltr"href="/blog/category/Everyday">Everyday Writing</a>
        <a class="nav-link nav-link-ltr"href="/blog/category/Poetry">Feelings & Poetry</a>
        <a class="nav-link nav-link-ltr"href="/blog/category/Data">Data Stories</a>
      </div>
    </div>
    <a class="nav-link nav-link-ltr" href="/now">Now Page</a>
    <a class="nav-link nav-link-ltr" href="/portfolio">Portfolio</a>
    <a class="nav-link nav-link-ltr" href="/contact">Contact</a>
  </div>
</header>
