#!/usr/bin/env node

var pictureTube = require('picture-tube')
var tube = pictureTube();
var url = process.argv[2] || process.argv[3];
tube.pipe(process.stdout);
 
//var fs = require('fs');
//fs.createReadStream('eb6e5.png').pipe(tube);

var request = require("request");
request.get(url).pipe(tube);