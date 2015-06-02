var app = function(state){
  magog.style({h1:{"text-align":"center"}});
  
  var d = "";
  d += "<h1>Myriad</h1>";
  d += app.mother();
  d += app.controls();
  d += app.daughters();
  return d;
};

app.mother = function(state){
  var id = magog.id();
  magog.after(id,function(){
    var canvas = document.getElementById("mother");
    paper.setup(canvas);
      var path = new paper.Path();
      path.strokeColor = 'black';
      var start = new paper.Point(100, 100);
      path.moveTo(start);
      path.lineTo(start.add([ 200, -50 ]));
    paper.view.draw();
  });
  
  var style = {};
  style["#mother"]={height:"300px", width:"300px"};
  magog.style(style);

  var d = "";
  d += "<canvas id='mother' onload='magog.eves["+id+"]' ></canvas>";
  return d;
};

app.daughters = function(state){
  
  var d = "";
  d += "<div></div>";
  return d;
};

app.controls = function(state){
  var style = {};
  style[".controls"] = {background:"#333",color:"#fff"};
  magog.style(style);
  var d = "";
  d += "<div class='controls'>";
    d += app.controls.dimensions(state);
  d += "</div>";
  return d;
};

app.controls.dimensions = function(state){

  var d = "";
  d += "<input type='text' placeholder='width'></input>";
  d += "<input type='text' placeholder='height'></input>";
  d += "<input type='button' value='Set Dimensions'></input>";
  return d;
};
