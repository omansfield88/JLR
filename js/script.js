var width = 1200;
var height = 700;

var frame = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);


//Load in data file//
d3.json("js/data/sessions.json", function(data) {




//Uses lodash to get the amount of times each car model was selected from the data.
//Then creates an 'amountOf' variable for each car model.
function getModelCountById(data, id){
  var value = _.filter(data, function(item){
    return item.model == id;
  });
  return value.length;
}

//Puts total number of models chosen into a variable. 
var amountOfRangeRover = getModelCountById(data, "Range Rover");
var amountOfRangeRoverSport = getModelCountById(data, "Range Rover Sport");
var amountOfRangeRoverEvoque = getModelCountById(data, "Range Rover Evoque");
var amountOfDiscovery = getModelCountById(data, "Discovery");
var amountOfDiscoverySport = getModelCountById(data, "Discovery Sport");

console.log(amountOfRangeRover, amountOfRangeRoverSport, amountOfRangeRoverEvoque, amountOfDiscovery, amountOfDiscoverySport)



// var modelIds = ['XJ', 'F-PACE', 'XE', 'XF'];

// for (var i = 0; i < modelIds.length; i++) {
//   var id = modelIds[i];
//   console.log('id: ' + id + ' value: ' +  getModelCountById(data, id));
// }

// console.log(modelIds[0]);




function getDatedModelAmounts(model, startDay, endDay, startMonth, endMonth){
    var filteredSession = 0; //Start with empty variable to hold counted sessions
    for (i = 0; i < data.length; i++){ 
        if (data[i].model == model //Filter by Car Model
            && data[i].day >= startDay && data[i].day <= endDay //Filter by days
            && data[i].month >= startMonth && data[i].month <= endMonth //Filter by months
           )
        {
            filteredSession ++; //Increment variable for each session that matches filter criteria
        }
    };
    someObject[model] = filteredSession; //Update object
};

//Object containing all amount of sessions which match the criteria,
//this is to be read by the drawing code.
var someObject = {
    "Range Rover": 1,
    "Range Rover Sport" : 1,
    "Range Rover Evoque": 1,
    "Discovery" : 1,
    "Discovery Sport" : 1
}

//Call filtering function
getDatedModelAmounts("Range Rover", 2, 20, 2, 6);
getDatedModelAmounts("Range Rover Sport", 2, 20, 2, 6);
getDatedModelAmounts("Range Rover Evoque", 2, 20, 2, 6);
getDatedModelAmounts("Discovery", 2, 20, 2, 6);
getDatedModelAmounts("Discovery Sport", 2, 20, 2, 6);

console.log(someObject);

//Look for amount of sessions that match the specific date and model//
var filteredRangeRover = [];
for (i = 0; i < data.length; i++){ 
    if (data[i].model == "Range Rover" //Filter Car Model
        && data[i].day >= 5 && data[i].day <= 28  //Filter days
        && data[i].month >= 2 && data[i].month <= 6 //Filter months
       )
    {
        filteredRangeRover.push(data[i].Model)
    }
};
filteredRangeRover = filteredRangeRover.length;





console.log(filteredRangeRover);









// myTextOptions[ 'character names' ].kid;

var modelsRangeRover = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 100)
                   .attr('r', someObject['Range Rover'])
                   .attr('class', 'model-bubble');

var modelsRangeRoverSport = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 300)
                   .attr('r', someObject['Range Rover Sport'])
                   .attr('class', 'model-bubble');

var modelsRangeRoverEvoque = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 500)
                   .attr('r', someObject['Range Rover Evoque'])
                   .attr('class', 'model-bubble');

var modelsDiscovery = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 700)
                   .attr('r', someObject['Discovery'])
                   .attr('class', 'model-bubble');

var modelsDiscoverySport = frame
                   .append('circle')
                   .attr('cy', 300)
                   .attr('cx', 900)
                   .attr('r', someObject['Discovery Sport'])
                   .attr('class', 'model-bubble');




//Animates the radius of the model-bubbles
// Takes carModel and numOfCarModel as parameters,
// so you can invoke grow with any model.
// function grow(carModel, numOfCarModel) {
//   carModel.transition()
//         .duration(2000)
//         .attr('r', numOfCarModel)
// }



//Calls animation
// grow(modelsRangeRover, filteredRangeRover);
// grow(modelsRangeRoverSport, filteredRangeRoverSport);
// grow(modelsRangeRoverEvoque, filteredRangeRoverEvoque);
// grow(modelsDiscovery, filteredDiscovery);
// grow(modelsDiscoverySport, filteredDiscoverySport);
 
});



