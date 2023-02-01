<style>

/* overall footer rules */
* {
    box-sizing: border-box;
    font-family: ’Helvetica’, sans-serif;
    margin: 0;
    padding: 0;
}
ul {
    list-style: none;
    padding-left: 0;
}
footer {
    background-color: #000000;
    color: #ffffff;
    line-height: 1.5;
}
footer a {
    text-decoration: none;
    color: #ffffff;
}
a:hover {
    text-decoration: underline;
}
.ft-title {
    color: #ffffff;
    font-family: ’Helvetica’, sans-serif;
    font-size: 1.375rem;
    padding-bottom: 0.625rem;
}

/* Main Footer */
body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
.container {
    flex: 1;    /* same as flex-grow: 1; */
}

.ft-main {
    padding: 1.25rem 1.875rem;
    display: flex;
    flex-wrap: wrap;
}
.ft-main-item {
    padding: 1.25rem;
    min-width: 12.5rem /*200px*/;
}

@media only screen and (min-width: 29.8125rem /*477px*/) {
    .ft-main {
        justify-content: space-around;
    }
}
@media only screen and (min-width: 77.5rem /*1240px*/ ) {
    .ft-main {
        justify-content: space-evenly;
    }
}

/* Social Footer */

.ft-social {
    padding: 0 1.875rem 1.25rem;
}
.ft-social-list {
    display: flex;
    justify-content: center;
    border-top: 1px #ffffff solid;
    padding-top: 1.25rem;
}
.ft-social-list li {
    margin: 0.5rem;
    font-size: 1.25rem;
}

/* Legal footer at the end */
.ft-legal {
    padding: 0.9375rem 1.875rem;
    background-color: #000000;
}
.ft-legal-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.ft-legal-list li {
    margin: 0.125rem 0.625rem;
    white-space: nowrap;
}
/* one before the last child */
.ft-legal-list li:nth-last-child(2) {
    flex: 1;       /* same as flex-grow: 1; */
}
</style>

<footer>
  <!-- Footer main -->
  <section class="ft-main">
    <div class="ft-main-item">
      <h2 class="ft-title">About</h2>
      <ul>
        <li><a href="/about">About Me</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/now">Now Page</a></li>
        <li><a href="https://afripple.co.uk/">Afripple</a></li>
      </ul>
    </div>
    <div class="ft-main-item">
      <h2 class="ft-title">Resources</h2>
      <ul>
        <li><a href="/blog">All Writing</a></li>
        <li><a href="/blog/category/Everyday">Everyday Writing</a></li>
        <li><a href="/blog/category/Poetry">Feelings & Poetry</a></li>
        <li><a href="/blog/category/Data">Data Stories</a></li>
      </ul>
    </div>
    <div class="ft-main-item">
      <h2 class="ft-title">Contact</h2>
      <ul>
        <li><a href="/contact">Contact Me</a></li>
      </ul>
    </div>
    <div class="ft-main-item">
      <h2 class="ft-title">Social Links</h2>
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="https://github.com/iwuji1">Github</a></li>
        <li><a href="https://www.linkedin.com/in/obinnaiwuji/">LinkedIn</a></li>
        <li><a href="https://www.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw">Youtube</a></li>
      </ul>

      <!-- <form>
        <input type="email" name="email" placeholder="Enter email address">
        <input type="submit" value="Subscribe">
      </form> -->
    </div>
  </section>

  <!-- Footer social -->
  <!-- <section class="ft-social">
    <ul class="ft-social-list">
      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="https://github.com/iwuji1"><i class="fab fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/obinnaiwuji/"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="https://studio.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"><i class="fab fa-youtube"></i></a></li>
    </ul>
  </section> -->

  <!-- Footer legal -->
  <section class="ft-legal">
    <ul class="ft-legal-list">
      <li><a href="#">Terms &amp; Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li>© 2022 Obinna Iwuji</li>
      <li>Made with SvelteKit, hosted on Gitpages</li>
    </ul>
  </section>
</footer>
