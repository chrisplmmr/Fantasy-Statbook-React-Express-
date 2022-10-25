const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// Upon request, send message back
app.get('/express_backend', (req, res) => {
  res.send({ name:'Bob', car:'4Runner'});
});

// app.get('/2019data', (_, res) => {
// 	res.sendFile(__dirname + '\\datafiles\\2019.txt');
// });

app.get('/2019data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2019.txt');
});

app.get('/2018data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2018.txt');
});

app.get('/2017data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2017.txt');
});

app.get('/2016data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2016.txt');
});

app.get('/2015data', (_, res) => {
res.sendFile(__dirname + '\\datafiles\\2015.txt');
});

app.get('/2014data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2014.txt');
});

app.get('/2013data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2013.txt');
});

app.get('/2012data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2012.txt');
});

app.get('/2011data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2011.txt');
});

app.get('/2010data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2010.txt');
});

app.get('/2009data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2009.txt');
});

app.get('/2008data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2008.txt');
});

app.get('/2007data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2007.txt');
});

app.get('/2006data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2006.txt');
});

app.get('/2005data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2005.txt');
});

app.get('/2004data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2004.txt');
});

app.get('/2003data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2003.txt');
});

app.get('/2002data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2002.txt');
});

app.get('/2001data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2001.txt');
});

app.get('/2000data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\2000.txt');
});

app.get('/1999data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1999.txt');
});

app.get('/1998data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1998.txt');
});

app.get('/1997data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1997.txt');
});

app.get('/1996data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1996.txt');
});

app.get('/1995data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1995.txt');
});

app.get('/1994data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1994.txt');
});

app.get('/1993data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1993.txt');
});

app.get('/1992data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1992.txt');
});

app.get('/1991data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1991.txt');
});

app.get('/1990data', (_, res) => {
	res.sendFile(__dirname + '\\datafiles\\1990.txt');
});

// Routes handled in react
// app.get('/', async (req, res) => {
// 	res.render('index');
// });