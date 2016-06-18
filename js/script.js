var width = 1200;
var height = 700;

var frame = d3.select(".frame-container").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "svg-frame");


//Load in data file//
d3.json("js/data/sessions-nameplates.json", function(data) {








//Object containing all amount of sessions which match the criteria,
//this is to be read by the drawing code.

var countedModels = {
    "Range Rover": {
        "Amount": 1,
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    },
    "Range Rover Sport": {
        "Amount": 1,
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    },
    "Range Rover Evoque": {
        "Amount": 1,
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    },
    "Discovery": {
        "Amount": 1,
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    },
    "Discovery Sport": {
        "Amount": 1,
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    }
}


//Date filter function//
function getDatedModelAmounts(model, startDate, endDate){
    var filteredSession = 0; //Start with empty variable to hold counted sessions
    var NPvogue = 0;   
    var NPhse = 0;   
    var NPsvr = 0;   
    var NPseTech = 0;
   



    for (i = 0; i < data.length; i++){ 
        if (data[i].model == model //Filter by Car Model
            && data[i].date >= startDate && data[i].date <= endDate //Filter by Date            
           )
        {
            filteredSession ++; //Increment variable for each session that matches filter criteria
        }

        //Second if statement to check what the current sessions nameplate is,
        //then increments a variable 
        if (data[i].model == model){
            if (data[i].nameplate == "Vogue"
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPvogue ++; 
            }            
            else if (data[i].nameplate == "HSE"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPhse ++;           
            }          

            else if (data[i].nameplate == "SVR"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPsvr ++;           
            } 
           
            else if (data[i].nameplate == "SE Tech"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPseTech ++;           
            } 
            
        }

    };

    //Updated object with the number of found models and nameplates    
    countedModels[model]["Amount"] = filteredSession;
    countedModels[model]["NPvogue"] = NPvogue;   
    countedModels[model]["NPhse"] = NPhse;   
    countedModels[model]["NPsvr"] = NPsvr;   
    countedModels[model]["NPseTech"] = NPseTech;
};






console.log("data length " + data.length)





///////////////////////////////////////
/////DRAW DEFAULT BUBBLES/////////////
/////////////////////////////////////

//Call filtering function to set the values of countedModels

getDatedModelAmounts("Range Rover", "2015-01-01", "2015-12-30");
getDatedModelAmounts("Range Rover Sport", "2015-01-01", "2015-12-30");
getDatedModelAmounts("Range Rover Evoque", "2015-01-01", "2015-12-30");
getDatedModelAmounts("Discovery", "2015-01-01", "2015-12-30");
getDatedModelAmounts("Discovery Sport", "2015-01-01", "2015-12-30");

console.log(countedModels);














//Takes parameters of each model bubble and calculates what size
//and Xposition each nameplate bubble should be.
//This function is evoked onClick of a model bubble.

function showNPBubbles(modelBubble, model, NP1, NP2, NP3, NP4, inflatedBubbleXpos){

    var inflatedBubbleRadius = 200; 
    var inflatedBubbleXpos = inflatedBubbleXpos;

    //Change amount of a nameplate found into a percentage of the width of the inflated bubble
    var NP1Amount = countedModels[model][NP1] / countedModels[model]["Amount"] * inflatedBubbleRadius;
    var NP2Amount = countedModels[model][NP2] / countedModels[model]["Amount"] * inflatedBubbleRadius;
    var NP3Amount = countedModels[model][NP3] / countedModels[model]["Amount"] * inflatedBubbleRadius;
    var NP4Amount = countedModels[model][NP4] / countedModels[model]["Amount"] * inflatedBubbleRadius;


    //Work out xPos based on previous bubbles xPos
    var NP1xPos = inflatedBubbleXpos - inflatedBubbleRadius + NP1Amount;
    var NP2xPos = NP1xPos + NP1Amount + NP2Amount;
    var NP3xPos = NP2xPos + NP2Amount + NP3Amount;
    var NP4xPos = NP3xPos + NP3Amount + NP4Amount;

    modelBubble.transition()
    .duration(1000)
    .attr('r', inflatedBubbleRadius)
    .attr('cx', inflatedBubbleXpos);

    var NP1bubble = frame
       .append('circle')
       .attr('cy', 340)
       .attr('cx', NP1xPos)
       .attr('r', NP1Amount )
       .attr('class', 'nameplate-bubble');
    var NP2bubble = frame
       .append('circle')
       .attr('cy', 340)
       .attr('cx', NP2xPos)
       .attr('r', NP2Amount)
       .attr('class', 'nameplate-bubble');
    var NP3bubble = frame
       .append('circle')
       .attr('cy', 340)
       .attr('cx', NP3xPos)
       .attr('r', NP3Amount)
       .attr('class', 'nameplate-bubble');
    var NP4bubble = frame
       .append('circle')
       .attr('cy', 340)
       .attr('cx', NP4xPos)
       .attr('r', NP4Amount)
       .attr('class', 'nameplate-bubble');
};



//Draw model bubbles
var modelsRangeRover = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('cy', 340)
                       .attr('cx', 100)
                       .attr('r', 0)

                       .on('click', function(){
                           showNPBubbles(modelsRangeRover, "Range Rover", "NPvogue", "NPseTech", "NPhse", "NPsvr", 300)
                        });


var modelsRangeRoverSport = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('cy', 340)
                       .attr('cx', 340)
                       .attr('r', 0)
                       .on('click', function(){
                           showNPBubbles(modelsRangeRoverSport, "Range Rover Sport", "NPvogue", "NPseTech", "NPhse", "NPsvr", 500)
                        });

var modelsRangeRoverEvoque = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('cy', 340)
                       .attr('cx', 580)
                       .attr('r', 0)
                       .on('click', function(){
                           showNPBubbles(modelsRangeRoverEvoque, "Range Rover Evoque", "NPvogue", "NPseTech", "NPhse", "NPsvr", 600)
                        });

var modelsDiscovery = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('cy', 340)
                       .attr('cx', 820)
                       .attr('r', 0)
                       .on('click', function(){
                           showNPBubbles(modelsDiscovery, "Discovery", "NPvogue", "NPseTech", "NPhse", "NPsvr", 700)
                        });

var modelsDiscoverySport = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('cy', 340)
                       .attr('cx', 1060)
                       .attr('r', 0)
                       .on('click', function(){
                           showNPBubbles(modelsDiscoverySport, "Discovery Sport", "NPvogue", "NPseTech", "NPhse", "NPsvr", 800)
                        });










//Animates the radius of the model-bubbles
// Takes carModel and numOfCarModel as parameters,
// so you can invoke grow with any model.
function grow(carModel, numOfCarModel) {
  carModel.transition()
        .duration(1000)
        .attr('r', numOfCarModel)
};

//Calls animation
grow(modelsRangeRover, countedModels['Range Rover']['Amount']);
grow(modelsRangeRoverSport, countedModels['Range Rover Sport']['Amount']);
grow(modelsRangeRoverEvoque, countedModels['Range Rover Evoque']['Amount']);
grow(modelsDiscovery, countedModels['Discovery']['Amount']);
grow(modelsDiscoverySport, countedModels['Discovery Sport']['Amount']);





////////////////////////////////////////////
////////Update bubbles on date change//////
//////////////////////////////////////////


$("#dateFrom, #dateTo").change(function(){

    //Get date from inside the input field
    //Then split it into an array so it can be reversed
    var dateFrom = $("#dateFrom").val().split("");
    var dateTo = $("#dateTo").val().split("");

    //Reverses the date. 25-05-2015 turns into 2015-05-25
    //This is so it works with the filter code
    startDate = dateFrom[6] + dateFrom[7] + dateFrom[8] + dateFrom[9]//yyyy
                + dateFrom[5] + dateFrom[3] + dateFrom[4] //mm
                + dateFrom[2] + dateFrom[0] + dateFrom[1]; //dd
    endDate = dateTo[6] + dateTo[7] + dateTo[8] + dateTo[9] //yyyy
                + dateTo[5] + dateTo[3] + dateTo[4] //mm
                + dateTo[2] + dateTo[0] + dateTo[1]; //dd


    getDatedModelAmounts("Range Rover", startDate, endDate);
    getDatedModelAmounts("Range Rover Sport", startDate, endDate);
    getDatedModelAmounts("Range Rover Evoque", startDate, endDate);
    getDatedModelAmounts("Discovery", startDate, endDate);
    getDatedModelAmounts("Discovery Sport", startDate, endDate);

    console.log(countedModels);



    //Animates the radius of the model-bubbles
    // Takes carModel and numOfCarModel as parameters,
    // so you can invoke updateModelBubbles with any model.
    function updateModelBubbles(carModel, numOfCarModel, originalXpos) {
      carModel.transition()
            .duration(2000)
            .attr('r', numOfCarModel)
            .attr('cx', originalXpos)
    }

    //Calls animation
    updateModelBubbles(modelsRangeRover, countedModels['Range Rover']['Amount'], 100);
    updateModelBubbles(modelsRangeRoverSport, countedModels['Range Rover Sport']['Amount'], 340);
    updateModelBubbles(modelsRangeRoverEvoque, countedModels['Range Rover Evoque']['Amount'], 580);
    updateModelBubbles(modelsDiscovery, countedModels['Discovery']['Amount'], 820);
    updateModelBubbles(modelsDiscoverySport, countedModels['Discovery Sport']['Amount'], 1060);



    console.log(countedModels);
     

});


///////////////////////////////////////////////////
////////////Dive into nameplates//////////////////
/////////////////////////////////////////////////







/////////////////////////////////
//////Bubble Pack Layout////////
///////////////////////////////



}); //End of data loading function