<script>
  import HM from '$lib/assets/Happyman_PC-2.jpg'
  import africatime from '$lib/assets/Africa_independence_1.jpeg'
  import military from '$lib/assets/Military spending banner.png'
  // import { gsap } from "gsap/dist/gsap";
  // import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import gsap from 'gsap';
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from 'svelte';

  onMount(() => {

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".container"
    });

    gsap.to(".circle-1", {
      scrollTrigger: ".circle-1",
      duration: 2,
      x: -200,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".circle-2", {
      scrollTrigger: ".circle-2",
      duration: 2,
      x: 200,
      repeat: -1,
      yoyo: true,

    });

    gsap.to(".circle-3", {
      scrollTrigger: ".circle-3",
      duration: 2,
      y: 100,
      repeat: -1,
      yoyo: true,

    });

    gsap.to(".circle-4", {
      scrollTrigger: ".circle-4",
      duration: 2,
      y: -100,
      repeat: -1,
      yoyo: true,

    });

    gsap.to(".circle-4", {
      scrollTrigger: {
        trigger: "section .panel .timeline",
        toggleClass: "active",
      },
      duration: .5,
      fill: "#FFA500",
      ease: "none"
    });




});

</script>

<svelte:head>
<title> Portfolio Page</title>
</svelte:head>

<style>

/* CSS button */
.button-28 {
  appearance: none;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
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
  color: #1A1A1A;
  background-color: #ffffff;
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
	overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.mid-sec {
  flex: 60%;
  text-align: right;
  padding-right: 2%;
  line-height: 1.6;
  z-index: 5;
}

.mid-img {
  flex: 100%;
  z-index: 5;
}

.card-img {
  width: 100%;
  height: auto;
}

@media screen and (max-width:900px) {

  section.panel.happyman {
    padding-left: 5%;
    padding-right: 5%;
  }

  section.panel.timeline {
    padding-left: 5%;
    padding-right: 5%;
  }

  section.panel.design-course {
    padding-left: 5%;
    padding-right: 5%;
  }

  section.panel.happyman {
    padding-left: 5%;
    padding-right: 5%;
  }

  .happyman {
    flex-direction: column;
    justify-content: center;
  }

  .timeline {
    flex-direction: column;
    justify-content: center;
  }

  .design-course {
    flex-direction: column;
    justify-content: center;
  }

  .mid-sec {
    flex: 100%;
    text-align: center;
    font-size: 35px;
    padding: 0;
    z-index: 0;
  }

  .mid-img {
    flex: 100%;
    width: 100%;
    z-index: 0;
  }

  svg {
    visibility: hidden;
  }

}

.happyman {
  display: flex;
  background-color: #228B22;
  padding-top: 20%;
  padding-left: 25%;
  padding-right: 25%;
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

.circle {
  height: 50px;
  width: 50px;
  background-color: #555;
  border-radius: 50%;
}

.section-background {
  color: #999999;
  position: absolute;
  top: 10%;
  bottom: 0;
  height: 100%;
  width: 50%;
}

svg {
  stroke: none;
  position: absolute;
}

</style>

<div class="container">
  <section class="panel happyman">
  	<div class="mid-sec">
      <h1>Happy Man Foods</h1>
      <p> As part of the launch of Happy man foods, I created a custom web experience,
      for customers to buy food and explore the services of the happyman. In addition, I created
      a custom explainer video called #FoodisNotLuxury</p>
      <h4>Tools: Squarespace, Figma, Adobe After E</h4>
      <a href="https://www.happymanfoods.com"><button class="button-28" role="button">Go to Site</button></a>
      <a href="/blog/Happyman-process"><button class="button-28" role="button">The process</button></a>
    </div>
    <div class="mid-img">
      <img class="card-img" src={HM} alt="HM_image">
    </div>
    <div class="section-background">
      <svg width="100%" height="100%">
        <circle class= "circle-4" cx="70%" cy="55%" r="200" fill="#20A001" />
        <circle class= "circle-3" cx="40%" cy="50%" r="200" fill="#20A001" />
        <circle class= "circle-2" cx="50%" cy="68%" r="200" fill="#20A001" />
        <circle class= "circle-1" cx="70%" cy="38%" r="200" fill="#20A001" />
      </svg>
    </div>
  </section>
  <section class="panel timeline">
    <div class="mid-sec">
      <h1>African Independence Timeline</h1>
      <p> When you research facts about the continent of Africa, many of the webpages tend to be bland and static.
      Through this project I attempted to remodel a standard table of African independence into something a bit more interactive</p>
      <h4>Tools: Svelte, Illustrator, D3, GSAP, javascript</h4>
      <a href="https://joyful-starburst-06408d.netlify.app/"><button class="button-28" role="button">Go to Site</button></a>
      <a href="/blog/Africa-timeline-process"><button class="button-28" role="button">The Process</button></a>
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

      <h4>Tools: Illustrator, Flourish</h4>
      <a href="https://afripple.co.uk/african-military-spending-2022/"><button class="button-28" role="button">Go to Site</button></a>
    </div>
    <div class="mid-img">
      <img class="card-img" src={military} alt="Military Spending">
    </div>
  </section>
</div>
