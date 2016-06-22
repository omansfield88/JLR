var width = 1300;
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

var defaultYpos = 340;










//Takes parameters of each model bubble and calculates what size
//and Xposition each nameplate bubble should be.
//This function is evoked onClick of a model bubble.

var NPxPositions = {
    "Range Rover": {        
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    },
    "Range Rover Sport": {        
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    },
    "Range Rover Evoque": {        
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    },
    "Discovery": {        
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    },
    "Discovery Sport": {        
        "NPvogue": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPsvr": 1
    }
}

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
    .attr('cx', inflatedBubbleXpos)
    .attr('r', inflatedBubbleRadius)
    


    var NP1bubble = frame
       .append('circle')
       .attr('cy', defaultYpos)
       .attr('cx', NP1xPos)
       .attr('r', 0)
       .attr('class', 'nameplate-bubble');
    var NP2bubble = frame
       .append('circle')
       .attr('cy', defaultYpos)
       .attr('cx', NP2xPos)
       .attr('r', 0)
       .attr('class', 'nameplate-bubble');
    var NP3bubble = frame
       .append('circle')
       .attr('cy', defaultYpos)
       .attr('cx', NP3xPos)
       .attr('r', 0)
       .attr('class', 'nameplate-bubble');
    var NP4bubble = frame
       .append('circle')
       .attr('cy', defaultYpos)
       .attr('cx', NP4xPos)
       .attr('r', 0)
       .attr('class', 'nameplate-bubble');

    //Inflate the nameplate bubbles shortly after the clicked model bubble
    setTimeout(function(){
        NP1bubble.transition()
            .duration(1000)
            .attr('r', NP1Amount)
        NP2bubble.transition()
            .duration(1000)
            .attr('r', NP2Amount)
        NP3bubble.transition()
            .duration(1000)
            .attr('r', NP3Amount)
        NP4bubble.transition()
            .duration(1000)
            .attr('r', NP4Amount)
    },500);


    //Update NPxPositions object with current nameplate bubble x positions
    //this is to be read by the text label hover state later
    NPxPositions[model][NP1] = NP1xPos;
    NPxPositions[model][NP2] = NP2xPos;
    NPxPositions[model][NP3] = NP3xPos;
    NPxPositions[model][NP4] = NP4xPos;



};






//Draw model bubbles
var RangeRoverOriginalXpos = 100;
var modelsRangeRover = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'range-rover-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', RangeRoverOriginalXpos)
                       .attr('r', 0)
                       .on('click', function(){

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()

                            //Animate radius of all nameplate bubbles to 0, then remove them
                            frame.selectAll(".nameplate-bubble").transition()
                                                                .duration(500)
                                                                .attr('r', 0)
                                                                .remove()

                            //Return any inflated bubbles to their original sizes and positions
                            modelsRangeRoverSport.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover Sport"]["Amount"])
                                .attr('cx', 525)
                            modelsRangeRoverEvoque.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover Evoque"]["Amount"])
                                .attr('cx', 750)
                            modelsDiscovery.transition()
                                .duration(1000)
                                .attr('r', countedModels["Discovery"]["Amount"])
                                .attr('cx', 975)
                            modelsDiscoverySport.transition()
                                .duration(1000)
                                .attr('r', countedModels["Discovery Sport"]["Amount"])
                                .attr('cx', DiscoverySportOriginalXpos)


                            //Inflate this model bubble and show nameplate bubbles
                            showNPBubbles(modelsRangeRover, "Range Rover", "NPvogue", "NPseTech", "NPhse", "NPsvr", 200)


                            drawNameplateAmountLabels("Range Rover", "NPvogue")
                            drawNameplateAmountLabels("Range Rover", "NPseTech")
                            drawNameplateAmountLabels("Range Rover", "NPhse")
                            drawNameplateAmountLabels("Range Rover", "NPsvr")
                                   
                            

                               


                            //Move model label down
                            RangeRoverLabel.transition()
                                         .duration(1000)
                                         .attr("y", 600)
                                         .attr("x", 200)

                            //Move all other lables back up
                            RangeRoverSportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", 525)
                            RangeRoverEvoqueLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", 750)
                            DiscoveryLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", 975)
                            DiscoverySportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", DiscoverySportOriginalXpos)

                         });



