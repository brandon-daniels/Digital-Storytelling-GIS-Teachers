
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Strike Project</title>
    <meta name="description" content="Scrollama: Basic Example" />
	<meta name="viewport" content="width=500" />
	    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" href="styles.css" type="text/css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="https://unpkg.com/d3@5.9.1/dist/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<style>

body {
  margin: 0;
  padding: 0;
  height: 100%;
}

h1{
  font-weight: 900;
  font-size: 4.5em;
  color: white;
  text-shadow: rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px;  	
}
h2{
  margin-top: 250px;
  font-weight: 900;
  font-size: 2em;
  color: white;
  text-shadow: rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px;  
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

</style>
</head>

  <body>
  		<div id="content-wrapper">
			<div id="example-wrapper">
				<div class="scrollContent">
			         <section id="titlechart">
			          	<div id="description">
							<h1>The Strike</h1>
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
				            	<h2>Examining metaphors for collective action. <br><br>by Brandon Daniels</h2>
				            </div>
				    	</section>      
				    	<div class="demo" id="section-wipes">
							<style type="text/css">
								.panel {
									height: 100%;
									width: 100%;
								}
							</style>
				        	<section class="panel red">
				          		<h1>1</h1>
				      		</section>
				        	<div class="spacer s2"></div>
				        	<div id="endtitle" class="spacer s1"></div>
				        	<div id="pin1" class="spacer s10">
				          		<!--<div id="map"></div>--><h1>poop</h1>
				        	</div>
				        	<div class="spacer s2"></div>

				        	<section class="panel blue">
				          		<h1>2</h1>
				        	</section>
				        	<section class="panel green">
				          		<h1>3</h2>
				        	</section>
<script>
/*			        var map = new mapboxgl.Map({
			          container: 'map', // container id
			          style: 'mapbox://styles/brandondaniels1917/ck7p8e3x103m81iqhe4xbeosm', // stylesheet location
			          center: [-96.92126, 36.79253],
			          zoom: 4, // starting zoom
			          pitch: 60.00,
			          bearing: 0.88
			        });
			        map.scrollZoom.disable();
*/
				$(function () { // wait for document ready
					// init
					var controller = new ScrollMagic.Controller({
						globalSceneOptions: {
							triggerHook: 'onLeave',
							duration: "100%" // this works just fine with duration 0 as well
							// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
							// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
						}
					});

					// get all slides
					var slides = document.querySelectorAll("section.panel");

					var mapscene = new ScrollMagic.Scene({triggerElement: "#endtitle", duration: 300})
									.setPin("#pin1")
									.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
									.addTo(controller);

					// create scene for every slide
					for (var i=0; i<slides.length; i++) {
						new ScrollMagic.Scene({
								triggerElement: slides[i]
							})
							.setPin(slides[i], {pushFollowers: false})
							.addIndicators() // add indicators (requires plugin)
							.addTo(controller);


					}
				});
</script>
						</div>
				    </div>
				</div>
			</div>
  </body>
</html>
