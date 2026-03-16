// Type coerction	-	prevod jedného dátového typu na iný

console.log(1 == "1")  // Porovnáva hodnoty, ale JavaScript môže automaticky konvertovať typy.
console.log(1 === "1") // Porovnáva hodnotu aj typ. //! !!!Žiadna automatická konverzia.!!!

console.log(1 == true)		//	true
console.log([[]] == false)	//	true

//	https://dorey.github.io/JavaScript-Equality-Table/ 

//note	pri podmienkach dochádza k type coerction
if (0) { // false
	console.log("test")
}

if (1) {	//	true
	console.log("test")
}