var RangeRoverSportOriginalXpos = 375;
var modelsRangeRoverSport = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'range-rover-sport-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', RangeRoverSportOriginalXpos)
                       .attr('r', 0)
                       .on('click', function(){

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()

                           //Animate radius of all nameplate bubbles to 0, then remove them
                            frame.selectAll(".nameplate-bubble").transition()
                                                                .duration(500)
                                                                .attr('r', 0)
                                                                .remove()

                            //Return any inflated bubbles to their original sizes and positions
                            modelsRangeRover.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover"]["Amount"])
                                .attr('cx', RangeRoverOriginalXpos)
                            modelsRangeRoverEvoque.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover Evoque"]["Amount"])
                                .attr('cx', RangeRoverEvoqueOriginalXpos)
                            modelsDiscovery.transition()
                                .duration(1000)
                                .attr('r', countedModels["Discovery"]["Amount"])
                                .attr('cx', DiscoveryOriginalXpos)
                            modelsDiscoverySport.transition()
                                .duration(1000)
                                .attr('r', countedModels["Discovery Sport"]["Amount"])
                                .attr('cx', DiscoverySportOriginalXpos)

                            //Inflate this model bubble and show nameplate bubbles
                           showNPBubbles(modelsRangeRoverSport, "Range Rover Sport", "NPvogue", "NPseTech", "NPhse", "NPsvr", RangeRoverSportOriginalXpos)

                            //Move model label down
                            RangeRoverSportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 600)
                                         .attr("x", RangeRoverSportOriginalXpos)

                            //Move all other lables back up
                            RangeRoverLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", RangeRoverOriginalXpos)
                            RangeRoverEvoqueLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", RangeRoverEvoqueOriginalXpos)
                            DiscoveryLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", DiscoveryOriginalXpos)
                            DiscoverySportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", DiscoverySportOriginalXpos)
                        });

var RangeRoverEvoqueOriginalXpos = 650;
var modelsRangeRoverEvoque = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'range-rover-evoque-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', RangeRoverEvoqueOriginalXpos)
                       .attr('r', 0)
                       .on('click', function(){

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()

                            //Animate radius of all nameplate bubbles to 0, then remove them
                            frame.selectAll(".nameplate-bubble").transition()
                                                                .duration(500)
                                                                .attr('r', 0)
                                                                .remove()

                            //Return any inflated bubbles to their original sizes and positions
                            modelsRangeRoverSport.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover Sport"]["Amount"])
                                .attr('cx', RangeRoverSportOriginalXpos)
                            modelsRangeRover.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover"]["Amount"])
                                .attr('cx', RangeRoverOriginalXpos)
                            modelsDiscovery.transition()
                                .duration(1000)
                                .attr('r', countedModels["Discovery"]["Amount"])
                                .attr('cx', DiscoveryOriginalXpos)
                            modelsDiscoverySport.transition()
                                .duration(1000)
                                .attr('r', countedModels["Discovery Sport"]["Amount"])
                                .attr('cx', DiscoverySportOriginalXpos)
                            //Inflate this model bubble and show nameplate bubbles
                           showNPBubbles(modelsRangeRoverEvoque, "Range Rover Evoque", "NPvogue", "NPseTech", "NPhse", "NPsvr", RangeRoverEvoqueOriginalXpos)

                            //Move model label down
                            RangeRoverEvoqueLabel.transition()
                                         .duration(1000)
                                         .attr("y", 600)
                                         .attr("x", RangeRoverEvoqueOriginalXpos)

                            //Move all other lables back up
                            RangeRoverSportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", RangeRoverSportOriginalXpos)
                            RangeRoverLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", RangeRoverOriginalXpos)
                            DiscoveryLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", DiscoveryOriginalXpos)
                            DiscoverySportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", DiscoverySportOriginalXpos)
                        });

