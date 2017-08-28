// KAGE engine sample script for JavaScript engine
//
// % js sample.js > result.svg (SpiderMonkey)
// % java -jar js.jar sample.js > result.svg (Rhino)

load("2d.js");
load("buhin.js");
load("curve.js");
load("kage.js");
load("kagecd.js");
load("kagedf.js");
load("polygon.js");
load("polygons.js");

var kage = new Kage();
var polygons = new Polygons();

kage.kBuhin.push("u6f22", "99:150:0:9:12:73:200:u6c35-07:0:-10:50$99:0:0:54:10:190:199:u26c29-07");
kage.kBuhin.push("u6c35-07", "2:7:8:42:12:99:23:124:35$2:7:8:20:62:75:71:97:85$2:7:8:12:123:90:151:81:188$2:2:7:63:144:109:118:188:51");
kage.kBuhin.push("u26c29-07", "1:0:0:18:29:187:29$1:0:0:73:10:73:48$1:0:0:132:10:132:48$1:12:13:44:59:44:87$1:2:2:44:59:163:59$1:22:23:163:59:163:87$1:2:2:44:87:163:87$1:0:0:32:116:176:116$1:0:0:21:137:190:137$7:32:7:102:59:102:123:102:176:10:190$2:7:0:105:137:126:169:181:182");

kage.makeGlyph(polygons, "u6f22");

print(polygons.generateSVG(false));

