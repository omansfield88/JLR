var width = 1200;
var height = 700;

var frame = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);


//Load in data file//
d3.json("js/data/sessions-dated.json", function(data) {



//Object containing all amount of sessions which match the criteria,
//this is to be read by the drawing code.
var someObject = {
    "Range Rover": 1,
    "Range Rover Sport" : 1,
    "Range Rover Evoque": 1,
    "Discovery" : 1,
    "Discovery Sport" : 1
}


console.log("data length " + data.length)

//Date filter function//
function getDatedModelAmounts(model, startDate, endDate){
    var filteredSession = 0; //Start with empty variable to hold counted sessions
    for (i = 0; i < data.length; i++){ 
        if (data[i].model == model //Filter by Car Model
            && data[i].date >= startDate && data[i].date <= endDate 
            //&& data[i].day >= startDay && data[i].day <= endDay //Filter by days
            //&& data[i].month >= startMonth && data[i].month <= endMonth //Filter by months
           )
        {
            filteredSession ++; //Increment variable for each session that matches filter criteria
        }
    };
    someObject[model] = filteredSession; //Update object
};





///////////////////////////////////////
/////DRAW DEFAULT BUBBLES/////////////
/////////////////////////////////////

//Call filtering function to set the values of someObject

getDatedModelAmounts("Range Rover", "2015-01-01", "2015-12-30");
getDatedModelAmounts("Range Rover Sport", "2015-01-01", "2015-12-30");
getDatedModelAmounts("Range Rover Evoque", "2015-01-01", "2015-12-30");
getDatedModelAmounts("Discovery", "2015-01-01", "2015-12-30");
getDatedModelAmounts("Discovery Sport", "2015-01-01", "2015-12-30");
console.log(someObject);

//Draw model bubbles
var modelsRangeRover = frame
                       .append('circle')
                       .attr('cy', 300)
                       .attr('cx', 100)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');

var modelsRangeRoverSport = frame
                       .append('circle')
                       .attr('cy', 300)
                       .attr('cx', 300)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');

var modelsRangeRoverEvoque = frame
                       .append('circle')
                       .attr('cy', 300)
                       .attr('cx', 500)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');

var modelsDiscovery = frame
                       .append('circle')
                       .attr('cy', 300)
                       .attr('cx', 700)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');

var modelsDiscoverySport = frame
                       .append('circle')
                       .attr('cy', 300)
                       .attr('cx', 900)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');


//Animates the radius of the model-bubbles
// Takes carModel and numOfCarModel as parameters,
// so you can invoke grow with any model.
function grow(carModel, numOfCarModel) {
  carModel.transition()
        .duration(2000)
        .attr('r', numOfCarModel)
}

//Calls animation
grow(modelsRangeRover, someObject['Range Rover']);
grow(modelsRangeRoverSport, someObject['Range Rover Sport']);
grow(modelsRangeRoverEvoque, someObject['Range Rover Evoque']);
grow(modelsDiscovery, someObject['Discovery']);
grow(modelsDiscoverySport, someObject['Discovery Sport']);





////////////////////////////////////////////
////////Update bubbles on date change//////
//////////////////////////////////////////


$("#dateFrom, #dateTo").change(function(){

    console.log("changed");

     //Remove all SVG elements first so they're not left on the page
    //d3.selectAll("svg").remove();
    var dateFrom = $("#dateFrom").val().split("");
    var dateTo = $("#dateTo").val().split("");

    //Reverses the date. 25-05-2015 turns into 2015-05-25
    startDate = dateFrom[6] + dateFrom[7] + dateFrom[8] + dateFrom[9]
                + dateFrom[5] + dateFrom[3] + dateFrom[4] 
                + dateFrom[2] + dateFrom[0] + dateFrom[1];    
    endDate = dateTo[6] + dateTo[7] + dateTo[8] + dateTo[9]
                + dateTo[5] + dateTo[3] + dateTo[4] 
                + dateTo[2] + dateTo[0] + dateTo[1];    


    getDatedModelAmounts("Range Rover", startDate, endDate);
    getDatedModelAmounts("Range Rover Sport", startDate, endDate);
    getDatedModelAmounts("Range Rover Evoque", startDate, endDate);
    getDatedModelAmounts("Discovery", startDate, endDate);
    getDatedModelAmounts("Discovery Sport", startDate, endDate);

    console.log(someObject);

    //Animates the radius of the model-bubbles
    // Takes carModel and numOfCarModel as parameters,
    // so you can invoke grow with any model.
    function grow(carModel, numOfCarModel) {
      carModel.transition()
            .duration(2000)
            .attr('r', numOfCarModel)
    }

    //Calls animation
    grow(modelsRangeRover, someObject['Range Rover']);
    grow(modelsRangeRoverSport, someObject['Range Rover Sport']);
    grow(modelsRangeRoverEvoque, someObject['Range Rover Evoque']);
    grow(modelsDiscovery, someObject['Discovery']);
    grow(modelsDiscoverySport, someObject['Discovery Sport']);
     

});















});



