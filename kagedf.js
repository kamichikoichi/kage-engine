function dfDrawFont(kage, polygons, a1, a2, a3, x1, y1, x2, y2, x3, y3, x4, y4){
  var tx1, tx2, tx3, tx4, ty1, ty2, ty3, ty4, v;
  var rad;
	
  if(kage.kShotai == kage.kMincho){
    switch(a1 % 100){ // ... no need to divide
    case 0:
      break;
    case 1:
      if(a3 % 100 == 4){
        if(x1 == x2){
          if(y1 < y2){ v = 1; } else{ v = -1; }
          tx1 = x2;
          ty1 = y2 - kage.kMage * v;
        }
        else if(y1 == y2){ // ... no need
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * v;
          ty1 = y2;
        }
        else{
          rad = Math.atan((y2 - y1) / (x2 - x1));
          if(x1 < x2){ v = 1; } else{v = -1; }
          tx1 = x2 - kage.kMage * Math.cos(rad) * v;
          ty1 = y2 - kage.kMage * Math.sin(rad) * v;
        }
        cdDrawLine(kage, polygons, x1, y1, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x2, y2, x2 - kage.kMage * (((kage.kAdjustTateStep + 4) - Math.floor(a2 / 1000)) / (kage.kAdjustTateStep + 4)), y2, 1 + (a2 - a2 % 1000), a3 + 10);
      }
      else{
        cdDrawLine(kage, polygons, x1, y1, x2, y2, a2, a3);
      }
      break;
    case 2:
    //case 12: // ... no need
      if(a3 % 100 == 4){
        if(x2 == x3){
          tx1 = x3;
          ty1 = y3 - kage.kMage;
        }
        else if(y2 == y3){
          tx1 = x3 - kage.kMage;
          ty1 = y3;
        }
        else{
          rad = Math.atan((y3 - y2) / (x3 - x2));
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx1 = x3 - kage.kMage * Math.cos(rad) * v;
          ty1 = y3 - kage.kMage * Math.sin(rad) * v;
        }
        cdDrawCurve(kage, polygons, x1, y1, x2, y2, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x3, y3, x3 - kage.kMage, y3, 1, a3 + 10);
      }
      else if(a3 == 5){
        cdDrawCurve(kage, polygons, x1, y1, x2, y2, x3, y3, a2, 15);
      }
      else{
        cdDrawCurve(kage, polygons, x1, y1, x2, y2, x3, y3, a2, a3);
      }
      break;
    case 3:
      if(a3 % 1000 == 5){
        if(x1 == x2){
          if(y1 < y2){ v = 1; } else{ v = -1; }
          tx1 = x2;
          ty1 = y2 - kage.kMage * v;
        }
        else if(y1 == y2){
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * v;
          ty1 = y2;
        }
        else{
          rad = Math.atan((y2 - y1) / (x2 - x1));
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * Math.cos(rad) * v;
          ty1 = y2 - kage.kMage * Math.sin(rad) * v;
        }
        if(x2 == x3){
          if(y2 < y3){ v = 1; } else{ v = -1; }
          tx2 = x2;
          ty2 = y2 + kage.kMage * v;
        }
        else if(y2 == y3){
          if(x2 < x3){ v = 1; } else { v = -1; }
          tx2 = x2 + kage.kMage * v;
          ty2 = y2;
        }
        else{
          rad = Math.atan((y3 - y2) / (x3 - x2));
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * Math.cos(rad) * v;
          ty2 = y2 + kage.kMage * Math.sin(rad) * v;
        }
        tx3 = x3;
        ty3 = y3;
        
        cdDrawLine(kage, polygons, x1, y1, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x2, y2, tx2, ty2, 1 + (a2 - a2 % 1000) * 10, 1 + (a3 - a3 % 1000));
        if((x2 < x3 && tx3 - tx2 > 0) || (x2 > x3 && tx2 - tx3 > 0)){ // for closer position
          cdDrawLine(kage, polygons, tx2, ty2, tx3, ty3, 6 + (a3 - a3 % 1000), 5); // bolder by force
        }
      }
      else{
        if(x1 == x2){
          if(y1 < y2){ v = 1; } else { v = -1; }
          tx1 = x2;
          ty1 = y2 - kage.kMage * v;
        }
        else if(y1 == y2){
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * v;
          ty1 = y2;
        }
        else{
          rad = Math.atan((y2 - y1) / (x2 - x1));
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * Math.cos(rad) * v;
          ty1 = y2 - kage.kMage * Math.sin(rad) * v;
        }
        if(x2 == x3){
          if(y2 < y3){ v = 1; } else{ v = -1; }
          tx2 = x2;
          ty2 = y2 + kage.kMage * v;
        }
        else if(y2 == y3){
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * v;
          ty2 = y2;
        }
        else{
          rad = Math.atan((y3 - y2) / (x3 - x2));
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * Math.cos(rad) * v;
          ty2 = y2 + kage.kMage * Math.sin(rad) * v;
        }
        cdDrawLine(kage, polygons, x1, y1, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x2, y2, tx2, ty2, 1 + (a2 - a2 % 1000) * 10, 1 + (a3 - a3 % 1000));
        cdDrawLine(kage, polygons, tx2, ty2, x3, y3, 6 + (a3 - a3 % 1000), a3); // bolder by force
      }
      break;
    case 12:
      cdDrawCurve(kage, polygons, x1, y1, x2, y2, x3, y3, a2, 1);
      cdDrawLine(kage, polygons, x3, y3, x4, y4, 6, a3);
      break;
    case 4:
      rate = 6;
      if((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2) < 14400){ // smaller than 120 x 120
        rate = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2)) / 120 * 6;
      }
      if(a3 == 5){
        if(x1 == x2){
          if(y1 < y2){ v = 1; } else{ v = -1; }
          tx1 = x2;
          ty1 = y2 - kage.kMage * v * rate;
        }
        else if(y1 == y2){
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * v * rate;
          ty1 = y2;
        }
        else{
          rad = Math.atan((y2 - y1) / (x2 - x1));
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * Math.cos(rad) * v * rate;
          ty1 = y2 - kage.kMage * Math.sin(rad) * v * rate;
        }
        if(x2 == x3){
          if(y2 < y3){ v = 1; } else{ v = -1; }
          tx2 = x2;
          ty2 = y2 + kage.kMage * v * rate;
        }
        else if(y2 == y3){
          if(x2 < x3){ v = 1; } else { v = -1; }
          tx2 = x2 + kage.kMage * v * rate;
          ty2 = y2;
        }
        else{
          rad = Math.atan((y3 - y2) / (x3 - x2));
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * Math.cos(rad) * v * rate;
          ty2 = y2 + kage.kMage * Math.sin(rad) * v * rate;
        }
        tx3 = x3;
        ty3 = y3;
        
        cdDrawLine(kage, polygons, x1, y1, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x2, y2, tx2, ty2, 1, 1);
        if(tx3 - tx2 > 0){ // for closer position
          cdDrawLine(kage, polygons, tx2, ty2, tx3, ty3, 6, 5); // bolder by force
        }
      }
      else{
        if(x1 == x2){
          if(y1 < y2){ v = 1; } else { v = -1; }
          tx1 = x2;
          ty1 = y2 - kage.kMage * v * rate;
        }
        else if(y1 == y2){
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * v * rate;
          ty1 = y2;
        }
        else{
          rad = Math.atan((y2 - y1) / (x2 - x1));
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * Math.cos(rad) * v * rate;
          ty1 = y2 - kage.kMage * Math.sin(rad) * v * rate;
        }
        if(x2 == x3){
          if(y2 < y3){ v = 1; } else{ v = -1; }
          tx2 = x2;
          ty2 = y2 + kage.kMage * v * rate;
        }
        else if(y2 == y3){
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * v * rate;
          ty2 = y2;
        }
        else{
          rad = Math.atan((y3 - y2) / (x3 - x2));
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * Math.cos(rad) * v * rate;
          ty2 = y2 + kage.kMage * Math.sin(rad) * v * rate;
        }
        cdDrawLine(kage, polygons, x1, y1, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x2, y2, tx2, ty2, 1, 1);
        cdDrawLine(kage, polygons, tx2, ty2, x3, y3, 6, a3); // bolder by force
      }
      break;
    case 6:
      if(a3 % 100 == 4){
        if(x3 == x4){
          tx1 = x4;
          ty1 = y4 - kage.kMage;
        }
        else if(y3 == y4){
          tx1 = x4 - kage.kMage;
          ty1 = y4;
        }
        else{
          rad = Math.atan((y4 - y3) / (x4 - x3));
          if(x3 < x4){ v = 1; } else{ v = -1; }
          tx1 = x4 - kage.kMage * Math.cos(rad) * v;
          ty1 = y4 - kage.kMage * Math.sin(rad) * v;
        }
        cdDrawBezier(kage, polygons, x1, y1, x2, y2, x3, y3, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x4, y4, x4 - kage.kMage, y4, 1, a3 + 10);
      }
      else if(a3 == 5){
        cdDrawBezier(kage, polygons, x1, y1, x2, y2, x3, y3, x4, y4, a2, 15);
      }
      else{
        cdDrawBezier(kage, polygons, x1, y1, x2, y2, x3, y3, x4, y4, a2, a3);
      }
      break;
    case 7:
      cdDrawLine(kage, polygons, x1, y1, x2, y2, a2, 1);
      cdDrawCurve(kage, polygons, x2, y2, x3, y3, x4, y4, 1 + (a2 - a2 % 1000), a3);
      break;
    case 9: // may not be exist ... no need
      //kageCanvas[y1][x1] = 0;
      //kageCanvas[y2][x2] = 0;
      break;
    default:
      break;
    }
  }
    
  else{ // gothic
    switch(a1 % 100){
    case 0:
      break;
    case 1:
      if(a3 == 4){
        if(x1 == x2){
          if(y1 < y2){ v = 1; } else{ v = -1; }
          tx1 = x2;
          ty1 = y2 - kage.kMage * v;
        }
        else if(y1 == y2){
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * v;
          ty1 = y2;
        }
        else{
          rad = Math.atan((y2 - y1) / (x2 - x1));
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * Math.cos(rad) * v;
          ty1 = y2 - kage.kMage * Math.sin(rad) * v;
        }
        cdDrawLine(kage, polygons, x1, y1, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x2, y2, x2 - kage.kMage * 2, y2 - kage.kMage * 0.5, 1, 0);
      }
      else{
        cdDrawLine(kage, polygons, x1, y1, x2, y2, a2, a3);
      }
      break;
    case 2:
    case 12:
      if(a3 == 4){
        if(x2 == x3){
          tx1 = x3;
          ty1 = y3 - kage.kMage;
        }
        else if(y2 == y3){
          tx1 = x3 - kage.kMage;
          ty1 = y3;
        }
        else{
          rad = Math.atan((y3 - y2) / (x3 - x2));
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx1 = x3 - kage.kMage * Math.cos(rad) * v;
          ty1 = y3 - kage.kMage * Math.sin(rad) * v;
        }
        cdDrawCurve(kage, polygons, x1, y1, x2, y2, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x3, y3, x3 - kage.kMage * 2, y3 - kage.kMage * 0.5, 1, 0);
      }
      else if(a3 == 5){
        tx1 = x3 + kage.kMage;
        ty1 = y3;
        tx2 = tx1 + kage.kMage * 0.5;
        ty2 = y3 - kage.kMage * 2;
        cdDrawCurve(kage, polygons, x1, y1, x2, y2, x3, y3, a2, 1);
        cdDrawCurve(kage, polygons, x3, y3, tx1, ty1, tx2, ty2, 1, 0);
      }
      else{
        cdDrawCurve(kage, polygons, x1, y1, x2, y2, x3, y3, a2, a3);
      }
      break;
    case 3:
      if(a3 == 5){
        if(x1 == x2){
          if(y1 < y2){ v = 1; } else{ v = -1; }
          tx1 = x2;
          ty1 = y2 - kage.kMage * v;
        }
        else if(y1 == y2){
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * v;
          ty1 = y2;
        }
        else{
          rad = Math.atan((y2 - y1) / (x2 - x1));
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * Math.cos(rad) * v;
          ty1 = y2 - kage.kMage * Math.sin(rad) * v;
        }
        if(x2 == x3){
          if(y2 < y3){ v = 1; } else{ v = -1; }
          tx2 = x2;
          ty2 = y2 + kage.kMage * v;
        }
        else if(y2 == y3){
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * v;
          ty2 = y2;
        }
        else{
          rad = Math.atan((y3 - y2) / (x3 - x2));
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * Math.cos(rad) * v;
          ty2 = y2 + kage.kMage * Math.sin(rad) * v;
        }
        tx3 = x3 - kage.kMage;
        ty3 = y3;
        tx4 = x3 + kage.kMage * 0.5;
        ty4 = y3 - kage.kMage * 2;
        
        cdDrawLine(kage, polygons, x1, y1, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x2, y2, tx2, ty2, 1, 1);
        cdDrawLine(kage, polygons, tx2, ty2, tx3, ty3, 1, 1);
        cdDrawCurve(kage, polygons, tx3, ty3, x3, y3, tx4, ty4, 1, 0);
      }
      else{
        if(x1 == x2){
          if(y1 < y2){ v = 1; } else{ v = -1; }
          tx1 = x2;
          ty1 = y2 - kage.kMage * v;
        }
        else if(y1 == y2){
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * v;
          ty1 = y2;
        }
        else{
          rad = Math.atan((y2 - y1) / (x2 - x1));
          if(x1 < x2){ v = 1; } else{ v = -1; }
          tx1 = x2 - kage.kMage * Math.cos(rad) * v;
          ty1 = y2 - kage.kMage * Math.sin(rad) * v;
        }
        if(x2 == x3){
          if(y2 < y3){ v = 1; } else{ v = -1; }
          tx2 = x2;
          ty2 = y2 + kage.kMage * v;
        }
        else if(y2 == y3){
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * v;
          ty2 = y2;
        }
        else{
          rad = Math.atan((y3 - y2) / (x3 - x2));
          if(x2 < x3){ v = 1; } else{ v = -1; }
          tx2 = x2 + kage.kMage * Math.cos(rad) * v;
          ty2 = y2 + kage.kMage * Math.sin(rad) * v;
        }
        
        cdDrawLine(kage, polygons, x1, y1, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x2, y2, tx2, ty2, 1, 1);
        cdDrawLine(kage, polygons, tx2, ty2, x3, y3, 1, a3);
      }
      break;
    case 6:
      if(a3 == 5){
        tx1 = x4 - kage.kMage;
        ty1 = y4;
        tx2 = x4 + kage.kMage * 0.5;
        ty2 = y4 - kage.kMage * 2;
        /*
				cdDrawCurve(x1, y1, x2, y2, (x2 + x3) / 2, (y2 + y3) / 2, a2, 1);
				cdDrawCurve((x2 + x3) / 2, (y2 + y3) / 2, x3, y3, tx1, ty1, 1, 1);
         */
        cdDrawBezier(kage, polygons, x1, y1, x2, y2, x3, y3, tx1, ty1, a2, 1);
        cdDrawCurve(kage, polygons, tx1, ty1, x4, y4, tx2, ty2, 1, 0);
      }
      else{
        /*
				cdDrawCurve(x1, y1, x2, y2, (x2 + x3) / 2, (y2 + y3) / 2, a2, 1);
				cdDrawCurve((x2 + x3) / 2, (y2 + y3) / 2, x3, y3, x4, y4, 1, a3);
         */
        cdDrawBezier(kage, polygons, x1, y1, x2, y2, x3, y3, x4, y4, a2, a3);
      }
      break;
    case 7:
      cdDrawLine(kage, polygons, x1, y1, x2, y2, a2, 1);
      cdDrawCurve(kage, polygons, x2, y2, x3, y3, x4, y4, 1, a3);
      break;
    case 9: // may not be exist
      //kageCanvas[y1][x1] = 0;
      //kageCanvas[y2][x2] = 0;
      break;
    default:
      break;
    }
  }
}
