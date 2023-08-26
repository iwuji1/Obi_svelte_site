<script>
  import Profile from '$lib/assets/Obinna_Portrait.jpg'
  import Afripple from '$lib/assets/Afripple logo.png'
  import DataStory from '$lib/assets/Data_stories.png'
  import Explainer from '$lib/assets/Africa Explainer banner 2.png'
</script>

<svelte:head>
<title> About Me</title>
</svelte:head>

<style>

h2 {
  color: #FF6600;
  font-size: 40px;
}

h3 {
  color: #FF6600;
  font-size: 30px;
  font-weight: 300;
  text-decoration: underline;
}

.center {
  text-align: center;
}

.text {
  font-weight: 300;
}
.banner {
  text-align: center;
  font-size: 40px;
}


.sec_1 {
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
}

.sec-text {
  flex: 50%;
  font-size: 18px;
  font-weight: 200;
}

.sec-img {
  flex: 50%;
  align-self: center;
  padding-left: 10%;
}

.profile-img {
  width: 100%;
  border-radius: 5%;
}

@media screen and (max-width:800px) {
  .sec_1 {
    flex-direction: column;
    text-align: center;
  }
}

.projects {
  margin-left: 5%;
  margin-right: 5%;
}

.proj-card {
  display: flex;
  margin: 5%;
}

.proj-img {
  flex: 20%;
  align-self: center;
}

.card-img {
  width: 100%;
  height: auto;
  border-radius: 5%;
}

.proj-text {
  flex: 60%;
  padding-left: 5%;
  vertical-align: middle;
}

@media screen and (max-width:800px) {
  .proj-card {
    flex-direction: column;
    text-align: center;
  }
}

</style>

<div class="banner">
  <h1> About Me</h1>
</div>

<div class="sec_1">
  <div class="sec-text">
    <h2>What do I do?</h2>
    <p> I'm in the business of shifting perceptions.<br>
    I have 3 main ways of doing this.
    <br>
    <br>
    One is through information design, using data as a storytelling tool, to highlight trends, patterns, and ideas. To explain what gets bogged down by legions of excel sheets and numbers, through images and interactivity.`
    <br>
    <br>
    Another way is through spoken word. My excuse for my love of talking! I use a mix of poetry and speech as I attempt to create evocative images and arguments to prompt questions and discussion.
    <br>
    <br>
    And finally, building community. From running workshops to building community projects or running events; community is a fundamental pillar of the work I do and a massive engine in provoking shifts in perception.
    </p>
  </div>
  <div class="sec-img">
    <img class="profile-img" src={Profile} alt="obi_image">
  </div>
</div>

<div class="projects">
<h2 class="center">My Projects</h2>
  <div class="proj-card">
    <div class="proj-img">
      <img class="card-img" src={Afripple} alt="Afripple logo">
    </div>
    <div class="proj-text">
      <h3><a href="https://afripple.co.uk/">Afripple blog / podcast</a></h3>
      <p class="text">I talk alot! It's a hobby if I'm honest. A good chunk of that is asking questions both to google and actual people.
      When I first graduated from University a big question is how does life actually work for people like me. Afripple is a blog
      dedicated to the everyday stories of Africans living outside of their home country. If you are as curious as I am about
      about other people's business this could be a good resource for you</p>
    </div>
  </div>

  <div class="proj-card">
    <div class="proj-img">
      <img class="card-img" src={DataStory} alt="Data Graphic">
    </div>
    <div class="proj-text">
      <h3><a href="/blog/category/Data">Data Stories</a></h3>
      <p class="text">For most of my professional life(Which is not very long at this point), I have been a data analyst.
      I like how data and visuals can help better understandings of complex issues whether that relates to
      revenue or migration patterns. I want to create more data stories to illuminate things I find interesting
      so here is a catalogue of my work thus far!</p>
    </div>
  </div>

  <div class="proj-card">
    <div class="proj-img">
      <img class="card-img" src={Explainer} alt="Africa Explainer Banner">
    </div>
    <div class="proj-text">
      <h3><a href="https://www.youtube.com/channel/UCv9oSIKjvzJYpICLBuAaVOw">Youtube Channel</a></h3>
      <p class="text">I make explainer videos talking about different topics in relation to Africa.
      <br>
      <br>
      From history to economics or honestly whatever I can think of. It's a bit weird that as much I identify as Nigerian I don't know that much about my country or those surrounding me.
      <br>
      <br>
      This is an attempt to rectify that in a fun way. Thus the birth of the African Explainer :D</p>
    </div>
  </div>

  <div class="proj-card">
    <div class="proj-img">
      <img class="card-img" src={Afripple} alt="Poetry image">
    </div>
    <div class="proj-text">
      <h3><a href="/blog/category/Poetry">Writing/Poetry</a></h3>
      <p class="text">I am a self proclaimed writer & Poet! Here is a catalogue of my writing. It varies from
      funny to serious, life stories to random musings; all important for me to develop this
      practice so that one day I can go from self proclaimed to actual. Hope you enjoy</p>
    </div>
  </div>
</div>
