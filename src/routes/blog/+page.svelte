<script>
import { base } from '$app/paths';
export let data
</script>

<svelte:head>
<title>Blog</title>
</svelte:head>

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

<h1>My Writing</h1>

<!-- <ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Category: {post.meta.categories}
    </li>
  {/each}
</ul> -->
<div class="container">
  <div class="side-bar">
    <h2 class="sb-title">Categories</h2>
      <ul>
        <li class="side-link"><a href="{base}/blog">All Writing</a></li>
        <li class="side-link"><a href="{base}/blog/category/Everyday">Everyday Writing</a></li>
        <li class="side-link"><a href="{base}/blog/category/Poetry">Feelings & Poetry</a></li>
        <li class="side-link"><a href="{base}/blog/category/Data">Data Stories</a></li>
      </ul>

    <h2 class="sb-title">More Links</h2>
      <ul>
        <li class="side-link"><a href="{base}/about">About Me</a></li>
        <li class="side-link"><a href="{base}/portfolio">Portfolio</a></li>
        <li class="side-link"><a href="{base}/now">Now Page</a></li>
        <li class="side-link"><a href="#">Afripple</a></li>
      </ul>
  </div>
  <div class="posts">
    {#each data.posts as post}
      <div class="post">
        <div class="post-img">
          <a href={post.path}>
            <img class="feat-img" src={post.meta.image} alt="Featured_image">
          </a>
        </div>
        <div class="post-text">
          <a href={post.path}>
          <h2 class="feat-text">{post.meta.title}</h2>
          </a>
        </div>
      </div>
      {/each}
  </div>
</div>
<!-- {#if data.categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each data.categories as category}
        <li>
          <a href="/blog/category/{category}">
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if} -->
