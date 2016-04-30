var dir = require('node-dir');
var path = require('path');

var glob = require("glob");
var fs = require("fs");

/*
dir.readFiles(path.resolve(__dirname, "../src"), {
    match: /.md$/,
    exclude: /^\./
    }, function(err, content, next) {
        if (err) throw err;
        console.log('content:', content);
        next();
    },
    function(err, files){
        if (err) throw err;
        console.log('finished reading files:',files);
    });
*/
var re = /```(.*)\n((\/\/(.*))((.*\n)*?))```/gm;

function parseFile(filename, callback) {
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) throw err;    
      
    var examples = [];
    var m;
    
    while ((m = re.exec(data)) !== null) {
      if (m.index === re.lastIndex) {
          re.lastIndex++;
      }
      
      var id = (m[4]||"").trim()
      var example = {};
      example.type = m[1];
      example.fullContent = m[2];
      example.id = id;
      example.content = example.fullContent.replace(/(\/\/.*)\n/g, "");
      examples.push(example);            
    }
    
    callback(examples);
  });
}

glob(path.resolve(__dirname, "../../src/", "./**/*.md"), {}, function (er, files) {
  var examples = {};
  files.forEach(function(file){
    parseFile(file, function(data){
      examples[file] = data;
      console.log(examples);
    });
  });
  console.log(examples);
});
