<script>
import { base } from '$app/paths';
</script>

<style>
header {
  background: black;
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
  color: #ffffff;
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

</style>

<header>
  <div class="navbar">
    <a class="nav-link nav-link-ltr" href="{base}/">Home</a>
    <a class="nav-link nav-link-ltr" href="{base}/about">About</a>
    <a class="nav-link nav-link-ltr" href="{base}/blog">Writing</a>
    <a class="nav-link nav-link-ltr" href="{base}/now">Now Page</a>
    <a class="nav-link nav-link-ltr" href="{base}/portfolio">Portfolio</a>
    <a class="nav-link nav-link-ltr" href="{base}/contact">Contact</a>
  </div>
</header>