var DiscoveryOriginalXpos = 925;
var modelsDiscovery = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'discovery-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', DiscoveryOriginalXpos)
                       .attr('r', 0)
                       .on('click', function(){

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()

                            //Animate radius of all nameplate bubbles to 0, then remove them
                            frame.selectAll(".nameplate-bubble").transition()
                                                                .duration(500)
                                                                .attr('r', 0)
                                                                .remove()

                            //Return any inflated bubbles to their original sizes and positions
                            modelsRangeRoverSport.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover Sport"]["Amount"])
                                .attr('cx', RangeRoverSportOriginalXpos)
                            modelsRangeRoverEvoque.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover Evoque"]["Amount"])
                                .attr('cx', RangeRoverEvoqueOriginalXpos)
                            modelsRangeRover.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover"]["Amount"])
                                .attr('cx', RangeRoverOriginalXpos)
                            modelsDiscoverySport.transition()
                                .duration(1000)
                                .attr('r', countedModels["Discovery Sport"]["Amount"])
                                .attr('cx', DiscoverySportOriginalXpos)
                            //Inflate this model bubble and show nameplate bubbles
                           showNPBubbles(modelsDiscovery, "Discovery", "NPvogue", "NPseTech", "NPhse", "NPsvr", DiscoveryOriginalXpos)

                            //Move model label down
                            DiscoveryLabel.transition()
                                         .duration(1000)
                                         .attr("y", 600)
                                         .attr("x", DiscoveryOriginalXpos)

                            //Move all other lables back up
                            RangeRoverSportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", RangeRoverSportOriginalXpos)

                            RangeRoverEvoqueLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", RangeRoverEvoqueOriginalXpos)
                            RangeRoverLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", RangeRoverOriginalXpos)
                            DiscoverySportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", DiscoverySportOriginalXpos)

                        });

var DiscoverySportOriginalXpos = 1200;
var modelsDiscoverySport = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'discovery-sport-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', DiscoverySportOriginalXpos)
                       .attr('r', 0)
                       .on('click', function(){

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()

                            //Animate radius of all nameplate bubbles to 0, then remove them
                            frame.selectAll(".nameplate-bubble").transition()
                                                                .duration(500)
                                                                .attr('r', 0)
                                                                .remove()

                            //Return any inflated bubbles to their original sizes and positions
                            modelsRangeRoverSport.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover Sport"]["Amount"])
                                .attr('cx', 325)
                            modelsRangeRoverEvoque.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover Evoque"]["Amount"])
                                .attr('cx', 550)
                            modelsDiscovery.transition()
                                .duration(1000)
                                .attr('r', countedModels["Discovery"]["Amount"])
                                .attr('cx', 775)
                            modelsRangeRover.transition()
                                .duration(1000)
                                .attr('r', countedModels["Range Rover"]["Amount"])
                                .attr('cx', RangeRoverOriginalXpos)
                            //Inflate this model bubble and show nameplate bubbles
                           showNPBubbles(modelsDiscoverySport, "Discovery Sport", "NPvogue", "NPseTech", "NPhse", "NPsvr", 1100)

                            //Move model label down
                            DiscoverySportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 600)
                                         .attr("x", 1100)

                            //Move all other lables back up
                            RangeRoverSportLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", 325)
                            RangeRoverEvoqueLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", 550)
                            DiscoveryLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", 775)
                            RangeRoverLabel.transition()
                                         .duration(1000)
                                         .attr("y", 500)
                                         .attr("x", RangeRoverOriginalXpos)
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

            // Commeted this out because the model bubbles were
            // shifting xPos when the dates updated
            // .attr('cx', originalXpos)

        // setTimeout(function(){
        //     NP1bubble.transition()
        //         .duration(1000)
        //         .attr('r', NP1Amount)
        //     NP2bubble.transition()
        //         .duration(1000)
        //         .attr('r', NP2Amount)
        //     NP3bubble.transition()
        //         .duration(1000)
        //         .attr('r', NP3Amount)
        //     NP4bubble.transition()
        //         .duration(1000)
        //         .attr('r', NP4Amount)
        // },500);
    }

    //Calls animation
    updateModelBubbles(modelsRangeRover, countedModels['Range Rover']['Amount'], 100);
    updateModelBubbles(modelsRangeRoverSport, countedModels['Range Rover Sport']['Amount'], 340);
    updateModelBubbles(modelsRangeRoverEvoque, countedModels['Range Rover Evoque']['Amount'], 580);
    updateModelBubbles(modelsDiscovery, countedModels['Discovery']['Amount'], 820);
    updateModelBubbles(modelsDiscoverySport, countedModels['Discovery Sport']['Amount'], 1060);



    console.log(countedModels);

        //Animate radius of all nameplate bubbles to 0, then remove them
    frame.selectAll(".nameplate-bubble").transition()
                                        .duration(500)
                                        .attr('r', 0)
                                        .remove()
                                        
    //Return any inflated bubbles to their original sizes and positions
    modelsRangeRover.transition()
        .duration(1000)
        .attr('r', countedModels["Range Rover"]["Amount"])
        .attr('cx', RangeRoverOriginalXpos)
    modelsRangeRoverSport.transition()
        .duration(1000)
        .attr('r', countedModels["Range Rover Sport"]["Amount"])
        .attr('cx', RangeRoverSportOriginalXpos)
    modelsRangeRoverEvoque.transition()
        .duration(1000)
        .attr('r', countedModels["Range Rover Evoque"]["Amount"])
        .attr('cx', RangeRoverEvoqueOriginalXpos)
    modelsDiscovery.transition()
        .duration(1000)
        .attr('r', countedModels["Discovery"]["Amount"])
        .attr('cx', DiscoveryOriginalXpos)
    modelsDiscoverySport.transition()
        .duration(1000)
        .attr('r', countedModels["Discovery Sport"]["Amount"])
        .attr('cx', DiscoverySportOriginalXpos)

    //Move all other lables back up

    RangeRoverLabel.transition()
                 .duration(1000)
                 .attr("y", 500)
                 .attr("x", RangeRoverOriginalXpos)
    RangeRoverSportLabel.transition()
                 .duration(1000)
                 .attr("y", 500)
                 .attr("x", RangeRoverSportOriginalXpos)
    RangeRoverEvoqueLabel.transition()
                 .duration(1000)
                 .attr("y", 500)
                 .attr("x", RangeRoverEvoqueOriginalXpos)
    DiscoveryLabel.transition()
                 .duration(1000)
                 .attr("y", 500)
                 .attr("x", DiscoveryOriginalXpos)
    DiscoverySportLabel.transition()
                 .duration(1000)
                 .attr("y", 500)
                 .attr("x", DiscoverySportOriginalXpos)
     

});



