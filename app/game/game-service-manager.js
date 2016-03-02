app.service('GameManager', function (CharactersService) {

	var _computerChoice;
	var _game = {
		characters: CharactersService.getCharacters(),
		propertyList: CharactersService.getPropertyList(),
		traitsCost: 2,
		guesses: 0
	};

	this.newGame = function () {
		setRandomChoice();
		reset();
		return _game;
	}

	this.checkGuess = function (character) {
		//THIS ALLOWS YOU TO CHECK EACH CHARACTER INDIVIDUALLY
		//NO MODIFICATION NEEDED HERE
		if (_game.victory) {
			return
		}
		if (character === _computerChoice) {
			_game.victory = true;
			gameOver();
		} else {
			character.possible = false;
			_game.message = 'Character isn\'t ' + character.name;
		}
		_game.guesses++;
		_game.traitsCost++;
		if (_game.guesses > 9) {
			gameOver()
		}
	}

	this.checkProperty = function (prop) {
		if (_game.victory) {
			return
		}
		if (_game.traitsCost < 10 && _game.guesses < 10) {
			// Can guess
			prop.used = true;
			_game.traitsCost++;
			_game.guesses++;
			var compHasProp = false;
			// loop through comp traits
			_game.message = 'Character does not have ' + prop.name;
			for (var i = 0; i < _computerChoice.traits.length; i++) {
				if (_computerChoice.traits[i] === prop.name) {
					compHasProp = true;
					_game.message = 'Character has ' + prop.name;
				}
			}
			// loop through all characters
			for (var i = 0; i < _game.characters.length; i++) {
				var hasProp = false;
				// check if characters have player chosen trait
				for (var j = 0; j < _game.characters[i].traits.length; j++) {
					if (_game.characters[i].traits[j] === prop.name) {
						hasProp = true;
					}
				}
				if (!hasProp && compHasProp || !compHasProp && hasProp) {
					_game.characters[i].possible = false;
				}
			}
		}
		if (prop.name === 'male') {
			_game.propertyList.female.used = true;
		}
		if (prop.name === 'female') {
			_game.propertyList.male.used = true;
		}
		if (prop.name === 'short') {
			_game.propertyList.tall.used = true;
		}
		if (prop.name === 'tall') {
			_game.propertyList.short.used = true;
		}
		/**  CAN GUESS
		 * Check if the traitCost is greater than remaning guesses
		 * totalGuesses = 10; guesses starts at 0 and should be for each guess
		 * the traitCost starts at 2 and goes up by one for each propertyCheck
		 * Dont forget to add the traitCost to the _game.guesses
		 * setting _game.message will provide the user with feedback
		 */
		/**  _COMPUTERCHOICE has TRAIT
		 * _computerChocie.traits === [String, String]
		 * check if _computerChoice.traits has the selected prop.name if so set hasProp = true;
		 * also set prop.used = true to disable the same trait check
		 */


		/** EACH CHARACTER HAS TRAIT
		 * now check each _game.characters individually
		 * if the character.traits has prop.name set
		 * found = true
		 * after checking the traits
		 *
		 * if hasProp && !found
		 * character.possible = false
		 *
		 * What else would cause a character.possible to === false?
		 *
		 */
	}

	function reset() {
		_game.traitsCost = 2;
		_game.guesses = 0;
		_game.victory = false;
		_game.computerChoice = null;
		_game.message = null;
		for (var i = 0; i < _game.characters.length; i++) {
			_game.characters[i].possible = true;
		}
		for (var key in _game.propertyList) {
			_game.propertyList[key].used = false;
		}
		/**
		 * Reset all of the values on _game
		 * each character on _game.characters should set to
		 * character.possible = true
		 * all of the traits in  _game.propertyList <--- its an {}
		 * should be set to
		 * _game.propertyList[trait].used = false
		 */
	}

	function gameOver() {
		_game.computerChoice = _computerChoice;
		if (_game.victory) {
			_game.message = 'You win! It was ' + _computerChoice.name + '!';
			return true;
		}
		_game.message = 'You lose! It was ' + _computerChoice.name + '!';
		return true;
		/**
		 * make sure the guesses are less than 10
		 * return true if the game should be over
		 * if the game.victory
		 * set _game.computerChoice = _computerChoice
		 * return true
		 */
	}

	function setRandomChoice() {
		var rand = Math.floor(Math.random() * _game.characters.length);
		_computerChoice = _game.characters[rand];
		/**
		 * This function should get a random index between 0 - _game.characters.length
		 * then set _computerChoice to the object at the randI index
		 */
	}

})