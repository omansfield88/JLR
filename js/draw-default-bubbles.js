
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



//Captures nameplate xPositions to be used to
//position labels later
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

    //Inflate clicked model bubble
    modelBubble.transition()
    .duration(1000)
    .attr('cx', inflatedBubbleXpos)
    .attr('r', inflatedBubbleRadius)
    

    //Draw nameplate bubbles
    var NP1bubble = frame
       .append('circle')
       .attr('cy', defaultYpos)
       .attr('cx', NP1xPos)
       .attr('r', 0)
       .attr('class', 'nameplate-bubble')
       .on('mouseover', function(){
            drawNameplateTooltipLabels(NP1xPos, "Vogue")
       })
       .on('mouseout', function(){
            frame.selectAll(".nameplate-tooltip, .nameplate-tooltip-text").remove()
       });
             
       

    var NP2bubble = frame
       .append('circle')
       .attr('cy', defaultYpos)
       .attr('cx', NP2xPos)
       .attr('r', 0)
       .attr('class', 'nameplate-bubble')
       .on('mouseover', function(){
            drawNameplateTooltipLabels(NP2xPos, "SE Tech")
        })
       .on('mouseout', function(){
            frame.selectAll(".nameplate-tooltip, .nameplate-tooltip-text").remove()
        });


    var NP3bubble = frame
       .append('circle')
       .attr('cy', defaultYpos)
       .attr('cx', NP3xPos)
       .attr('r', 0)
       .attr('class', 'nameplate-bubble')
        .on('mouseover', function(){
            drawNameplateTooltipLabels(NP3xPos, "HSE")
       })
       .on('mouseout', function(){
            frame.selectAll(".nameplate-tooltip, .nameplate-tooltip-text").remove()
       });

    var NP4bubble = frame
       .append('circle')
       .attr('cy', defaultYpos)
       .attr('cx', NP4xPos)
       .attr('r', 0)
       .attr('class', 'nameplate-bubble')
        .on('mouseover', function(){
            drawNameplateTooltipLabels(NP4xPos, "SVR")
       })
        .on('mouseout', function(){
            frame.selectAll(".nameplate-tooltip, .nameplate-tooltip-text").remove()
       });

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

    //Draws tooltip when called
    function drawNameplateTooltipLabels(nameplateXpos, nameplate){        
            frame.append("rect")
                .attr("y",465)
                .attr("x", nameplateXpos)
                .attr("class", "nameplate-tooltip")
                .attr("text-anchor", "middle")
            frame.append("text")
                .text(nameplate)
                .attr("y", 470)
                .attr("x", nameplateXpos)
                .attr("class", "nameplate-tooltip-text")
                .attr("text-anchor", "middle")
                .attr("pointer-events", "none")
    }


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
                       .on('mouseover', function(){
                            drawModelAmountLabels("Range Rover", "#range-rover-bubble", modelsRangeRover);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       // .on('mouseout', function(){

                       // })
                       .on('click', function(){
                            $('#range-rover-bubble').addClass('inflated');
                            $('#range-rover-sport-bubble').removeClass('inflated');
                            $('#range-rover-evoque-bubble').removeClass('inflated');
                            $('#discovery-bubble').removeClass('inflated');
                            $('#discovery-sport-bubble').removeClass('inflated');


                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()
                            //Remove nameplate bubble amounts
                            frame.selectAll(".nameplate-bubble-amount").remove()

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


                            //Invoke function which draws nameplate amount labels
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
                       .on('mouseover', function(){
                            drawModelAmountLabels("Range Rover Sport", "#range-rover-sport-bubble", modelsRangeRoverSport);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                            $('#range-rover-sport-bubble').addClass('inflated');
                            $('#range-rover-bubble').removeClass('inflated');
                            $('#range-rover-evoque-bubble').removeClass('inflated');
                            $('#discovery-bubble').removeClass('inflated');
                            $('#discovery-sport-bubble').removeClass('inflated');

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()
                            //Remove nameplate bubble amounts
                            frame.selectAll(".nameplate-bubble-amount").remove()

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

                            //Invoke function which draws nameplate amount labels
                            drawNameplateAmountLabels("Range Rover Sport", "NPvogue")
                            drawNameplateAmountLabels("Range Rover Sport", "NPseTech")
                            drawNameplateAmountLabels("Range Rover Sport", "NPhse")
                            drawNameplateAmountLabels("Range Rover Sport", "NPsvr")

                            

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
                       .on('mouseover', function(){
                            drawModelAmountLabels("Range Rover Evoque", "#range-rover-evoque-bubble", modelsRangeRoverEvoque);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                            $('#range-rover-evoque-bubble').addClass('inflated');
                            $('#range-rover-sport-bubble').removeClass('inflated');
                            $('#range-rover-bubble').removeClass('inflated');
                            $('#discovery-bubble').removeClass('inflated');
                            $('#discovery-sport-bubble').removeClass('inflated');

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()
                            //Remove nameplate bubble amounts
                            frame.selectAll(".nameplate-bubble-amount").remove()

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

                           //Invoke function which draws nameplate amount labels
                            drawNameplateAmountLabels("Range Rover Evoque", "NPvogue")
                            drawNameplateAmountLabels("Range Rover Evoque", "NPseTech")
                            drawNameplateAmountLabels("Range Rover Evoque", "NPhse")
                            drawNameplateAmountLabels("Range Rover Evoque", "NPsvr")

                          

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
                       .on('mouseover', function(){
                            drawModelAmountLabels("Discovery", "#discovery-bubble", modelsDiscovery);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                            $('#discovery-bubble').addClass('inflated');
                            $('#range-rover-sport-bubble').removeClass('inflated');
                            $('#range-rover-evoque-bubble').removeClass('inflated');
                            $('#range-rover-bubble').removeClass('inflated');
                            $('#discovery-sport-bubble').removeClass('inflated');

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()
                            //Remove nameplate bubble amounts
                            frame.selectAll(".nameplate-bubble-amount").remove()

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

                            //Invoke function which draws nameplate amount labels
                            drawNameplateAmountLabels("Discovery", "NPvogue")
                            drawNameplateAmountLabels("Discovery", "NPseTech")
                            drawNameplateAmountLabels("Discovery", "NPhse")
                            drawNameplateAmountLabels("Discovery", "NPsvr")

                     

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
                       .on('mouseover', function(){
                            drawModelAmountLabels("Discovery Sport", "#discovery-sport-bubble", modelsDiscoverySport);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                            $('#discovery-sport-bubble').addClass('inflated');
                            $('#range-rover-sport-bubble').removeClass('inflated');
                            $('#range-rover-evoque-bubble').removeClass('inflated');
                            $('#discovery-bubble').removeClass('inflated');
                            $('#range-rover-bubble').removeClass('inflated');

                            //Remove model bubble amount       
                            frame.selectAll(".model-bubble-amount").remove()
                            //Remove nameplate bubble amounts
                            frame.selectAll(".nameplate-bubble-amount").remove()

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
                            
                            //Invoke function which draws nameplate amount labels
                            drawNameplateAmountLabels("Discovery Sport", "NPvogue")
                            drawNameplateAmountLabels("Discovery Sport", "NPseTech")
                            drawNameplateAmountLabels("Discovery Sport", "NPhse")
                            drawNameplateAmountLabels("Discovery Sport", "NPsvr")

                            
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

