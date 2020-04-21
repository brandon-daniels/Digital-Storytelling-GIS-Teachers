
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Scrollama: Basic Example</title>
    <meta name="description" content="Scrollama: Basic Example" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="../style.css" />
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  min-height: 1280px;
  color: #3b3b3b;
  font-size: 24px;
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

a,
a:visited,
a:hover {
  color: teal;
  text-decoration: none;
  border-bottom: 2px solid currentColor;
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
}

.intro__hed {
  font-size: 2em;
  margin: 2rem auto 0.5rem auto;
}

.intro__dek {
  color: #8a8a8a;
}

#intro {
  margin-bottom: 320px;
}

#outro {
  height: 640px;
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
        width: 33%;
      }

      .step {
        margin: 2rem auto 4rem auto;
        background-color: #3b3b3b;
        color: #fff;
      }

      .step.is-active {
        background-color: goldenrod;
        color: #3b3b3b;
      }

      .step p {
        text-align: center;
        padding: 1rem;
        font-size: 1.5rem;
      }
    </style>
  </head>

  <body>
    <main>
      <nav>
        <a href="https://github.com/russellgoldenberg/scrollama"
          >scrollama.js</a
        >
        <div class="nav__examples">
          <p>Examples:</p>
          <a href="https://russellgoldenberg.github.io/scrollama/basic"
            >Basic</a
          >
          <a href="https://russellgoldenberg.github.io/scrollama/progress"
            >Progress</a
          >
          <a href="https://russellgoldenberg.github.io/scrollama/sticky-side"
            >Sticky Side</a
          >
          <a href="https://russellgoldenberg.github.io/scrollama/sticky-overlay"
            >Sticky Overlay</a
          >
          <a href="https://russellgoldenberg.github.io/scrollama/mobile-pattern"
            >Mobile Pattern</a
          >
        </div>
      </nav>
      <section id="intro">
        <h1 class="intro__hed">Basic Example</h1>
        <p class="intro__dek">
          Start scrolling to see how it works.
        </p>
      </section>
      <section id="scrolly">
        <article>
          <div class="step" data-step="1">
            <p>STEP 1</p>
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

    <script src="https://unpkg.com/intersection-observer"></script>
    <script src="../scrollama.min.js"></script>
    <script>
      var scrolly = document.querySelector("#scrolly");
      var article = scrolly.querySelector("article");
      var step = article.querySelectorAll(".step");

      // initialize the scrollama
      var scroller = scrollama();

      // scrollama event handlers
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

      function init() {
        // set random padding for different step heights (not required)
        step.forEach(function(step) {
          var v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
          step.style.padding = v + "px 0px";
        });

        // 1. setup the scroller with the bare-bones options
        //      this will also initialize trigger observations
        // 2. bind scrollama event handlers (this can be chained like below)
        scroller
          .setup({
            step: "#scrolly article .step",
            debug: true,
            offset: 0.5
          })
          .onStepEnter(handleStepEnter)
          .onStepExit(handleStepExit);

        // 3. setup resize event
        window.addEventListener("resize", scroller.resize);
      }

      // kick things off
      init();
    </script>
    <div id="scrollama__debug-offset--avp1587499052758" class="scrollama__debug-offset" style="position: fixed; left: 0px; width: 100%; height: 0px; border-top: 2px dashed black; z-index: 9999; top: 454px;"><p style="font-size: 12px; font-family: monospace; color: black; margin: 0px; padding: 6px;">".step" trigger: <span>0.5</span></p></div>
  </body>
</html>
