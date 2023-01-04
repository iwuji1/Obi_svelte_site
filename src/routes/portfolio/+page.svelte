<script>
  import HM from '$lib/assets/Happyman_PC-2.jpg'
  import africatime from '$lib/assets/Africa_independence_1.jpeg'
  import military from '$lib/assets/Military spending banner.png'
  import { gsap } from "gsap/dist/gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);


</script>

<svelte:head>
<title> Portfolio Page</title>
</svelte:head>

<style>

/* CSS button */
.button-28 {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

.button-28:disabled {
  pointer-events: none;
}

.button-28:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}

.panel {
  scroll-snap-align: start;
  height: 100vh;
}

.container {
  max-height: 100vh;
	overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.mid-text {
  flex: 30%;
  text-align: center;
}

.mid-img {
  flex: 100%;
}

.card-img {
  width: 100%;
  height: auto;

}

.happyman {
  display: flex;
  background-color: #228B22;
  padding-top: 20%;
  padding-left: 30%;
  padding-right: 30%;
  color: #ffffff;
}

.timeline {
  display: flex;
  background-color: #520ee6;
  padding-top: 20%;
  padding-left: 30%;
  padding-right: 30%;
  color: #ffffff;
}

.design-course {
  display: flex;
  background-color: #427ef5;
  padding-top: 20%;
  padding-left: 30%;
  padding-right: 30%;
  color: #ffffff;
}

</style>
<div class="container">
  <section class="panel happyman">
  	<div class="mid-sec">
      <h1>Happy Man Foods</h1>
      <p> As part of the launch of Happy man foods, I created a custom web experience,
      for customers to buy food and explore the services of the happyman. In addition, I created
      a custom explainer video called #FoodisNotLuxury</p>
      <a href="www.happymanfoods.com"><button class="button-28" role="button">Go to Site</button></a>
    </div>
    <div class="mid-img">
      <img class="card-img" src={HM} alt="HM_image">
    </div>
  </section>
  <section class="panel timeline">
    <div class="mid-sec">
      <h1>African Independence Timeline</h1>
      <p> When you research facts about the continent of Africa, many of the webpages tend to be bland and static.
      Through this project I attempted to remodel a standard table of African independence into something a bit more interactive</p>
      <a href="https://iwuji1.github.io/African-Independence-Timeline/"><button class="button-28" role="button">Go to Site</button></a>
    </div>
    <div class="mid-img">
      <img class="card-img" src={africatime} alt="Africa-Independence">
    </div>
  </section>
  <section class="panel design-course">
    <div class="mid-sec">
      <h1>Visual Communication Project</h1>
      <p> As a way to upskill I took a course on visual communication, from award-wining designer Valentino D'fillipo
      It was very insightful using design principles to better highlight and organize date & information. The result
      was the following graphic</p>
      <a href="https://afripple.co.uk/african-military-spending-2022/"><button class="button-28" role="button">Go to Site</button></a>
    </div>
    <div class="mid-img">
      <img class="card-img" src={military} alt="Military Spending">
    </div>
  </section>
</div>
