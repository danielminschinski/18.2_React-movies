//var element = React.createElement('div', {}, 'Hello world!');


/*var element = React.createElement('div', {}, 
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {},
		React.createElement('li', {},
			React.createElement('h2', {}, 'Harry Potter'),
			React.createElement('p', {}, 'film o czarodzieju')
		),
		React.createElement('li', {},
			React.createElement('h2', {}, 'Król lew'),
			React.createElement('p', {}, 'Fil opowiadający historię króla sawanny')
			)
		)
	);*/

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		posterImg: 'https://ae01.alicdn.com/kf/HTB1XU9TOVXXXXbiapXXq6xXFXXXn/Obraz-na-p-tnie-na-zam-wienie-Harry-Potter-plakat-Harry-Potter-naklejki-cienne-Harry-Porter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		posterImg: 'https://ssl-gfx.filmweb.pl/po/63/16/776316/7892306.3.jpg'
	},
	{
		id: 3,
		title: 'Joker',
		desc: 'Amerykański dramat psychologiczny',
		posterImg: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSKQyxhp32zymjvpPFyoyplR35o20qpkh0raONZ_JsTG7Gf1w78'
	},
	{
		id: 4,
		title: 'Szybcy i wściekli 8',
		desc: 'Amerykański film akcji',
		posterImg: 'https://csn.naekranie.pl/wp-content/uploads/2015/04/fast.jpg' 

	}
];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', { src: movie.posterImg, alt: 'plakat filmu' })
		);
});

var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));