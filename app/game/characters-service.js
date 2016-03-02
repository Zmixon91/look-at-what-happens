app.factory('CharactersService', function(){

	var characters = [{
		name: 'Mario',
		traits: ['facial hair', 'hat', 'male', 'gloves', 'jumps', 'short'],
		url: '/assets/img/mario.jpg'
	},{
		name: 'Luigi',
		traits: ['facial hair', 'hat', 'male', 'gloves', 'jumps', 'tall'],
		url: '/assets/img/luigi.jpg'
	},{
		name: 'Peach',
		traits: ['hat', 'female', 'gloves', 'jumps', 'tall'],
		url: '/assets/img/peach.jpg'
	},{
		name: 'Rosalina',
		traits: ['hat', 'female', 'jumps', 'weapon', 'magic'],
		url: '/assets/img/rosalina.jpg'
	},{
		name: 'Wario',
		traits: ['facial hair', 'hat', 'male', 'gloves', 'jumps', 'short'],
		url: '/assets/img/wario.jpg'
	},{
		name: 'Dr. Mario',
		traits: ['facial hair', 'male', 'gloves', 'weapon', 'short'],
		url: '/assets/img/dr-mario.jpg'
	},{
		name: 'Donkey Kong',
		traits: ['animal', 'male', 'jumps'],
		url: '/assets/img/donkey.jpg'
	},{
		name: 'Diddy Kong',
		traits: ['animal', 'male', 'hat', 'jumps', 'short'],
		url: '/assets/img/diddy.jpg'
	},{
		name: 'Link',
		traits: ['hat', 'male', 'weapon', 'gloves'],
		url: '/assets/img/link.jpg'
	},{
		name: 'Zelda',
		traits: ['magic', 'female', 'gloves'],
		url: '/assets/img/zelda.jpg'
	},{
		name: 'Sheik',
		traits: ['hat', 'female', 'magic'],
		url: '/assets/img/sheik.jpg'
	},{
		name: 'Ganondorf',
		traits: ['facial hair', 'male', 'gloves', 'magic', 'weapon', 'tall'],
		url: '/assets/img/ganondorf.jpg'
	},{
		name: 'Toon Link',
		traits: ['hat', 'male', 'weapon', 'child', 'short'],
		url: '/assets/img/toon-link.jpg'
	},{
		name: 'Samus',
		traits: ['hat', 'female', 'gloves', 'jumps', 'weapon'],
		url: '/assets/img/samus.jpg'
	},{
		name: 'Zero Suit Samus',
		traits: ['female', 'gloves', 'jumps', 'weapon'],
		url: '/assets/img/zero-samus.jpg'
	},{
		name: 'Pit',
		traits: ['hat', 'wings', 'male', 'magic', 'jumps', 'weapon'],
		url: '/assets/img/pit.jpg'
	},{
		name: 'Palutena',
		traits: ['hat', 'female', 'gloves', 'jumps', 'weapon', 'magic'],
		url: '/assets/img/palutena.jpg'
	},{
		name: 'Fox',
		traits: ['animal', 'male', 'gloves', 'jumps', 'weapon', 'short'],
		url: '/assets/img/fox.jpg'
	},{
		name: 'Falco',
		traits: ['animal', 'male', 'jumps', 'weapon', 'wings', 'short'],
		url: '/assets/img/falco.jpg'
	},{
		name: 'Bowser Jr',
		traits: ['animal', 'male', 'child', 'weapon', 'short'],
		url: '/assets/img/bowser-jr.jpg'
	},{
		name: 'Bowser',
		traits: ['animal', 'male', 'jumps', 'tall'],
		url: '/assets/img/bowser.jpg'
	},{
		name: 'Yoshi',
		traits: ['animal', 'jumps', 'short'],
		url: '/assets/img/yoshi.jpg'
	},{
		name: 'Villager',
		traits: ['child', 'male', 'short'],
		url: '/assets/img/villager.jpg'
	},{
		name: 'Ness',
		traits: ['child', 'male', 'weapon', 'magic', 'hat', 'short'],
		url: '/assets/img/ness.jpg'
	},{
		name: 'Lucas',
		traits: ['child', 'male', 'magic', 'short'],
		url: '/assets/img/lucas.jpg'
	},{
		name: 'Little Mac',
		traits: ['male', 'gloves'],
		url: '/assets/img/mac.jpg'
	},{
		name: 'Cloud',
		traits: ['male', 'gloves', 'weapon', 'magic'],
		url: '/assets/img/cloud.jpg'
	},{
		name: 'King Dedede',
		traits: ['animal', 'male', 'hat', 'weapon', 'tall'],
		url: '/assets/img/dedede.jpg'
	},{
		name: 'Ike',
		traits: ['male', 'gloves', 'weapon', 'magic'],
		url: '/assets/img/ike.jpg'
	},{
		name: 'Marth',
		traits: ['male', 'gloves', 'weapon', 'magic', 'hat'],
		url: '/assets/img/marth.jpg'
	},{
		name: 'Roy',
		traits: ['male', 'weapon', 'magic'],
		url: '/assets/img/roy.jpg'
	},{
		name: 'Robin',
		traits: ['female', 'magic'],
		url: '/assets/img/robin.jpg'
	},{
		name: 'Lucina',
		traits: ['female', 'hat', 'weapon', 'magic'],
		url: '/assets/img/lucina.jpg'
	},{
		name: 'Kirby',
		traits: ['animal', 'magic', 'jumps', 'short'],
		url: '/assets/img/kirby.jpg'
	},{
		name: 'Meta Knight',
		traits: ['animal', 'gloves', 'weapon', 'magic', 'wings', 'short'],
		url: '/assets/img/meta-knight.jpg'
	}]

	function getCharacters(){
		return characters;
	}

	function getPropertyList(){
		var propertyList = {};
		characters.forEach(function(character){
			character.traits.forEach(function(trait){
				propertyList[trait] = {name: trait};
			})
		});
		return propertyList;
	}

	return {
		getCharacters: getCharacters,
		getPropertyList: getPropertyList
	}

})