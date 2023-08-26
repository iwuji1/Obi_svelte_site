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
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }

  @media screen and (max-width:800px) {
    .posts {
      flex-direction: column;
      width: 100%;
      text-align: center;
      margin:auto;
    }

    .post {
      flex: 100%;
    }

    .side-bar {
      visibility: hidden;
    }

    .post-img {
      height: 100%;
      width: auto;
    }

    .feat-img {
      width: 50%;
      height: auto;
    }

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
    width: 50%;
    height: auto;
    margin: auto;
  }

  .feat-text {
    font-weight: 100;
    font-family: "Helvetica";
    text-decoration: none;
  }

</style>

<div class="container">
  <div class="posts">
    <article>
      <img class="feat-img" src={data.coverImage} alt="Featured_image">
      <h1 class="banner">{ data.title }</h1>
      <p>Published: {data.date}</p>
      <p class="text"><svelte:component this={data.content} /></p>
    </article>
  </div>
</div>



{#if data.categories}
  <aside class="post-footer">
    <h2>Posted in: </h2>
    <ul>
      {#each data.categories as category}
        <li>
          <a href="/blog/category/{category}/">
            { category }
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}