//Model Labels//

var RangeRoverLabel = frame.append("text")
                          .text("Range Rover")
                          .attr("text-anchor", "middle")
                          .attr("x", RangeRoverOriginalXpos)
                          .attr("y", 500)
                          .attr("class", "model-label");

var RangeRoverSportLabel = frame.append("text")
                          .text("Range Rover Sport")
                          .attr("text-anchor", "middle")
                          .attr("x", RangeRoverSportOriginalXpos)
                          .attr("y", 500)
                          .attr("class", "model-label");

var RangeRoverEvoqueLabel = frame.append("text")
                          .text("Range Rover Evoque")
                          .attr("text-anchor", "middle")
                          .attr("x", RangeRoverEvoqueOriginalXpos)
                          .attr("y", 500)
                          .attr("class", "model-label");

var DiscoveryLabel = frame.append("text")
                          .text("Discovery")
                          .attr("text-anchor", "middle")
                          .attr("x", DiscoveryOriginalXpos)
                          .attr("y", 500)
                          .attr("class", "model-label");

var DiscoverySportLabel = frame.append("text")
                          .text("Discovery Sport")
                          .attr("text-anchor", "middle")
                          .attr("x", DiscoverySportOriginalXpos)
                          .attr("y", 500)
                          .attr("class", "model-label");

//Model amounts in bubbles//



function drawModelAmountLabels(model, modelID, modelBubble){

    modelBubble.on("mouseover", function(){
        frame.append("text")
            .text(countedModels[model]["Amount"])
            .attr("x", function(){
                return $(modelID).attr("cx")
            })
            .attr("y", defaultYpos + 14)
            .attr("class", "model-bubble-amount")
            .attr("text-anchor", "middle")
    })

    modelBubble.on("mouseout", function(){
        frame.selectAll(".model-bubble-amount").remove()
    })

}

function drawNameplateAmountLabels(model, nameplate){
    frame.append("text")
    .text(countedModels[model][nameplate])
    .attr("y", defaultYpos)
    .attr("x", NPxPositions[model][nameplate])
    .attr("class", "nameplate-bubble-amount")
    .attr("text-anchor", "middle")
}



drawModelAmountLabels("Range Rover", "#range-rover-bubble", modelsRangeRover);
drawModelAmountLabels("Range Rover Sport", "#range-rover-sport-bubble", modelsRangeRoverSport);
drawModelAmountLabels("Range Rover Evoque", "#range-rover-evoque-bubble", modelsRangeRoverEvoque);
drawModelAmountLabels("Discovery", "#discovery-bubble", modelsDiscovery);
drawModelAmountLabels("Discovery Sport", "#discovery-sport-bubble", modelsDiscoverySport);














}); //End of data loading function