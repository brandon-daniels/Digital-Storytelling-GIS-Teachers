
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
	<script src="./config.js"></script>

<style>

body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}			
#map { 
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%; 
}
#story {
	position: absolute;
	z-index: 10;
}
.mapwrap {
	z-index: -100;
}
.storywrap{
	z-index: 100;
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
.panel {
	height: 100%;
	width: 100%;
}
.firstcharacter {
  color: black;
  float: left;
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}
</style>
</head>

  <body>
  		<div id="content-wrapper">
			<div id="example-wrapper" class="ScrollContainer">
				<div class="scrollContent">
			         <section id="titlechart">
			          	<div id="description">
							<h1>The Strike</h1>
				            <h1 class="ml4">
				              <span class="letters letters-1">Wave</span>
				              <span class="letters letters-2">Virus</span>
				              <span class="letters letters-3">Rebellion</span>
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
					              });
				              </script>
				          	</h1>
				            	<h2>Examining metaphors for collective action. <br><br>by Brandon Daniels</h2>
				            </div>
				    	</section>      
				    	<div class="demo" id="section-wipes">
							<div id="startepigraph" class="spacer s0"></div>
				        	<section id="epigraph">
				        		<section id="description">
				        		<h2>“The history of all hitherto existing society is the history of class struggle.”</h2>
				        		<br><h3>– Karl Marx and Friedrich Engles</h3>
								
								<h2>“There are decades where nothing happens; and there are weeks where decades happen.”</h2>
								<br><h3> – Vladimir Lenin</h3>
								</section>
				      		</section>
					      		<div id="startinto" class="spacer s1"></div>
						    	<section id="intro">
						    		<section id="description">
									<span class="firstcharacter">T</span><p>he series of strikes in public education in 2018 represented one of the largest upticks in large-scale work stoppages in over four decades.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis neque congue, elementum magna vitae, porta est. Aliquam finibus, dolor a condimentum condimentum, lorem tortor laoreet quam, vel interdum nulla magna quis enim. Maecenas lacus ligula, efficitur et ipsum et, aliquam mollis diam. Proin tempor at velit ac viverra. Mauris tempus ipsum odio, et euismod erat dictum at. Ut ornare quam sed ex mollis semper. Integer mollis enim eget finibus porta. Donec sed sollicitudin eros, in blandit purus. Maecenas condimentum ullamcorper diam, non efficitur mi porttitor sit amet. Pellentesque vulputate dui in lectus egestas, et tempor ipsum pharetra. Aenean dapibus enim justo, sit amet aliquam arcu accumsan facilisis. Proin interdum mauris in fringilla luctus. In vulputate aliquam diam. Morbi mattis lobortis justo quis laoreet. Nulla rutrum dui quis erat dictum, vel scelerisque diam pretium.

Vestibulum lacus felis, imperdiet vel venenatis ut, laoreet at elit. Proin sed urna rhoncus, cursus odio quis, bibendum nisi. Nullam rutrum at ipsum eget dignissim. Donec lacus nibh, pretium eget porta ac, feugiat et enim. Mauris ac leo ut eros varius porta. Suspendisse mollis lobortis fringilla. Pellentesque dapibus sem et interdum vestibulum. Mauris dictum nunc enim. Nam consequat risus eget arcu aliquet tempus. Praesent nec purus eu elit mattis convallis vel eu lectus. Pellentesque non scelerisque orci. Nunc molestie nulla condimentum aliquam vestibulum. In orci arcu, egestas eu nisi sollicitudin, condimentum feugiat lectus.

Praesent fringilla pharetra risus sit amet lobortis. Pellentesque fringilla lacus quis lectus cursus, vitae lacinia urna pellentesque. Integer sed dui ac mi suscipit ultricies eget ac ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris at ligula turpis. Pellentesque ultricies arcu et turpis consectetur vehicula. Mauris ultrices ligula tortor, eu suscipit mi tempor ac. Morbi hendrerit malesuada odio, sed accumsan lacus auctor non. Phasellus sapien enim, malesuada ut malesuada vitae, ultrices ac sem.

Etiam vitae feugiat massa. Fusce condimentum dui eros, in ornare mauris consectetur eget. Suspendisse rhoncus erat a eros eleifend, eget consequat nisi facilisis. Nullam ornare sodales rutrum. Fusce eget vehicula mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique justo id neque rutrum interdum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt congue libero eget lobortis. Nullam posuere lacinia leo a cursus. Cras eget gravida neque, vehicula euismod nisl. Integer maximus leo eget lorem tempor, non elementum lectus semper. Nunc quam justo, volutpat sit amet malesuada vitae, rhoncus et quam. Praesent ultrices sem et pretium ullamcorper. Nulla a finibus dui, id ultrices ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis neque congue, elementum magna vitae, porta est. Aliquam finibus, dolor a condimentum condimentum, lorem tortor laoreet quam, vel interdum nulla magna quis enim. Maecenas lacus ligula, efficitur et ipsum et, aliquam mollis diam. Proin tempor at velit ac viverra. Mauris tempus ipsum odio, et euismod erat dictum at. Ut ornare quam sed ex mollis semper. Integer mollis enim eget finibus porta. Donec sed sollicitudin eros, in blandit purus. Maecenas condimentum ullamcorper diam, non efficitur mi porttitor sit amet. Pellentesque vulputate dui in lectus egestas, et tempor ipsum pharetra. Aenean dapibus enim justo, sit amet aliquam arcu accumsan facilisis. Proin interdum mauris in fringilla luctus. In vulputate aliquam diam. Morbi mattis lobortis justo quis laoreet. Nulla rutrum dui quis erat dictum, vel scelerisque diam pretium.

