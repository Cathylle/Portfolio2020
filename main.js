//**************************************************************************Code pour smooth scrool**************************************************************************//

//Code de https://perishablepress.com/vanilla-javascript-scroll-anchor/ //
if(window.location.href.includes("index")){
(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.lienAncre');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top -40);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		// if (distanceToTop(targetAnchor) === 0 || atBottom) {
		// 	targetAnchor.tabIndex = '-1';
		// 	targetAnchor.focus();
		// 	window.history.pushState('', '', targetID);
		// 	clearInterval(checkIfDone);
		// }
	}, 100);
}


//**************************************************************************Code pour afficher les images des réalisations**************************************************************************//

$.getJSON( "realisation.json")
  .done(function( resultat ) {
	console.log( "JSON Data: " + resultat[ 3 ].categ );

	var pak=0;
		var pakplus=8;
		var voirPlus=$(".btnplus");
		$(".btnplus").click(ajoutervoirplus);

		for(pak;pak<pakplus;pak++){
			affichermiatures();
		}
	function affichermiatures(){
		// cree une box pour insérer les images
		var box = $("<div></div>"); 
		$(box).addClass(""+ resultat[pak].categ +""+[pak]);
		$('.pictureprez').append(box);
		// cree les liens et les mettre dans la box
		const lienImg = $("<a></a>");
		lienImg.addClass("col-md-3");
		lienImg.addClass("col-sm-4");
		lienImg.addClass("col-xs-6");
		lienImg.addClass("pic"+pak);
		$("."+resultat[pak].categ+""+[pak]).append(lienImg);
		$(lienImg).attr("href","realisation.html?="+resultat[pak].id);
		const img = $('<img></img>');
		img.addClass("pic");
		$(".pic"+pak).append(img);
		$(img).attr("src",resultat[pak].miniature);
		$(img).attr("alt",resultat[pak].titre);
		$(img).attr("title",resultat[pak].titre);
			if(pakplus>=resultat.length){
				$(voirPlus).hide();
			}}

	function ajoutervoirplus(){
			pakplus=pakplus+8;
			if(pakplus>=resultat.length){
				for(pak; pak<resultat.length; pak++){
					affichermiatures();
				}
			}
			else{
				for(pak;pak<pakplus;pak++){
					affichermiatures();
				}
			}}

			$("#illuBtn").click(function(){
				$('.pictureprez').empty();
				for(pak=0;pak<resultat.length;pak++){
					if(resultat[pak].categ=="illu"){
						affichermiatures();
						$(".btnplus").hide();
					}
				}
			})		

			$("#commuBtn").click(function(){
				$('.pictureprez').empty();
				for(pak=0;pak<resultat.length;pak++){
					if(resultat[pak].categ=="commu"){
						affichermiatures();
						$(".btnplus").hide();
					}
				}
				


			})

			$("#webBtn").click(function(){
				$('.pictureprez').empty();
				for(pak=0;pak<resultat.length;pak++){
					if(resultat[pak].categ=="web"){
						affichermiatures();
						$(".btnplus").hide();
					}
				}
			})

			$("#toutBtn").click(function(){
				$('.pictureprez').empty();
				for(pak=0;pak<resultat.length;pak++){
						affichermiatures();
						$(".btnplus").hide();
				}
			})



			
		});}







//**************************************************************************Code pour afficher la page liée aux realisations**************************************************************************//
// remplacer adresse de base de la page par une avec l'id



