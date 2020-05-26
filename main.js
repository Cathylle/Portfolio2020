//**************************************************************************Code pour smooth scrool**************************************************************************//

//Code de https://perishablepress.com/vanilla-javascript-scroll-anchor/ //

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('a, .lienAncre');
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

if(!window.location.href.includes("realisation")){

const requeteUsers = fetch('realisation.json');
requeteUsers
    .then(function(res) { return res.json() })
    .then(function(resultat) {

		var pak=0
		var pakplus=8
				// affiche les 8 premières images
				for(pak;pak<pakplus;pak++){
					// cree une box pour insérer les images
					const box = document.createElement('div');
					box.classList.add(""+resultat[pak].categorie+""+[pak]);
					document.querySelector('.pictureprez').appendChild(box);

					// cree les liens et les mettre dans la box
					const lienImg = document.createElement('a');
					lienImg.classList.add("col-md-3")
					lienImg.classList.add("col-sm-4")
					lienImg.classList.add("col-xs-6")
					lienImg.classList.add("pic"+pak)
					document.querySelector("."+resultat[pak].categorie+""+[pak]).appendChild(lienImg);
					lienImg.href ="realisation.html?="+resultat[pak].id
					const img = document.createElement('img');
					img.classList.add("pic")
					document.querySelector(".pic"+pak).appendChild(img);
					img.src =resultat[pak].miniature
				}
		var voirPlus=document.querySelector(".btnplus")
		voirPlus.addEventListener("click", ajoutervoirplus)

// affiche 8 images en plus quand on clique sur le bouton
				function ajoutervoirplus(){
					pakplus=pakplus+8
					console.log(pakplus)
					for(pak;pak<pakplus;pak++){
						// cree une box pour insérer les images
						const box = document.createElement('div');
						box.classList.add(""+resultat[pak].categorie+""+[pak]);
						document.querySelector('.pictureprez').appendChild(box);
	
						// cree les liens et les mettre dans la box
						const lienImg = document.createElement('a');
						lienImg.classList.add("col-md-3")
						lienImg.classList.add("col-sm-4")
						lienImg.classList.add("col-xs-6")
						lienImg.classList.add("pic"+pak)
						document.querySelector("."+resultat[pak].categorie+""+[pak]).appendChild(lienImg);
						lienImg.href ="realisation.html?="+resultat[pak].id
						const img = document.createElement('img');
						img.classList.add("pic")
						document.querySelector(".pic"+pak).appendChild(img);
						img.src =resultat[pak].miniature
					

if(pakplus>=resultat.length){
	voirPlus.style="display:none"
}}}

})
}







//**************************************************************************Code pour afficher la page liée aux realisations**************************************************************************//
// remplacer adresse de base de la page par une avec l'id



if(window.location.href.includes("realisation")){

	const requeteUsers = fetch('realisation.json');
	requeteUsers
		.then(function(res) { return res.json() })
		.then(function(resultat) {

			// définir les zones de la page qui doivent changer
			// const titre=document.querySelector(".realPage h1");
			
			var i=0
			var nbId = 0
			
					for(i;i<resultat.length;i++){
						const url=window.location.search
						const detailUrl=url.split("=")
						if(!detailUrl[1]){
							window.location.replace(window.location+"?id="+resultat.length)
						}

						if(detailUrl[1]==resultat[i].id){

						document.title= "CJ: "+resultat[i].titre;
						$(".realPage h1").text(resultat[i].titre);
						$(".textepropos").text(resultat[i].texte);

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
						if(resultat[i].size==1){
							$(".carouWrap").removeClass("col-md-6");
							$(".carouWrap").addClass("col-md-12");
							$(".realPage").css("background-image", "url(/img/img-meduse.png");
							$(".realPage").css("background-size", "calc(max(25%, 200px))");
							$(".realPage").css("background-position", "right 35% top 0");
							
						}

						
					
					
					}}})
				
			//Precedent Suivant
			// var urltotale=window.location.href
			// var urltotalesplitee=urltotale.split("?id=")
			
			
			
			// function idSuivant()
			// {
			
			// 	var idNext=Number(urltotalesplitee[1])+1
			// 	if(idNext > nbId){
			
			// 		window.location.replace("innovations.html")
			// 	}
			// 	else
			// 	{
			// 		window.location.replace(urltotalesplitee[0]+"?id="+idNext)
			// 	}
			// }
			
			// function idPrec()
			// {
			// 	var idNext=Number(urltotalesplitee[1])-1
			// 	if(idNext <= 0){
			
			// 		window.location.replace("realisation.html")
			// 	}
			// 	else
			// 	{
			// 		window.location.replace(urltotalesplitee[0]+"?id="+idNext)
			// 	}
			// }
	
	
	}



