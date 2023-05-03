<script>
import Banner from '$lib/assets/Face_chart cropped 2.png'
import DataStory from '$lib/assets/Data_stories.png'
import Writing from '$lib/assets/Daily Writing.jpeg'
import Afripple from '$lib/assets/Afripple logo.png'
import Explainer from '$lib/assets/Africa Explainer.png'
import Logo from '$lib/assets/mini-logo.png'
</script>

<svelte:head>
<title>Home Page</title>
</svelte:head>

<style>

* {
  font-family: sans-serif;
}

.title-container {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  color: white;
  background-color: #000000;
}

.flex-title {
  flex: 35%;
  align-self: center;
  animation-name: title-ani;
  animation-duration: 2s;
}

@keyframes title-ani {
  from {opacity: 0%;}
  to {opacity: 100%;}
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
  color: #FF6600;
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
  background-color: #ffffff;
  font-size: 38px;
}


.mid-link {
  display: inline-block;
  font-weight: bold;
  font-size: 25px;
  color: #000000;
  padding: 20px 0px;
  margin: 0px 20px;
  text-transform: uppercase;
  align-items: center;
}

.mid-link a{
  background-image: linear-gradient(to right, rgba(255,255,255,0) 50%,#FF6600 50%);
  background-position: -0% 0;
  background-size: 200% auto;
  color: #000000;
  text-decoration: none;
  transition: background-position 200ms ease-out;

}

.mid-link a:hover {
  background-position: -99.99% 0;
  color: #ffffff;
}

.sec-2-container {
  display: flex;
  flex-wrap: wrap;
  color: white;
  background-color: #000000;
  margin: 5%;
}

.mid-text-flex {
  flex:50%;
  text-align: left;
  padding: 5%;
  font-size: 20px;
  font-weight: 300;
}

.mid-image-flex {
  flex:30%;
  align-self: center;
}

.page-img {
  width: 100%;
  border-radius: 20px;
}

.sec-3-container {
  display: flex;
  flex-wrap: wrap;
  color: white;
  background-color: #000000;
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
  }

  .mid-image-flex {
    flex: 100%;
    align-self: center;
  }

  .page-img {
    width: 100%;
    height: auto;
  }
}

.sec-4-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.sec-item {
  flex: 20%;
  width: 100%;
  margin: 1%;
}

@media screen and (max-width:800px) {
  .sec-4-container {
    flex-direction: column;
  }

  .sec-item {
    width: 100%;
    height: auto;
    margin: 0%;
  }
}

</style>

<div class="title-container">
  <div class="flex-title">
    <h2> <span style="background-color: #FF6600"><strong>Hi, I'm Obinna.</strong></span> A writer with a love for technology </h2>
  </div>
  <div class="flex-image">
  <img class="banner-img" src={Banner} alt="Obinna_mic">
  </div>
</div>

<!-- Brief intro and into about me 1st draft -->
<!-- <div class="sec-1-container">
  <h3>In the business of telling stories & shifting perspectives through</h3>

  <div class="midbar">
    <div class="mid-link"><a href="/">Infographics</a></div>
    <div class="mid-link"><a href="/">Spoken Word</a></div>
    <div class="mid-link"><a href="/">Building Community</a></div>
  </div>

</div> -->

<!-- The 2 inside page bars -->
<!-- <div class="sec-2-container">
  <div class="mid-text-flex">
  <h3>Data Stories & Infographics</h3>
  <p> Explainer videos are the best! In general I'm a fan of content that seeks to breakdown how the world works.
  Moving from consumer to producer, I make my own graphics and web experiences to describe the world we live in using data.
  Check out my catelog so far! </p>
  </div>
  <div class="mid-image-flex">
    <img class="page-img" src={DataStory} alt="Data_story_graphic">
  </div>
</div>
<div class="sec-3-container">
  <div class="mid-image-flex">
    <img class="page-img" src={Writing} alt="Writing_graphic">
  </div>
  <div class="mid-text-flex">
  <h3>Feelings & Poetry</h3>
  <p> A self proclaimed writer & poet. I right reflections from my podcast as well as poetry centred the process of making progress</p>
  </div>
</div> -->

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
      <p>I talk alot! It's a hobby if I'm honest. A good chunk of that is asking questions both to google and actual people.
      When I first graduated from University a big question is how does life actually work for people like me. Afripple is a blog
      dedicated to the everyday stories of Africans living outside of their home country. If you are as curious as I am about
      about other people's business this could be a good resource for you</p>
    </div>
  </div>
  <div class="sec-item">
    <div class="mid-image-flex">
      <img class="page-img" src={Logo} alt="Writing_graphic">
    </div>
    <div class="mid-text-flex">
      <h3>Book on the way</h3>
      <p>A book about finding my voice through poetry and getting out there</p>
    </div>
  </div>
  <div class="sec-item">
    <div class="mid-image-flex">
      <img class="page-img" src={Explainer} alt="Writing_graphic" href="https://www.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw">
    </div>
    <div class="mid-text-flex">
      <h3><a href="https://www.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw">Check out my explainer website</a></h3>
      <p>I make explainer videos talking about different topics in relation to Africa.
      <br>
      From history to economics or honestly whatever I can think of. It's a bit weird
      that as much I identify as Nigerian I don't know that much about my country or those surrounding me.
      <br>
      This is an attempt to rectify that in a fun way. Thus the birth of the African Explainer :D</p>
    </div>
  </div>
</div>
