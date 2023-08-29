<script>
  export let data
  import DataStory from '$lib/assets/Data_stories.png'
  import { onMount } from 'svelte';

  console.log(data)
</script>

<svelte:head>
  <title> Portfolio Page</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</svelte:head>

<style>

h1 {
  text-align: center;
  font-weight: bolder;
  font-size: 3rem;
}

</style>

<h1>Portfolio</h1>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    {#each data.posts as post,i}
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1+i} aria-label="Slide {1+i}"></button>
    {/each}
  </ol>
  <div class="carousel-inner d-flex">
    <div class="carousel-item active">
      <img class="d-block" src={DataStory} alt="First Slide">
      <div class="carousel-caption">
        <h3>Data Stories</h3>
        <p>I post data socials on instagram, take a look at the different stories</p>
        <button class="button-28" role="button">See Me</button>
      </div>
    </div>
    {#each data.posts as post,i}
      <div class="carousel-item">
        <img class="d-block" src={post.meta.coverImage} alt="Slide {1+i}">
        <div class="carousel-caption">
          <h3>{post.meta.title}</h3>
          <p>{post.meta.description}</p>
          <button class="button-28" role="button" href={post.path}>See Me</button>
        </div>
      </div>
    {/each}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
