function Polygons(){
  // method
 	function clear(){ // void
    this.array = new Array();
  }
  Polygons.prototype.clear = clear;
	
  function push(polygon){ // void
    // only a simple check
    var minx = 200;
    var maxx = 0;
    var miny = 200;
    var maxy = 0;
    var error = 0;
    for(var i = 0; i < polygon.array.length; i++){
      if(polygon.array[i].x < minx){
        minx = polygon.array[i].x;
      }
      if(polygon.array[i].x > maxx){
        maxx = polygon.array[i].x;
      }
      if(polygon.array[i].y < miny){
        miny = polygon.array[i].y;
      }
      if(polygon.array[i].y > maxy){
        maxy = polygon.array[i].y;
      }
      if(isNaN(polygon.array[i].x) || isNaN(polygon.array[i].y)){
        error++;
      }
    }
    if(error == 0 && minx != maxx && miny != maxy && polygon.array.length >= 3){
      var newArray = new Array();
      newArray.push(polygon.array.shift());
      while(polygon.array.length != 0){
        var temp = polygon.array.shift();
        //if(newArray[newArray.length - 1].x != temp.x ||
        //   newArray[newArray.length - 1].y != temp.y){
          newArray.push(temp);
        //}
      }
      if(newArray.length >= 3){
        polygon.array = newArray;
        this.array.push(polygon);
      }
    }
  }
  Polygons.prototype.push = push;
  
  function generateSVG(curve){ // string
    var buffer = "";
    buffer += "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" baseProfile=\"full\" viewBox=\"0 0 200 200\" width=\"200\" height=\"200\">\n";
    if(curve){
      for(var i = 0; i < this.array.length; i++){
        var mode = "L";
        buffer += "<path d=\"M ";
        buffer += this.array[i].array[0].x + "," + this.array[i].array[0].y + " ";
        for(var j = 1; j < this.array[i].array.length; j++){
          if(this.array[i].array[j].off == 1){
            buffer += "Q ";
            mode = "Q";
          } else if(mode == "Q" && this.array[i].array[j - 1].off != 1){
            buffer += "L ";
          } else if(mode == "L" && j == 1){
            buffer += "L ";
          }
          buffer += this.array[i].array[j].x + "," + this.array[i].array[j].y + " ";
        }
        buffer += "Z\" fill=\"black\" />\n";
      }
      buffer += "</svg>\n";
    } else {
      buffer += "<g fill=\"black\">\n";
      for(var i = 0; i < this.array.length; i++){
        buffer += "<polygon points=\"";
        for(var j = 0; j < this.array[i].array.length; j++){
          buffer += this.array[i].array[j].x + "," + this.array[i].array[j].y + " ";
        }
        buffer += "\" />\n";
      }
      buffer += "</g>\n";
      buffer += "</svg>\n";
    }
    return buffer;
  }
  Polygons.prototype.generateSVG = generateSVG;
  
  function generateEPS(){ // string
    var buffer = "";
    buffer += "%!PS-Adobe-3.0 EPSF-3.0\n";
    buffer += "%%BoundingBox: 0 -208 1024 816\n";
    buffer += "%%Pages: 0\n";
    buffer += "%%Title: Kanji glyph\n";
    buffer += "%%Creator: GlyphWiki powered by KAGE system\n";
    buffer += "%%CreationDate: " + new Date() + "\n";
    buffer += "%%EndComments\n";
    buffer += "%%EndProlog\n";
    
    for(var i = 0; i < this.array.length; i++){
      for(var j = 0; j < this.array[i].array.length; j++){
        buffer += (this.array[i].array[j].x * 5) + " " + (1000 - this.array[i].array[j].y * 5 - 200) + " ";
        if(j == 0){
          buffer += "newpath\nmoveto\n";
        } else {
          buffer += "lineto\n";
        }
      }
      buffer += "closepath\nfill\n";
    }
    buffer += "%%EOF\n";
    return buffer;
  }
  Polygons.prototype.generateEPS = generateEPS;
  
  // property
  this.array = new Array();
  
  return this;
}