if(window.location.href.includes("realisation")){

	const requeteUsers = fetch('realisation.json');
	requeteUsers
		.then(function(res) { return res.json() })
		.then(function(resultat) {
affichermiatures()
			// définir les zones de la page qui doivent changer
			// const titre=document.querySelector(".realPage h1");
			function affichermiatures(){
const pakhazList=[];
				for(var pak=0;pak<4;pak++){

var pakhaz=Math.round(Math.random()*(resultat.length-1))
pakhazList.push(pakhaz);
console.log(pakhazList);

// cree une box pour insérer les images
var box = $("<div></div>"); 
$(box).addClass(""+ resultat[pakhaz].categ +""+[pakhaz]);
$('.pictureprez').append(box);
// cree les liens et les mettre dans la box
const lienImg = $("<a></a>");
lienImg.addClass("col-md-3");
lienImg.addClass("col-xs-6");
lienImg.addClass("pic"+pakhaz);

$("."+resultat[pakhaz].categ+""+[pakhaz]).append(lienImg);
$(lienImg).attr("href","realisation.html?="+resultat[pakhaz].id);
const img = $('<img></img>');
img.addClass("pic");
$(".pic"+pakhaz).append(img);
$(img).attr("src",resultat[pakhaz].miniature);
$(img).attr("alt",resultat[pakhaz].titre);
$(img).attr("title",resultat[pakhaz].titre);
}} 


			var i=0
			
			
					for(i;i<resultat.length;i++){
						const url=window.location.search
						const detailUrl=url.split("=")
						const UrlPrécédent=parseInt(detailUrl[1])-1;
						const UrlSuivant=parseInt(detailUrl[1])+1;
//**************************************************************************Code pour bouton suivant et précédent**************************************************************************//						
						if(detailUrl[1]!=1 && detailUrl[1]<resultat.length){
							const precedenteReal=detailUrl[0]+"="+UrlPrécédent;
							const suivanteReal=detailUrl[0]+"="+UrlSuivant;
							$("#right").attr("href", precedenteReal);
							$("#left").attr("href", suivanteReal);
						}
						else if(detailUrl[1]==1){
							const suivanteReal=detailUrl[0]+"="+UrlSuivant;
							$("#right").hide();
							$("#left").attr("href", suivanteReal);
						}
						else if(detailUrl[1]==resultat.length){
							const precedenteReal=detailUrl[0]+"="+UrlPrécédent;
							$("#right").attr("href", precedenteReal);
							$("#left").hide();
						}

						if(!detailUrl[1]){
							window.location.replace(window.location+"?id="+resultat.length)
						}

						if(detailUrl[1]==resultat[i].id){

						document.title= "CJ: "+resultat[i].titre;
						$(".realPage h1").text(resultat[i].titre);
						$(".textepropos").html(resultat[i].texte);

						for(var j=0;resultat[i].photos[j];j++){
							if(!resultat[i].photos[j].src.includes("youtube")){
								if(j==0){	
									var divCarou = $("<div class='item active'></div>").append("<img src='"+ resultat[i].photos[j].src +"'></img>");  
								}
								else{
									var divCarou = $("<div class='item'></div>").append("<img src='"+ resultat[i].photos[j].src +"'></img>");  
									$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+j+'"></li>')
								}
							}
							else{
								if(j==0){

									var divCarou = $("<div class='item active embed-responsive embed-responsive-16by9'></div>").append(resultat[i].photos[j].src);  
								}
								else{
									var divCarou = $("<div class='item embed-responsive embed-responsive-16by9'></div>").append(resultat[i].photos[j].src);  
								}
							}
							$(".carousel-inner").append(divCarou)
						}
						if(j==1){
							$(".carousel-indicators").hide();
							$(".carousel-control").hide();
						}
						if(resultat[i].size==0){
							$(".wrapgeneral").removeClass("container-fluid");
							$(".wrapgeneral").addClass("container");
							$(".textepropos").removeClass("col-lg-2");
							$(".textepropos").removeClass("col-md-3");
							$(".textepropos").addClass("col-md-3");
							$(".pictureprez").removeClass("col-md-12");
							$(".pictureprez").removeClass("col-lg-1");
							$(".pictureprez").removeClass("col-sm-12");
							$(".pictureprez").addClass("col-xs-12");
						}
					}}})}



