var width = 960;
var height = 700;

var frame = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("background", "#ccc");


//Load in data file//
d3.json("js/data/sessions.json", function(data) {



//Get amount of each Model selected, and put the number in an array//
var NumOfXE = [];
for (i = 0; i < data.length; i++){
    if (data[i].Model == "XE"){
        NumOfXE.push(data[i].Model)
    }
};
NumOfXE = NumOfXE.length;

var NumOfXF = [];
for (i = 0; i < data.length; i++){
    if (data[i].Model == "XF"){
        NumOfXF.push(data[i].Model)
    }
};
NumOfXF = NumOfXF.length;

var NumOfXJ = [];
for (i = 0; i < data.length; i++){
    if (data[i].Model == "XJ"){
        NumOfXJ.push(data[i].Model)
    }
};
NumOfXJ = NumOfXJ.length;

var NumOfFPace = [];
for (i = 0; i < data.length; i++){
    if (data[i].Model == "F-PACE"){
        NumOfFPace.push(data[i].Model)
    }
};
NumOfFPace = NumOfFPace.length;

console.log(NumOfXE, NumOfXF, NumOfXJ, NumOfFPace)



var nodes = [
    { x: 100, y: 400, r: NumOfXE }, //x and y are start points
    { x: 300, y: 400, r: NumOfXF },
    { x: 500, y: 400, r: NumOfXJ },
    { x: 700, y: 400, r: NumOfFPace }
];


// var force = d3.layout.force()
//     .nodes(nodes)
//     .size([width, height])
//     .gravity(.02)
//     .charge(0)
//     .on("tick", tick)
//     .start();



var force = d3.layout.force()
    // .gravity(0.05)
    // .charge(-0.7)
    .size([width, height])
    .nodes(nodes);



var node = frame.selectAll('.node')
    .data(nodes)
    .enter().append('circle')
    .attr('class', 'node');

var animating = false;
var animationStep = 400;

force.on('tick', function(nodes) {
    var q = d3.geom.quadtree(nodes),
        i = 0,
        n = nodes.length;

    while (++i < n) q.visit(collide(nodes[i]));

     node.attr('r', function(nodes){ return nodes.r; })
        .attr('cx', function(nodes) { return nodes.x; })
        .attr('cy', function(nodes) { return nodes.y; });

    node.transition().ease('linear').duration(animationStep)
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });
});





force.start();


function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}




// var circles = frame.selectAll('circle')
//                     .data(data)
//                     .enter()
//                     .append('circle')
//                     .attr("cy", 300)
//                     .attr("cx", function(d){
//                         if (d.Model == "XE"){
//                             return 200;
//                         } else if (d.Model == "XF"){
//                             return 400;
//                         } else if (d.Model == "XJ"){
//                             return 600;
//                         } else{
//                             return 600;
//                         }
//                     })
//                     .attr("r", function(d){
//                         if (d.Model == "XE"){
//                             return NumOfXE *2;
//                         } else if (d.Model == "XF"){
//                             return NumOfXF *2;
//                         } else if (d.Model == "XJ"){
//                             return NumOfXJ *2;
//                         } else{
//                             return NumOfFPace *2;
//                         } 
//                     })
//                     .attr("fill", "red")









 
});


