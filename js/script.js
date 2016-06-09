var width = 960;
var height = 700;

var frame = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("background", "#494e53");


//Load in data file//
d3.json("js/data/sessions.json", function(data) {



//Get amount of each Model selected, and put the number in an array//
// var NumOfXE = [];
// for (i = 0; i < data.length; i++){ 
//     if (data[i].Model == "XE"){
//         NumOfXE.push(data[i].Model)
//     }
// };
// NumOfXE = NumOfXE.length;

// var NumOfXF = [];
// for (i = 0; i < data.length; i++){
//     if (data[i].Model == "XF"){
//         NumOfXF.push(data[i].Model)
//     }
// };
// NumOfXF = NumOfXF.length;

// var NumOfXJ = [];
// for (i = 0; i < data.length; i++){
//     if (data[i].Model == "XJ"){
//         NumOfXJ.push(data[i].Model)
//     }
// };
// NumOfXJ = NumOfXJ.length;

// var NumOfFPace = [];
// for (i = 0; i < data.length; i++){
//     if (data[i].Model == "F-PACE"){
//         NumOfFPace.push(data[i].Model)
//     }
// };
// NumOfFPace = NumOfFPace.length;

// function grow(carModel, numOfCarModel) {
//   carModel.transition()
//         .duration(2000)
//         .attr('r', numOfCarModel *5 )
// }

//Uses lodash to get the amount of times each car model was selected from the data.
//Then creates an 'amountOf' variable for each car model.
function getModelCountById(data, id){
  var value = _.filter(data, function(item){
    return item.Model == id;
  });
  return value.length;
  console.log(value);
}
var amountOfXE = getModelCountById(data, "XE");
var amountOfXF = getModelCountById(data, "XF");
var amountOfXJ = getModelCountById(data, "XJ");
var amountOfFPace = getModelCountById(data, "F-PACE");

console.log(amountOfXE, amountOfXF, amountOfXJ, amountOfFPace)

// var modelIds = ['XJ', 'F-PACE', 'XE', 'XF'];

// for (var i = 0; i < modelIds.length; i++) {
//   var id = modelIds[i];
//   console.log('id: ' + id + ' value: ' +  getModelCountById(data, id));
// }

// console.log(modelIds[0]);


// var count = function(carModel, modelArray){
//   var modelArray = [];
//   for (i = 0; i < data.length; i++){
//      if (data[i].Model == carModel){
//         modelArray.push(data[i].Model)
//     }
//   };
//   modelArray = modelArray.length
// }

// count(XE, NumOfXE);


// console.log(NumOfXE, NumOfXF, NumOfXJ, NumOfFPace)










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
//                             return 800;
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


var modelsXE = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 100)
                   .attr('r', 0)
                   .attr('class', 'model-bubble');

var modelsXF = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 300)
                   .attr('r', 0)
                   .attr('class', 'model-bubble');

var modelsXJ = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 500)
                   .attr('r', 0)
                   .attr('class', 'model-bubble');

var modelsFPace = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 700)
                   .attr('r', 0)
                   .attr('class', 'model-bubble');




//Animates the radius of the model-bubbles
//Takes carModel and numOfCarModel as parameters,
//so you can invoke grow with any model.
function grow(carModel, numOfCarModel) {
  carModel.transition()
        .duration(2000)
        .attr('r', numOfCarModel *5 )
}

grow(modelsXE, amountOfXE);
grow(modelsXF, amountOfXF);
grow(modelsXJ, amountOfXJ);
grow(modelsFPace, amountOfFPace);

 
});