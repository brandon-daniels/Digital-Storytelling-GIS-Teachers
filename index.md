	
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
	width: 100vw; 
}
#features {
    padding-top: 10vh;
    padding-bottom: 10vh;
    z-index: 100;
}
#story {
	position: absolute;
	z-index: 10;
}
#graph {
	padding-top: 50px;
	max-height: 100%;
	max-width: 100%;
}
.legend {
background-color: #fff;
border-radius: 3px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
padding: 10px;
position: absolute;
z-index: 100;
}
 
.legend h4 {
margin: 0 0 10px;
}
 
.legend div span {
border-radius: 50%;
display: inline-block;
height: 10px;
margin-right: 5px;
width: 10px;
}
.mapwrap {
	z-index: -100;
}
.storywrap{
	position: absolute;
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
  font-size: 100px;
  line-height: 40px;
  padding-top: 6px;
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
									<span class="firstcharacter">T</span><p>eachers in the United States are agents of history, and so are the bus drivers, cafeteria, staff, and custodial workers that also work as educators. In 2018, more US workers went on strike than in any previous year since 1986. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis neque congue, elementum magna vitae, porta est. Aliquam finibus, dolor a condimentum condimentum, lorem tortor laoreet quam, vel interdum nulla magna quis enim. Maecenas lacus ligula, efficitur et ipsum et, aliquam mollis diam. Proin tempor at velit ac viverra. Mauris tempus ipsum odio, et euismod erat dictum at. Ut ornare quam sed ex mollis semper. Integer mollis enim eget finibus porta. Donec sed sollicitudin eros, in blandit purus. Maecenas condimentum ullamcorper diam, non efficitur mi porttitor sit amet. Pellentesque vulputate dui in lectus egestas, et tempor ipsum pharetra. Aenean dapibus enim justo, sit amet aliquam arcu accumsan facilisis. Proin interdum mauris in fringilla luctus. In vulputate aliquam diam. Morbi mattis lobortis justo quis laoreet. Nulla rutrum dui quis erat dictum, vel scelerisque diam pretium.

Vestibulum lacus felis, imperdiet vel venenatis ut, laoreet at elit. Proin sed urna rhoncus, cursus odio quis, bibendum nisi. Nullam rutrum at ipsum eget dignissim. Donec lacus nibh, pretium eget porta ac, feugiat et enim. Mauris ac leo ut eros varius porta. Suspendisse mollis lobortis fringilla. Pellentesque dapibus sem et interdum vestibulum. Mauris dictum nunc enim. Nam consequat risus eget arcu aliquet tempus. Praesent nec purus eu elit mattis convallis vel eu lectus. Pellentesque non scelerisque orci. Nunc molestie nulla condimentum aliquam vestibulum. In orci arcu, egestas eu nisi sollicitudin, condimentum feugiat lectus.

Praesent fringilla pharetra risus sit amet lobortis. Pellentesque fringilla lacus quis lectus cursus, vitae lacinia urna pellentesque. Integer sed dui ac mi suscipit ultricies eget ac ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris at ligula turpis. Pellentesque ultricies arcu et turpis consectetur vehicula. Mauris ultrices ligula tortor, eu suscipit mi tempor ac. Morbi hendrerit malesuada odio, sed accumsan lacus auctor non. Phasellus sapien enim, malesuada ut malesuada vitae, ultrices ac sem.

Etiam vitae feugiat massa. Fusce condimentum dui eros, in ornare mauris consectetur eget. Suspendisse rhoncus erat a eros eleifend, eget consequat nisi facilisis. Nullam ornare sodales rutrum. Fusce eget vehicula mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique justo id neque rutrum interdum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt congue libero eget lobortis. Nullam posuere lacinia leo a cursus. Cras eget gravida neque, vehicula euismod nisl. Integer maximus leo eget lorem tempor, non elementum lectus semper. Nunc quam justo, volutpat sit amet malesuada vitae, rhoncus et quam. Praesent ultrices sem et pretium ullamcorper. Nulla a finibus dui, id ultrices ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis neque congue, elementum magna vitae, porta est. Aliquam finibus, dolor a condimentum condimentum, lorem tortor laoreet quam, vel interdum nulla magna quis enim. Maecenas lacus ligula, efficitur et ipsum et, aliquam mollis diam. Proin tempor at velit ac viverra. Mauris tempus ipsum odio, et euismod erat dictum at. Ut ornare quam sed ex mollis semper. Integer mollis enim eget finibus porta. Donec sed sollicitudin eros, in blandit purus. Maecenas condimentum ullamcorper diam, non efficitur mi porttitor sit amet. Pellentesque vulputate dui in lectus egestas, et tempor ipsum pharetra. Aenean dapibus enim justo, sit amet aliquam arcu accumsan facilisis. Proin interdum mauris in fringilla luctus. In vulputate aliquam diam. Morbi mattis lobortis justo quis laoreet. Nulla rutrum dui quis erat dictum, vel scelerisque diam pretium.
									<img id="graph" src="graph.png">
</p></section>
<p>Testing testing <br><br> testing <br>testing</p>
					      		</section>
					      	<div class="spacer s10"></div>
				        	<div id="startmap" class="spacer s0"></div>

				        	<div id="pin1" class="spacer s8">
				          		<div id="mapwrap" class="wrapper">
				          			<div id="map"></div>
				        		</div>
				        	</div>
				        	<div id="storywrap" class="wrapper">
				        		<div id="story"></div>
				        		<div id="legend" class="legend">
<h4>Idles (Workers * Days)</h4>
<div><span style="background-color: #ff0000"></span>500,000</div>
<div><span style="background-color: #ee7430"></span>250,000</div>
<div><span style="background-color: #fadc4b"></span>100,000</div>
<div><span style="background-color: #ffff00"></span>50,000</div>
				          		</div>
				        	</div>
				        	<div class="spacer s10"></div>
				        	<div class="spacer s10"></div>

				        	<div id="outro" class="spacer s10"></div>
				        	<section id="outrocard" class="panel white">
				          		<h1>2</h1>
				        	</section>
<script>


var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/brandondaniels1917/ck7p8e3x103m81iqhe4xbeosm', // stylesheet location
		  accessToken: 'pk.eyJ1IjoiYnJhbmRvbmRhbmllbHMxOTE3IiwiYSI6ImNrMm1tYjgwYTBqbDIzZHQ1dmdyNWZxeWcifQ.fdROqOxFdqnMmA6G_f_hgw',
			            center: [-96.53731, 40.57074],
			            zoom: 3.92,
			            pitch: 5.00,
			            bearing: 0.00
    });
    map.scrollZoom.disable();

