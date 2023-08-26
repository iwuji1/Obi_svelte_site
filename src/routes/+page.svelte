<script>
import Banner from '$lib/assets/Face_chart cropped 2.png'
import DataStory from '$lib/assets/Data_stories.png'
import Writing from '$lib/assets/Daily Writing.jpeg'
import Afripple from '$lib/assets/Afripple logo v2.png'
import Explainer from '$lib/assets/Africa Explainer.png'
import Logo from '$lib/assets/mini-logo.png'

import { onMount } from 'svelte';
import { fly } from 'svelte/transition';

let ready = false;
onMount(() => ready = true);
</script>

<svelte:head>
<title>Home Page</title>
</svelte:head>

<style>

.title-container {
  display: flex;
  text-align: left;
  height: 70vh;
  flex-direction: column;
}

.flex-title {
  align-self: center;
  justify-content: center;
  margin-bottom: 50%;
}

mark {
  color: #ffffff;
  animation: 1s lit 0.5s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, #FF6600 50%, rgba(0, 0, 0, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
}

.flex-image {
  flex:50%;
  padding-left: 5px;
  margin: 0%;
}



.banner-img {
  width: 100%;
}

h2 {
  margin-left: 5%;
  font-size: 50px;
  font-weight: 200;
  font-family: "Helvetica";
}

h3 {
  margin-left: 5%;
  color: #FF6600;
  font-family: "Helvetica";
  background: #faf2e8;
  margin-right: 62%;
}

@media screen and (max-width:800px) {
  .title-container {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }

  .flex-title {
    flex:100%;
    height: 50vh;
  }

  .flex-image {
    flex: 100%;
    padding: 0;
  }

  .banner-img {
    width: 100%;
    height: auto;
  }

}

.sec-1-container {
  text-align: center;
  font-size: 38px;
}

.sec-2-container {
  display: flex;
  flex-wrap: wrap;
  color: white;
  background-color: #ffffff;
  margin: 5%;
}

.mid-text-flex {
  flex:50%;
  text-align: left;
  font-size: 20px;
  font-weight: 300;
  align-self: center;
  justify-content: center;
  padding-left: 15%;
  padding-right: 5%;
}

.mid-text-flex p {
  color: #000000;
}

.mid-text-flex a {
  color: #FF6600;
}

.mid-image-flex {
  flex:50%;
  align-self: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-img {
  width: 70%;
  border-radius: 20px;
  transition: transform .4s;
  overflow: hidden;
}

.page-img:hover {
  transform: scale(1.01);
  transform-origin: 50% 50%;
}

.sec-3-container {
  display: flex;
  flex-wrap: wrap;
  color: white;
  background-color: #ffffff;
  margin: 5%;
}

@media screen and (max-width:800px) {
  .sec-2-container .sec-3-container {
    flex-direction: column;
    align-items: center;
    justtify-content: center;
  }

  .mid-text-flex {
    text-align: center;
    padding: 0;
  }

  .mid-image-flex {
    /* flex: 50%; */
    /* align-self: center; */
  }

  .page-img {
    width: 100%;
    height: auto;
  }
}

.sec-4-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sec-item {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: auto;
  margin: 2%;
}

@media screen and (max-width:800px) {
  .sec-4-container {
    flex-direction: column;
  }

  .sec-item {
    width: 100vw;
    height: auto;
    margin: 0%;
    flex-direction: column;
  }

  .page-img {
    border-radius: 0px;
  }
}

</style>

<div class="title-container">
  <div class="flex-title">
    <h2> <strong>Hi, I'm Obinna.</strong> A writer with a love for technology </h2>

    <h3><a href="/about">Learn More about me</a></h3>
  </div>
</div>

<!-- triple column section -->
<div class="sec-1-container">
<h3> Things I'm working on </h3>
</div>

<div class="sec-4-container">
  <div class="sec-item">
    <div class="mid-image-flex">
      <img class="page-img" src={Afripple} alt="Writing_graphic" href="https://afripple.co.uk/">
    </div>
    <div class="mid-text-flex">
      <h3><a href="https://afripple.co.uk/">Podcast</a></h3>
      <p> Afripple is a podcast dedicated to the everyday stories of Africans living outside of their home country. If you are as curious as I am about
      about other people's business this could be a good resource for you</p>
    </div>
  </div>
  <div class="sec-item">
    <div class="mid-image-flex">
      <img class="page-img" src={Logo} alt="Writing_graphic">
    </div>
    <div class="mid-text-flex">
      <h3><a href="#">Book on the way</a></h3>
      <p>A book about finding my voice through poetry and getting out there</p>
    </div>
  </div>
  <div class="sec-item">
    <div class="mid-image-flex">
      <img class="page-img" src={Explainer} alt="Writing_graphic" href="https://www.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw">
    </div>
    <div class="mid-text-flex">
      <h3><a href="https://www.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw">Check out my explainer website</a></h3>
      <p>I make explainer videos talking about different topics in relation to Africa.</p>
    </div>
  </div>
</div>
