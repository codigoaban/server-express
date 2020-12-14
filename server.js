const express = require('express')
const app = express();

const hbs = require('hbs');
//require('./hbs/helpers');

//Helpers
hbs.registerHelper('getAnio', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) =>{
	let palabras = texto.split(' ');

	palabras.forEach( (palabra, idx) => {
		palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
	});

	return palabras.join(' ');
});



//puerto heroku
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



 
app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'gladys'
	});
});

app.get('/about', (req, res) => {
	res.render('about');
});

 
app.listen(port, ()=> {
	console.log(`Escuchando peticiones en el puerto ${ port }`);
});