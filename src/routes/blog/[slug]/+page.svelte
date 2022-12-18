<script>
  export let data;
</script>

<style>
* {
  font-family: "Helvetica";
}

li {
  list-style: none;
  padding-left: 0;
}

h1 {
  margin-left: 5%;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  font-family: "Helvetica";
}

h2 {
  color: #FF6600;
}
.container {
  display: flex;
}

.side-bar {
  width: 20%;
  margin-left: 10%;
  padding-bottom: 10%;
  margin-bottom: 10%;
  position: fixed;
  z-index: 1; /* Stay on top */
  height: 25vh;
}

.side-link {
  font-weight: bold;
  color: #000000;
  text-transform: uppercase;
}

.side-link a{
  background-image: linear-gradient(to right, rgba(255,255,255,0) 50%,#FF6600 50%);
  background-position: -0% 0;
  background-size: 200% auto;
  color: #000000;
  text-decoration: none;
  transition: background-position 200ms ease-out;

}

.side-link a:hover {
  background-position: -99.99% 0;
  color: #ffffff;
}


  .posts {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 25%;
    /* margin-right: 15%; */
  }

  .post {
    flex: 30.333%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .post-img {

  }

  .post-text {
    text-align: center;

  }

  .feat-img {
    width: 100%;
  }

  .feat-text {
    font-weight: 100;
    font-family: "Helvetica";
    text-decoration: none;
  }

</style>

<div class="container">
  <div class="side-bar">
    <h2 class="sb-title">Categories</h2>
      <ul>
        <li class="side-link"><a href="/blog">All Writing</a></li>
        <li class="side-link"><a href="/blog/category/Everyday">Everyday Writing</a></li>
        <li class="side-link"><a href="/blog/category/Poetry">Feelings & Poetry</a></li>
        <li class="side-link"><a href="/blog/category/Data">Data Stories</a></li>
      </ul>

    <h2 class="sb-title">More Links</h2>
      <ul>
        <li class="side-link"><a href="/about">About Me</a></li>
        <li class="side-link"><a href="/portfolio">Portfolio</a></li>
        <li class="side-link"><a href="/now">Now Page</a></li>
        <li class="side-link"><a href="#">Afripple</a></li>
      </ul>
  </div>
  <div class="post">
    <article>
      <img class="feat-img" src={data.image} alt="Featured_image">
      <h1 class="banner">{ data.title }</h1>
      <p>Published: {data.date}</p>
      <p class="text"><svelte:component this={data.content} /></p>
    </article>
  </div>
</div>
