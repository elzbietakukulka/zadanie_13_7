var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpeg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

/*fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});*/

fs.readFile('../zadanie_13_7/teksty/tekst.txt', 'utf-8', function(err, data) {
    var text = data;
    fs.writeFile('../zadanie_13_7/teksty/tekstDwa.txt', text, function(err) {
        if (err) throw err;
        fs.readFile('../zadanie_13_7/teksty/tekstDwa.txt', 'utf-8', function(err, data) {
            console.log(data);
        });
    });
});