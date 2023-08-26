---
title:  "Designing 400 years of Meteorites"
date:   "2023-08-26"
categories:
  - "Portfolio"
  - "Data"
description: Here I outline how I went about using processing to create static data vis of 400 years of meteorite strikes.
coverImage: "/assets/meteorStrikes.png"
coverWidth: 3
coverHeight: 3
---

<script>
	import Callout from '$lib/components/Callout.svelte';
</script>

## Summary of the project

For most of my dataviz journey I have been using D3 to creative interactive pieces and then straight illustrator for static images. And illustrator is great for this. However, there is one source of frustration I have for doing data projects on illustrator, and that is you cannot use large datasets on illustrator because it's just a lot of manual work to process all of that.

In the past I had used p5, honestly to learn how to code but also to practice data art. P5 is the JavaScript version of processing (learn more about processing [here](https://processing.org/) and p5 [here](https://p5js.org/), which is what I used to create the below visualization!

The inspiration for this piece came from this skill share course I completed previously which I definitely recommend here.

## Into the process

<Callout>
The data comes from a public data set of meteor strikes over the past 400 years which in total are 34,000 lines of data.
</Callout>

![Excel Meteor Preview!](/assets/Excel_meteor_SS.png "Preview of excel sheet")

Just over 34K rows of data in excel! The challenge here was how to visualize as much information as possible from this data into a standard visual output. The data included, the place where the meteor landed, the year that it landed, it's mass, longitude and latitutude co-ordinates and whether it was actually found in that place.

I did some basic restructuring of the data to order it by mass, as the idea from the beginning was that the mass would be the size of the circle. And I would attempt it to categorize it through color using the years to make a basic chart and see what that looked like. And of course with Long and Lat comes a map. So I sued the below base map as the background and guideline for the piece.

Now it's coding time, if you want some strong details about the coding process I suggest using the course, but through following along. I was able to create the below:

![First draft of Meteor graphic using processing!](/assets/meteorStrikes_d1.png "Meteor landings draft 1")

Some advantages to using processing, mapping data to objects is very easy! It draws onto a canvas on loop so you can iteratively change values as it loops through. You are able to bring in different fonts into the program so text can be formatted. It's very easy to make quick prototypes, so I'll definitely use it more often and hopefully with more abstract approaches.

From there I exported to illustrator as an SVG and made the colour changes, added text allowing us to get to this final output

![Final draft of Meteor graphic using processing!](/assets/meteorStrikes.png "Meteor landings draft 1")

***Tools: Processing, SVG, Illustrator***
