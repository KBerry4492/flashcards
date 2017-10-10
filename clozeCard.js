
var Cloze = function(){
	this.newCard = function(text, cloze){
		this.fulltext = text;
		this.cloze = cloze;
		this.partial = "";

		if (this.fulltext.includes(this.cloze)) {
			this.partial = this.fulltext.replace(this.cloze, " ... ");
		}
		else{
			console.log("Woops, invalid Cloze!");
		}
	}
}

module.exports = Cloze;