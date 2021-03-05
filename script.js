/*function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
} */

// function qui définit l'aléatoire des citations au moment du chargement de la page

window.onload = function getQuote(){
	index = Math.floor(Math.random()* quote.length)

currentQuote = quote[index][0];
currentAuthor = quote[index][1];
console.log(currentQuote);
document.getElementById('quotetext').innerHTML = currentQuote;
document.getElementById('quoteAuthor').innerHTML = currentAuthor;
}


// function qui définit l'aléatoire des citations au moment du click du bouton


function getQuote(){
	index = Math.floor(Math.random()* quote.length)
  index = Math.floor(Math.random()*


currentQuote = quote[index][0];
currentAuthor = quote[index][1];
console.log(currentQuote);
document.getElementById('quotetext').innerHTML = currentQuote;
document.getElementById('quoteAuthor').innerHTML = currentAuthor;

}



function changeBG(){

  document.getElementById('main').innerHTML = currentColor;
}

//function getColor(){

/*index = Math.floor(Math.random()* colors.length)

currentColor = colors[index][0];
randomColor = colors [index] [1];

document.getElementById('main').innerHTML = currentColor;
}*/

// Variable liste citations

let quote = [
	["Si les voeux étaient des poissons, nous lancerions tous des filets.","Frank Herbert"],
	["La violence est le dernier refuge de l'incompétence.","Isaac Asimov"],
	["Je ne veux parler que de cinéma, pourquoi parler d’autre chose ? Avec le cinéma on parle de tout, on arrive à tout.","Jean-Luc Godard"],
	["Je suis venu, j'ai vu, j'ai vaincu.","Jules César"],
	["Rien ne s’est fait de grand qui ne soit une espérance exagérée.","Jules Verne"],
	["En te levant le matin, rappelle-toi combien précieux est le privilège de vivre, de respirer, d'être heureux.","Marc-Aurèle"],
	["La vie c’est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.","Forrest Gump"],
	["Les choses que l’on possède finissent par nous posséder","Fight Club"],
	["Allo McFly, y’a personne au bout du fil ! Faut réfléchir McFLy !","Retour vers le futur 2"],
	["La peur est le chemin vers le côté obscur: la peur mène à la colère, la colère mène à la haine, la haine… mène à la souffrance.","Maitre Yoda"],
	["Je suis toujours prêt à apprendre, bien que je n'aime pas toujours qu'on me donne des leçons.","Winston Churchill"],
	["Les meilleurs livres sont ceux qui racontent ce que l'on sait déjà.","Georges Orwell"],
	["Préparez-vous, l’hiver arrive !","Game of Thrones"],
	["Un Anneau pour les gouverner tous, un Anneau pour les trouver.","Le seigneur des Anneaux"],
	["J’ai fait un peu de bien, c’est mon meilleur ouvrage.","Voltaire"],
	["Mais qui gardera ces gardiens ?","Juvenal"],
	];

	let currentQuote = "";
	let currentAuthor = "";
	let randomColor = "";
	let currentColor = "";



let colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];
