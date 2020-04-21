
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Strike Project</title>
    <meta name="description" content="Scrollama: Basic Example" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="https://unpkg.com/d3@5.9.1/dist/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

    <style>
        * {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, 'Helvetica Neue', sans-serif;
  min-height: 1280px;
  color: #3b3b3b;
  font-size: 24px;
}

.titlecard{
  height: 100%;
  width: 100%;
  background-color: #e60000;
}


p,
h1,
h2,
h3,
h4,
a {
  margin: 0;
  font-weight: 400;
}

#map { position: absolute; top: 0; bottom: 0; width: 100%; }
      
figure {
        position: -webkit-sticky;
        position: sticky;
        left: 0;
        width: 100%;
        margin: 0;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        background-color: #8a8a8a;
        z-index: 0;
}

nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background: #f3f3f3;
  padding: 1rem;
  padding-right: 5rem;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.nav__examples {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.nav__examples > * {
  margin-right: 0.5rem;
}

#intro {
  max-width: 40rem;
  margin: 1rem auto;
  text-align: center;
  margin-top: 250px;
  margin-bottom: 1000px;
  background-color: #e60000;
}

.intro__hed {
  font-weight: 900;
  font-size: 4.5em;
  margin: 2rem auto 0.5rem auto;
  text-shadow: rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px;  
  color: white;
}

.intro__dek {
  margin-top: 350px;
  color: white;
  text-shadow: rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px;  
}

#outro {
  height: 640px;
}
.ml4 {
  margin-top: -45px;
  position: relative;
  font-weight: 900;
  font-size: 4.5em;
  color: white;
  text-shadow: rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px;  
}
.ml4 .letters {
  position: absolute;
  left: 0;
  top: 0.3em;
  right: 0;
  opacity: 0; 
  color: white;
}

@media (min-width: 840px) {
  .nav__examples {
    margin-top: 0;
    margin-left: 2rem;
  }
}
      #scrolly {
        position: relative;
      }

      article {
        position: relative;
        padding: 0 1rem;
        margin: 0 auto;
      }

      .step {
        margin: 2rem auto 4rem auto;
      }

      .step.is-active {
      }

      .step p {
        text-align: center;
        padding: 1rem;
        font-size: 1.5rem;
      }
      .scroll__graphic {
  position: absolute;
  top: 0;
  left: 0;
  bottom: auto;
  width: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.scroll__graphic.is-fixed {
  position: fixed;
}

.scroll__graphic.is-bottom {
  bottom: 0;
  top: auto;
}

    </style>
  </head>

  <body>
    <main>
      <div class="titlecard">
        <section id="intro">
          <h1 class="intro__hed">The Strike
            <h1 class="ml4">
              <span class="letters letters-1">Wave?</span>
              <span class="letters letters-2">Virus?</span>
              <span class="letters letters-3">Rebellion?</span>
              <span class="letters letters-4">Feedback Loop?</span>
            <script>
            var ml4 = {};
            ml4.opacityIn = [0,1];
            ml4.scaleIn = [0.2, 1];
            ml4.scaleOut = 3;
            ml4.durationIn = 800;
            ml4.durationOut = 600;
            ml4.delay = 500;

            anime.timeline({loop: true})
              .add({
                targets: '.ml4 .letters-1',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
              }).add({
                targets: '.ml4 .letters-1',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
              }).add({
                targets: '.ml4 .letters-2',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
              }).add({
                targets: '.ml4 .letters-2',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
              }).add({
                targets: '.ml4 .letters-3',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
              }).add({
                targets: '.ml4 .letters-3',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
              }).add({
                targets: '.ml4 .letters-4',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
              }).add({
                targets: '.ml4 .letters-4',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
              }).add({
                targets: '.ml4',
                opacity: 0,
                duration: 500,
                delay: 500
              });
              </script>
            </h1>
          <h1 class="intro__dek">
            Examining metaphors for collective action. <br><br>by Brandon Daniels
          </h1>
        </section>
    </div>
      <section id="scrolly">
        <figure>
          <p><div id="map"></div></p>
        </figure>
        <article>
          <div class="step" data-step="1">
          </div>
          <div class="step" data-step="2">
            <p>STEP 2</p>
          </div>
          <div class="step" data-step="3">
            <p>STEP 3</p>
          </div>
          <div class="step" data-step="4">
            <p>STEP 4</p>
          </div>
        </article>
      </section>
      <section id="outro"></section>
    </main>
    <script>
        mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmRhbmllbHMxOTE3IiwiYSI6ImNrMm1tYjgwYTBqbDIzZHQ1dmdyNWZxeWcifQ.fdROqOxFdqnMmA6G_f_hgw';
        var map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/brandondaniels1917/ck7p8e3x103m81iqhe4xbeosm', // stylesheet location
          center: [-96.92126, 36.79253],
          zoom: 4, // starting zoom
          pitch: 60.00,
          bearing: 0.88
        });
        map.scrollZoom.disable();

      var main = d3.select("main");
      var scrolly = main.select("#scrolly");
      var figure = scrolly.select("figure");
      var article = scrolly.select("article");
      var step = article.selectAll(".step");

      // initialize the scrollama
      var scroller = scrollama();

      function handleResize() {
        var stepH = Math.floor(window.innerHeight);
        step.style("height", stepH + "px");

        var figureHeight = window.innerHeight;
        var figureMarginTop = 400;

        figure
          .style("height", figureHeight + "px")
          .style("top", figureMarginTop + "px");

        scroller.resize();
        }

      function handleStepEnter(response) {
        // response = { element, direction, index }
        console.log(response);
        // add to color to current step
        response.element.classList.add("is-active");
      }

      function handleStepExit(response) {
        // response = { element, direction, index }
        console.log(response);
        // remove color from current step
        response.element.classList.remove("is-active");
      }

      function setupStickyfill() {
        d3.selectAll(".sticky").each(function() {
          Stickyfill.add(this);
        });
      }

      function init() {
        setupStickyfill();
        handleResize();
        scroller
          .setup({
            step: "#scrolly article .step",
            debug: false,
            offset: .50
          })
          .onStepEnter(handleStepEnter)
          .onStepExit(handleStepExit);

        // 3. setup resize event
        window.addEventListener("resize", scroller.resize);
      }

      // kick things off
      init();
    </script>
  </body>
</html>
