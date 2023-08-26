<script>
  export let data
  import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'
</script>

<svelte:head>
<title>Blog</title>
<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<style>


li {
  list-style: none;
  padding-left: 0;
}

h1 {
  text-align: center;
}

h2 {
  color: #FF6600;
}

.container {
  display: flex;
}

img {
  width: auto;
  height: 5%;
}

p {
  text-align: left;
  font-size: 1rem;
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
    text-align: left;
  }

  .feat-img {
    width: 100%;
    height: auto;
    border-radius: 5%;
  }

  .feat-text {
    font-size: 1.5rem;
    font-family: "Helvetica";
    text-decoration: none;
  }
</style>

<h1>My Writing</h1>

<div class="container">
  <div class="posts">
    {#each data.posts as post}
      <div class="post">
        <div class="post-img">
          <a href={post.path}>
            <img class="feat-img" src={post.meta.coverImage} alt="Featured_image">
          </a>
        </div>
        <div class="post-text">
          <a href={post.path}>
          <h2 class="feat-text">{post.meta.title}</h2>
          </a>
          <p>{post.meta.description}</p>
        </div>
      </div>
      {/each}
  </div>
</div>

<Pagination currentPage={1} totalPosts={data.total} />
