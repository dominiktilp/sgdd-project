var a = new XMLHttpRequest();

if(!window.location.query) {
    window.location.query = function(source){
        var map = {};
        source = source || this.search;

        if ("" != source) {
            var groups = source.substr(1).split("&"), i;

            for (i in groups) {
                i = groups[i].split("=");
                map[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
            }
        }

        return map;
    };
}


a.open("GET", "src/"+window.location.query().type+"/"+window.location.query().name+"/"+window.location.query().name+".md",true);
a.onreadystatechange = function() {
  if( this.readyState == 4) {
    if( this.status == 200) {
      var md = this.responseText;           
      
      var re = /```(.*)\n((\/\/(.*))((.*\n)*?))```/gm;
      
      var example = {};
      var m;
      
      while ((m = re.exec(md)) !== null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
        
        var id = (m[4]||"").trim()
        if (id === window.location.query().example) {
          example.type = m[1];
          example.fullContent = m[2];
          example.id = id;
          break;
        }
        
      }
      
      example.content = example.fullContent.replace(/(\/\/.*)\n/g, "");

      
      document.getElementById("sgdd-example").innerHTML = example.content;
      
    }
    else alert("HTTP error "+this.status+" "+this.statusText);
  }
}
a.send();