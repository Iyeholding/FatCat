function fatcat(name, kilogram) {
	var name = name;
	var fatcat = {
		type: 'slim',
		kg: kilogram
	};

	console.log('Your Cat ' + name + ' is at ' + fatcat.kg + 'kg');
}

module.exports.fatcat = FatCat;