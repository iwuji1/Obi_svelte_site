<script>
import DataStory from '$lib/assets/Data_stories.png';
import Writing from '$lib/assets/Daily Writing.jpeg';
import Afripple from '$lib/assets/Afripple logo v2.png';
import Explainer from '$lib/assets/Africa Explainer.png';
import Logo from '$lib/assets/mini-logo.png';

import gsap from 'gsap';
import { onMount } from 'svelte';

	onMount(() => {

  })

</script>

<svelte:head>
<title>Home Page</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"></script>
</svelte:head>

<style>

.title-container {
  display: flex;
  text-align: center;
  flex-direction: column;
}

.flex-title {
  align-self: center;
  justify-content: center;
}

h2 {
  margin-left: 2%;
  margin-right: 2%;
  font-size: 50px;
  font-weight: 200;
  font-family: "Helvetica";
}

h3 {
  margin-left: 5%;
  color: var(--accent);
  font-family: "Helvetica";
}

@media screen and (max-width:800px) {
  .title-container {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }

  h3 {
      margin-right: 0%;
      margin-left: 0%;
  }

  .flex-title {
    flex:100%;
    height: 50vh;
  }

}

.sec-1-container {
  text-align: center;
  font-size: 38px;
  background: var(--lightAccent);
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
  color: var(--accent);
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
  background: var(--lightAccent);
}

.sec-item {
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  height: 90vh;
  margin: 0%;
  background: var(--lightAccent);
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

<div class="title-container item">
  <div class="flex-title">
    <h1>Hi, I'm Obinna.</h1>
    <h2>A writer with a love for technology </h2>
    <a href="/about"><button class="button-28" role="button">Learn More About Me</button></a>
  </div>

  <!-- <div class="box">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div> -->
</div>

<!-- triple column section -->
<div class="sec-1-container item">
<h1> Things I'm working on </h1>
</div>

<div class="sec-4-container">
  <div class="sec-item item">
    <div class="mid-image-flex">
      <img class="page-img" src={Afripple} alt="Writing_graphic" href="https://afripple.co.uk/">
    </div>
    <div class="mid-text-flex">
      <h3><a href="https://afripple.co.uk/">Podcast</a></h3>
      <p> Afripple is a podcast dedicated to the everyday success stories of Africans living outside of their home country. If you are as curious as I am about
      about other people's business this could be a good resource for you</p>
    </div>
  </div>
  <div class="sec-item item">
    <div class="mid-image-flex">
      <img class="page-img" src={Logo} alt="Writing_graphic">
    </div>
    <div class="mid-text-flex">
      <h3><a href="#">Book on the way</a></h3>
      <p>A book about finding my voice through poetry and getting out there</p>
    </div>
  </div>
  <div class="sec-item item">
    <div class="mid-image-flex">
      <img class="page-img" src={Explainer} alt="Writing_graphic" href="https://www.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw">
    </div>
    <div class="mid-text-flex">
      <h3><a href="https://www.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw">Check out my explainer website</a></h3>
      <p>I make explainer videos talking about different topics in relation to Africa.</p>
    </div>
  </div>
</div>
