from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def books():
	return jsonify(
		[
			{
				'title': "Spider-Man (2002)",
				'description': "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
			},
			{
				'title': "The Lord of the Rings: The Fellowship of the Ring (2001)",
				'description': "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
			},
			{
				'title': "The Lord of the Rings: The Return of the King (2003)",
				'description': "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
			},
			{
				'title': "Bad Boys (1995)",
				'description': "Two hip detectives protect a witness to a murder while investigating a case of stolen heroin from the evidence storage room from their police precinct."
			},
			{
				'title': "Mulan (2020)",
				'description': "A young Chinese maiden disguises herself as a male warrior in order to save her father."
			},
			{
				'title': "X-Men: Dark Phoenix (2019)",
				'description': "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix, causing the X-Men to decide if her life is worth more than all of humanity."
			},
			{
				'title': "The New Mutants (2020)",
				'description': "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves."
			},
			{
				'title': "Deadpool (2016)",
				'description': "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."
			},
			{
				'title': "Deadpool 2 (2018)",
				'description': "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable."
			},
		]
	)

if __name__ == '__main__':
	app.run(port=8000, debug=True, host='0.0.0.0')