$(function () { // wait for document ready
	// init

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave',
		}
	});
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
	});
	story.appendChild(features);


	var epigraph = new ScrollMagic.Scene({triggerElement: '#epigraph',duration:"100%"})
				.setPin("#epigraph")
				.addIndicators()
				.addTo(controller);

/*	var intro = new ScrollMagic.Scene({triggerElement: "#intro"})
				.setPin("#intro")
				.addIndicators()
				.addTo(controller);
*/
	var mapscene = new ScrollMagic.Scene({triggerElement: "#pin1", duration:"1000%"})
				.setPin("#pin1")
				.addTo(controller)
				.addIndicators()
				.on("start", function(e){
					if (e.scrollDirection=="FORWARD") {
					map.flyTo({
			              center: [-96.92126, 36.79253],
			              zoom: 4,
			              pitch: 60.00,
			              bearing: 0.88,
			      	      speed: 0.8,
			      	      curve: 1,
			      	  	  essential:true});
					console.log("entering!")};
				})
				.on("leave", function(e){
					console.log("Reset!");
					map.flyTo({
						center: [-96.53731, 40.57074],
			            zoom: 3.92,
			            pitch: 5.00,
			            bearing: 0.00,
			            speed: 0.8,
			            curve: 1,
			            essential:true});
				})
				.on("progress", function(e){
					map.setPaintProperty('west-virginia','fill-extrusion-height',["min",["to-number",["get","Idles"]],["to-number",["*", ["to-number",["get","Idles"]],["to-number",["*",e.progress,10]]]]]);
					map.setPaintProperty('kentucky','fill-extrusion-height',["min",["to-number",["get","Idles"]],["to-number",["*", ["to-number",["get","Idles"]],["to-number",["*",e.progress,10]]]]]);
					map.setPaintProperty('oklahoma','fill-extrusion-height',["min",["to-number",["get","Idles"]],["to-number",["*", ["to-number",["get","Idles"]],["to-number",["*",e.progress,10]]]]]);
					map.setPaintProperty('north-carolina','fill-extrusion-height',["min",["to-number",["get","Idles"]],["to-number",["*", ["to-number",["get","Idles"]],["to-number",["*",e.progress,10]]]]]);
					map.setPaintProperty('colorado','fill-extrusion-height',["min",["to-number",["get","Idles"]],["to-number",["*", ["to-number",["get","Idles"]],["to-number",["*",e.progress,10]]]]]);
					map.setPaintProperty('arizona','fill-extrusion-height',["min",["to-number",["get","Idles"]],["to-number",["*", ["to-number",["get","Idles"]],["to-number",["*",e.progress,10]]]]]);
				});

});


</script>
						</div>
				    </div>
				</div>
			</div>
  </body>
</html>