Vestibulum lacus felis, imperdiet vel venenatis ut, laoreet at elit. Proin sed urna rhoncus, cursus odio quis, bibendum nisi. Nullam rutrum at ipsum eget dignissim. Donec lacus nibh, pretium eget porta ac, feugiat et enim. Mauris ac leo ut eros varius porta. Suspendisse mollis lobortis fringilla. Pellentesque dapibus sem et interdum vestibulum. Mauris dictum nunc enim. Nam consequat risus eget arcu aliquet tempus. Praesent nec purus eu elit mattis convallis vel eu lectus. Pellentesque non scelerisque orci. Nunc molestie nulla condimentum aliquam vestibulum. In orci arcu, egestas eu nisi sollicitudin, condimentum feugiat lectus.

Praesent fringilla pharetra risus sit amet lobortis. Pellentesque fringilla lacus quis lectus cursus, vitae lacinia urna pellentesque. Integer sed dui ac mi suscipit ultricies eget ac ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris at ligula turpis. Pellentesque ultricies arcu et turpis consectetur vehicula. Mauris ultrices ligula tortor, eu suscipit mi tempor ac. Morbi hendrerit malesuada odio, sed accumsan lacus auctor non. Phasellus sapien enim, malesuada ut malesuada vitae, ultrices ac sem.

Etiam vitae feugiat massa. Fusce condimentum dui eros, in ornare mauris consectetur eget. Suspendisse rhoncus erat a eros eleifend, eget consequat nisi facilisis. Nullam ornare sodales rutrum. Fusce eget vehicula mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique justo id neque rutrum interdum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt congue libero eget lobortis. Nullam posuere lacinia leo a cursus. Cras eget gravida neque, vehicula euismod nisl. Integer maximus leo eget lorem tempor, non elementum lectus semper. Nunc quam justo, volutpat sit amet malesuada vitae, rhoncus et quam. Praesent ultrices sem et pretium ullamcorper. Nulla a finibus dui, id ultrices ligula.</p>
									</section>	    	
					      		</section>
					      	<div class="spacer s7"></div>
				        	<div id="startmap" class="spacer s0"></div>
				        	<div id="pin1" class="spacer s8">
				          		<div id="mapwrap" class="wrapper">
				          			<div id="map"></div>
				          		</div>
				        	</div>
				        		<div id="storywrap" class="wrapper">
				        			<div id="story"></div>
				        		</div>
				        	<div id="outro" class="spacer s10"></div>
				        	<section id="outrocard" class="panel white">
				          		<h1>2</h1>
				        	</section>
<script>


var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

config.chapters.forEach((record, idx) => {
	var container = document.createElement('div');
	var chapter = document.createElement('div');
	if (record.title) {
	    var title = document.createElement('h3');
	    title.innerText = record.title;
	    chapter.appendChild(title);
	}

	if (record.image) {
	    var image = new Image();
	    image.src = record.image;
	    chapter.appendChild(image);
	}

	if (record.description) {
	    var story = document.createElement('p');
	    story.innerHTML = record.description;
	    chapter.appendChild(story);
	}

	chapter.classList.add(config.theme);
	container.appendChild(chapter);
	features.appendChild(container);
});

story.appendChild(features);

var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/brandondaniels1917/ck7p8e3x103m81iqhe4xbeosm', // stylesheet location
		  accessToken: 'pk.eyJ1IjoiYnJhbmRvbmRhbmllbHMxOTE3IiwiYSI6ImNrMm1tYjgwYTBqbDIzZHQ1dmdyNWZxeWcifQ.fdROqOxFdqnMmA6G_f_hgw',
      center: [-96.92126, 36.79253],
      zoom: 4, // starting zoom
      pitch: 60.00,
      bearing: 0.88,
    });
    map.scrollZoom.disable();

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

	var epigraph = new ScrollMagic.Scene({triggerElement: '#epigraph'})
				.setPin("#epigraph")
				.addIndicators()
				.addTo(controller);

/*	var intro = new ScrollMagic.Scene({triggerElement: "#intro"})
				.setPin("#intro")
				.addIndicators()
				.addTo(controller);
*/
	var mapscene = new ScrollMagic.Scene({triggerElement: "#startmap", duration: 1000})
				.setPin("#pin1", {pushFollowers: false})
				.addTo(controller)
				.addIndicators()
				.on("progress", function(e){
					map.setPaintProperty('red-states','fill-extrusion-height', e.progress.toFixed(2)*600000);
					console.log();
				});

	var introtheory = new ScrollMagic.Scene({triggerElement: "#outro"})
						.setPin("#outrocard")
						.addTo(controller);
});


</script>
						</div>
				    </div>
				</div>
			</div>
  </body>
</html>
