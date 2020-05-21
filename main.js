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


const requeteUsers = fetch('realisation.json');

requeteUsers
    .then(function(res) { return res.json() })
    .then(function(resultat) {
		var pak=0
		var pakplus=8


				// affiche les 8 premières images
				for(pak;pak<pakplus;pak++){
					const box = document.createElement('div');
					box.classList.add(""+resultat[pak].categorie+""+[pak]);
					document.querySelector('.pictureprez').appendChild(box);
					const img = document.createElement('img');
					img.classList.add("col-md-3")
					img.classList.add("col-sm-4")
					img.classList.add("col-xs-6")
					img.classList.add("pic")
					document.querySelector("."+resultat[pak].categorie+""+[pak]).appendChild(img);
					img.src =resultat[pak].miniature
				}

		var voirPlus=document.querySelector(".btnplus")
		voirPlus.addEventListener("click", ajoutervoirplus)

// affiche 8 images en plus quand on clique sur le bouton
				function ajoutervoirplus(){
					pakplus=pakplus+8
					console.log(pakplus)
					for(pak;pak<pakplus;pak++){
						const box = document.createElement('div');
						box.classList.add(""+resultat[pak].categorie+""+[pak]);
						document.querySelector('.pictureprez').appendChild(box);
						const img = document.createElement('img');
						img.classList.add("col-md-3")
						img.classList.add("col-sm-4")
						img.classList.add("col-xs-6")
						img.classList.add("pic")
						document.querySelector("."+resultat[pak].categorie+""+[pak]).appendChild(img);
						img.src =resultat[pak].miniature

if(pakplus>=resultat.length){
	voirPlus.style="display:none"
}

					}
}


        }
)



