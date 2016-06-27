var width = 1305;
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

    var point1 = 0;
    var point2 = 0;
    var point3 = 0;
    var point4 = 0;
    var point5 = 0;
    var point6 = 0;
    var point7 = 0;
    var point8 = 0;
    var point9 = 0;
    var point10 = 0;
    var point11 = 0;
    var point12 = 0;
    var point13 = 0;
    var point14 = 0;
    var point15 = 0;
    var point16 = 0;
    var point17 = 0;
    var point18 = 0;
    var point19 = 0;
    var point20 = 0;
    var point21 = 0;
    var point22 = 0;
    var point23 = 0;
    var point24 = 0;


   
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


        if (data[i].model == model){
            if (data[i].duration == 1 && data[i].dropout == 1
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point1 ++;
            }
            else if (data[i].duration == 1 && data[i].dropout == 2
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point2 ++;
            }
            else if (data[i].duration == 1 && data[i].dropout == 3
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point3 ++;            
            }
            else if (data[i].duration == 1 && data[i].dropout == 4
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point4 ++;            
            }
            else if (data[i].duration == 1 && data[i].dropout == 5
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point5 ++;            
            }
            else if (data[i].duration == 1 && data[i].dropout == 6
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point6 ++;            
            }

            else if (data[i].duration == 2 && data[i].dropout == 1
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point7 ++;            
            } 
            else if (data[i].duration == 2 && data[i].dropout == 2
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point8 ++;            
            }
            else if (data[i].duration == 2 && data[i].dropout == 3
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point9 ++;            
            }
            else if (data[i].duration == 2 && data[i].dropout == 4
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point10 ++;            
            }
            else if (data[i].duration == 2 && data[i].dropout == 5
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point11 ++;            
            }  
            else if (data[i].duration == 2 && data[i].dropout == 6
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point12 ++;            
            }  

            else if (data[i].duration == 3 && data[i].dropout == 1
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point13 ++;            
            } 
            else if (data[i].duration == 3 && data[i].dropout == 2
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point14 ++;            
            }
            else if (data[i].duration == 3 && data[i].dropout == 3
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point15 ++;            
            }
            else if (data[i].duration == 3 && data[i].dropout == 4
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point16 ++;            
            }
            else if (data[i].duration == 3 && data[i].dropout == 5
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point17 ++;            
            }   
            else if (data[i].duration == 3 && data[i].dropout == 6
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point18 ++;            
            }   

            else if (data[i].duration == 4 && data[i].dropout == 1
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point19 ++;            
            } 
            else if (data[i].duration == 4 && data[i].dropout == 2
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point20 ++;            
            }
            else if (data[i].duration == 4 && data[i].dropout == 3
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point21 ++;            
            }
            else if (data[i].duration == 4 && data[i].dropout == 4
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point22 ++;            
            }
            else if (data[i].duration == 4 && data[i].dropout == 5
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point23 ++;            
            } 
            else if (data[i].duration == 4 && data[i].dropout == 6
                && data[i].date >= startDate && data[i].date <= endDate
            ){
                point24 ++;            
            }                  
        }



        // //Third if statement counts the duration
        // if (data[i].model == model){
        //     if (data[i].duration === 1){
        //         duration1 ++;
        //     } else if (data[i].duration == 2 && data[i].date >= startDate && data[i].date <= endDate){
        //         duration2 ++;
        //     } else if (data[i].duration == 3 && data[i].date >= startDate && data[i].date <= endDate){
        //         duration3 ++;
        //     } else if (data[i].duration == 4 && data[i].date >= startDate && data[i].date <= endDate){
        //         duration4 ++;
        //     }
        // }

        // //Fourth if statement counts the dropout point
        // if (data[i].model == model){
        //     if (data[i].dropout === 1){
        //         dropout1 ++;
        //     } else if (data[i].dropout == 2 && data[i].date >= startDate && data[i].date <= endDate){
        //         dropout2 ++;
        //     } else if (data[i].dropout == 3 && data[i].date >= startDate && data[i].date <= endDate){
        //         dropout3 ++;
        //     } else if (data[i].dropout == 4 && data[i].date >= startDate && data[i].date <= endDate){
        //         dropout4 ++;
        //     } else if (data[i].dropout == 5 && data[i].date >= startDate && data[i].date <= endDate){
        //         dropout5 ++;
        //     } else if (data[i].dropout == 6 && data[i].date >= startDate && data[i].date <= endDate){
        //         dropout6 ++;
        //     } 
        // }

    };

    //Updated object with the number of found models and nameplates    
    countedModels[model]["Amount"] = filteredSession;
    countedModels[model]["NPvogue"] = NPvogue;   
    countedModels[model]["NPhse"] = NPhse;   
    countedModels[model]["NPsvr"] = NPsvr;   
    countedModels[model]["NPseTech"] = NPseTech;

    countedModels[model]["point1"] = point1;
    countedModels[model]["point2"] = point2;
    countedModels[model]["point3"] = point3;
    countedModels[model]["point4"] = point4;
    countedModels[model]["point5"] = point5;
    countedModels[model]["point6"] = point6;
    countedModels[model]["point7"] = point7;
    countedModels[model]["point8"] = point8;
    countedModels[model]["point9"] = point9;
    countedModels[model]["point10"] = point10;
    countedModels[model]["point11"] = point11;
    countedModels[model]["point12"] = point12;
    countedModels[model]["point13"] = point13;
    countedModels[model]["point14"] = point14;
    countedModels[model]["point15"] = point15;
    countedModels[model]["point16"] = point16;
    countedModels[model]["point17"] = point17;
    countedModels[model]["point18"] = point18;
    countedModels[model]["point19"] = point19;
    countedModels[model]["point20"] = point20;
    countedModels[model]["point21"] = point21;
    countedModels[model]["point22"] = point22;
    countedModels[model]["point23"] = point23;
    countedModels[model]["point24"] = point24;
};






console.log("data length " + data.length)





///////////////////////////////////////
/////DRAW DEFAULT BUBBLES/////////////
/////////////////////////////////////

//Call filtering function to set the values of countedModels

getDatedModelAmounts("Range Rover", "2015-01-01", "2015-03-30");
getDatedModelAmounts("Range Rover Sport", "2015-01-01", "2015-03-30");
getDatedModelAmounts("Range Rover Evoque", "2015-01-01", "2015-03-30");
getDatedModelAmounts("Discovery", "2015-01-01", "2015-03-30");
getDatedModelAmounts("Discovery Sport", "2015-01-01", "2015-03-30");

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
       .attr('fill-opacity', 1)
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
       .attr('fill-opacity', 1)
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
       .attr('fill-opacity', 1)
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
       .attr('fill-opacity', 1)
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
                       .attr('fill-opacity', 1)
                       .on('mouseover', function(){
                            drawModelAmountLabels("Range Rover", "#range-rover-bubble", modelsRangeRover);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                        //The 'inflated' class is used to determine if the next click should
                        // take the user to the next slide.
                            if($(this).hasClass('inflated')){
                               
                                console.log("yessir");
                                transitionToNextSlide();
                                drawBreakdownBubbles("Range Rover", 200, defaultYpos);

                            } else {
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
                            }
                        });

                            



var RangeRoverSportOriginalXpos = 375;
var modelsRangeRoverSport = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'range-rover-sport-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', RangeRoverSportOriginalXpos)
                       .attr('r', 0)
                       .attr('fill-opacity', 1)
                       .on('mouseover', function(){
                            drawModelAmountLabels("Range Rover Sport", "#range-rover-sport-bubble", modelsRangeRoverSport);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                        //The 'inflated' class is used to determine if the next click should
                        // take the user to the next slide.
                            if($(this).hasClass('inflated')){
                               
                                console.log("yessir");
                                transitionToNextSlide();
                                drawBreakdownBubbles("Range Rover Sport", RangeRoverSportOriginalXpos, defaultYpos);

                            } else {
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
                            }
                        });

var RangeRoverEvoqueOriginalXpos = 650;
var modelsRangeRoverEvoque = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'range-rover-evoque-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', RangeRoverEvoqueOriginalXpos)
                       .attr('r', 0)
                       .attr('fill-opacity', 1)
                       .on('mouseover', function(){
                            drawModelAmountLabels("Range Rover Evoque", "#range-rover-evoque-bubble", modelsRangeRoverEvoque);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                        //The 'inflated' class is used to determine if the next click should
                        // take the user to the next slide.
                            if($(this).hasClass('inflated')){
                               
                                console.log("yessir");
                                transitionToNextSlide();
                                drawBreakdownBubbles("Range Rover Evoque", RangeRoverEvoqueOriginalXpos, defaultYpos);

                            } else {
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
                            }
                        });

var DiscoveryOriginalXpos = 925;
var modelsDiscovery = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'discovery-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', DiscoveryOriginalXpos)
                       .attr('r', 0)
                       .attr('fill-opacity', 1)
                       .on('mouseover', function(){
                            drawModelAmountLabels("Discovery", "#discovery-bubble", modelsDiscovery);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                            //The 'inflated' class is used to determine if the next click should
                            // take the user to the next slide.
                            if($(this).hasClass('inflated')){
                               
                                console.log("yessir");
                                transitionToNextSlide();
                                drawBreakdownBubbles("Discovery", DiscoveryOriginalXpos, defaultYpos);

                            } else {
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
                            }
                        });

var DiscoverySportOriginalXpos = 1200;
var modelsDiscoverySport = frame
                       .append('circle')
                       .attr('class', 'model-bubble')
                       .attr('id', 'discovery-sport-bubble')
                       .attr('cy', defaultYpos)
                       .attr('cx', DiscoverySportOriginalXpos)
                       .attr('r', 0)
                       .attr('fill-opacity', 1)
                       .on('mouseover', function(){
                            drawModelAmountLabels("Discovery Sport", "#discovery-sport-bubble", modelsDiscoverySport);
                       })
                       .on('mouseout', function(){
                            frame.selectAll('.model-bubble-amount').remove();
                       })
                       .on('click', function(){
                            //The 'inflated' class is used to determine if the next click should
                            // take the user to the next slide.
                            if($(this).hasClass('inflated')){
                               
                                console.log("yessir");
                                transitionToNextSlide();
                                drawBreakdownBubbles("Discovery Sport", 1100, defaultYpos);

                            } else {
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
                            }
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


$("#date-input").change(function(){
    //Get date from inside the input field
    //Then split it into an array so it can be reversed
    var date = $("#date-input").val().split("");

    //Reverses the date. 01-01-2015 turns into 2015-05-25
    //This is so it works with the filter code
    startDate = date[6] + date[7] + date[8] + date[9]//yyyy
                + date[2] + date[3] + date[4] // -mm
                + date[2] + date[0] + date[1]; // -dd

    endDate = date[19] + date[20] + date[21] + date[22] //yyyy
                + date[15] + date[16] + date[17] // -mm
                + date[15] + date[13] + date[14]; // -dd

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
    //Remove nameplate bubble amounts
    frame.selectAll(".nameplate-bubble-amount").remove()
                                        
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
                          .text("RANGE ROVER")
                          .attr("text-anchor", "middle")
                          .attr("x", RangeRoverOriginalXpos)
                          .attr("y", 500)
                          .attr("fill-opacity", 1)
                          .attr("class", "model-label");

var RangeRoverSportLabel = frame.append("text")
                          .text("RANGE ROVER SPORT")
                          .attr("text-anchor", "middle")
                          .attr("x", RangeRoverSportOriginalXpos)
                          .attr("y", 500)
                          .attr("fill-opacity", 1)
                          .attr("class", "model-label");

var RangeRoverEvoqueLabel = frame.append("text")
                          .text("RANGE ROVER EVOQUE")
                          .attr("text-anchor", "middle")
                          .attr("x", RangeRoverEvoqueOriginalXpos)
                          .attr("y", 500)
                          .attr("fill-opacity", 1)
                          .attr("class", "model-label");

var DiscoveryLabel = frame.append("text")
                          .text("DISCOVERY")
                          .attr("text-anchor", "middle")
                          .attr("x", DiscoveryOriginalXpos)
                          .attr("y", 500)
                          .attr("fill-opacity", 1)
                          .attr("class", "model-label");

var DiscoverySportLabel = frame.append("text")
                          .text("DISCOVERY SPORT")
                          .attr("text-anchor", "middle")
                          .attr("x", DiscoverySportOriginalXpos)
                          .attr("y", 500)
                          .attr("fill-opacity", 1)
                          .attr("class", "model-label");



//Model amounts in bubbles//

function drawModelAmountLabels(model, modelID, modelBubble){
    if (!$(modelID).hasClass('inflated')){     
        frame.append("text")
            .text(countedModels[model]["Amount"])
            .attr("x", function(){
                return $(modelID).attr("cx")
            })
            .attr("y", defaultYpos + 14)
            .attr("class", "model-bubble-amount")
            .attr("text-anchor", "middle")
            .attr("pointer-events", "none")    
    }
}

function drawNameplateAmountLabels(model, nameplate){
    setTimeout(function(){
        frame.append("text")
        .text(countedModels[model][nameplate])
        .attr("y", defaultYpos + 9)
        .attr("x", NPxPositions[model][nameplate])
        .attr("class", "nameplate-bubble-amount")
        .attr("text-anchor", "middle")
        .attr("pointer-events", "none")
    }, 1000);
}





//////////////////////////////////////////////////////////////////////////////////////
///////////////Graph Page////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
function transitionToNextSlide(){

    //Fade out then remove 4 model bubbles not clicked
    frame.selectAll(".model-bubble").transition()
                                    .duration(500)
                                    .attr('fill-opacity', 0)
                                    .remove();

    //Lower than fade out model labels
    frame.selectAll(".model-label, .nameplate-tooltip, .nameplate-bubble-amount").transition()
                                  .duration(500)
                                  .attr('fill-opacity', 0)
                                  .remove();

    //Enlarge and fade out nameplate bubbles
    frame.selectAll(".nameplate-bubble").transition()
                                        .duration(1000)
                                        .attr('fill-opacity', 0)
                                        .attr('r', 1000)
                                        .remove();
    
    //Draw graph behind model bubble, lines + axis labels
    setTimeout(function(){    
        frame.append("line").attr("x1", 50)
                            .attr("x2", 100)
                            .attr("y1", 600)
                            .attr("y2", 600)
                            .attr("class", "graph-line-bottom");

        frame.append("line").attr("x1", 50)
                            .attr("x2", 100)
                            .attr("y1", 500)
                            .attr("y2", 500)
                            .attr("class", "graph-line");
        frame.append("line").attr("x1", 50)
                            .attr("x2", 100)
                            .attr("y1", 400)
                            .attr("y2", 400)
                            .attr("class", "graph-line");
        frame.append("line").attr("x1", 50)
                            .attr("x2", 100)
                            .attr("y1", 300)
                            .attr("y2", 300)
                            .attr("class", "graph-line");
        frame.append("line").attr("x1", 50)
                            .attr("x2", 100)
                            .attr("y1", 200)
                            .attr("y2", 200)
                            .attr("class", "graph-line");

        frame.selectAll(".graph-line, .graph-line-bottom").transition()
                                      .duration(1000)
                                      .attr('x2', 1200);

    }, 1000);


    //Draw graph labels
    setTimeout(function(){   
        frame.append("text").text("MODEL")
                            .attr("x", 191.5)
                            .attr("y", 670)
                            .attr("opacity", 0)
                            .attr("text-anchor", "middle")
                            .attr("class", "steps-label")
        frame.append("text").text("INTERIOR")
                            .attr("x", 374.5)
                            .attr("y", 670)
                            .attr("opacity", 0)
                            .attr("text-anchor", "middle")
                            .attr("class", "steps-label")
        frame.append("text").text("EXTERIOR")
                            .attr("x", 557.5)
                            .attr("y", 670)
                            .attr("opacity", 0)
                            .attr("text-anchor", "middle")
                            .attr("class", "steps-label")
        frame.append("text").text("OPTIONS")
                            .attr("x", 740.5)
                            .attr("y", 670)
                            .attr("opacity", 0)
                            .attr("text-anchor", "middle")
                            .attr("class", "steps-label")
        frame.append("text").text("ACCESSORIES")
                            .attr("x", 923.5)
                            .attr("y", 670)
                            .attr("opacity", 0)
                            .attr("text-anchor", "middle")
                            .attr("class", "steps-label")
        frame.append("text").text("SUMMARY")
                            .attr("x", 1106.5)
                            .attr("y", 670)
                            .attr("opacity", 0)
                            .attr("text-anchor", "middle")
                            .attr("class", "steps-label")

        frame.append("text").text("SUMMARY")
                            .attr("x", 1106.5)
                            .attr("y", 670)
                            .attr("opacity", 0)
                            .attr("text-anchor", "middle")
                            .attr("class", "steps-label")

        frame.selectAll(".steps-label").transition()
          .duration(800)
          .attr('opacity', 1)
          .attr('y', 650)

        frame.append("text").text("5 MINS")
                            .attr("x", 50)
                            .attr("y", 530)
                            .attr("opacity", 0)
                            .attr("class", "duration-label")
                            .attr("id", "five-mins")
        frame.selectAll("#five-mins").transition()
                          .duration(800)
                          .attr('opacity', 1)
                          .attr('y', 520)


        frame.append("text").text("10 MINS")
                            .attr("x", 50)
                            .attr("y", 430)
                            .attr("opacity", 0)
                            .attr("class", "duration-label")
                            .attr("id", "ten-mins")
        frame.selectAll("#ten-mins").transition()
                          .duration(800)
                          .attr('opacity', 1)
                          .attr('y', 420)

        frame.append("text").text("15 MINS")
                            .attr("x", 50)
                            .attr("y", 330)
                            .attr("opacity", 0)
                            .attr("class", "duration-label")
                            .attr("id", "fifteen-mins")
        frame.selectAll("#fifteen-mins").transition()
                          .duration(800)
                          .attr('opacity', 1)
                          .attr('y', 320)

        frame.append("text").text("20 MINS")
                            .attr("x", 50)
                            .attr("y", 230)
                            .attr("opacity", 0)
                            .attr("class", "duration-label")
                            .attr("id", "twenty-mins")
        frame.selectAll("#twenty-mins").transition()
                          .duration(800)
                          .attr('opacity', 1)
                          .attr('y', 220)
 
    }, 1300);


}

function drawBreakdownBubbles(model, clickedModelXpos, clickedModelYpos){


    var stepsModelBox = 191.5;
    var stepsInteriorBox = 374.5;
    var stepsExteriorBox = 557.5;
    var stepsOptionsBox = 740.5;
    var stepsAccessoriesBox = 923.5;
    var stepsSummaryBox = 1106.5;

    var firstRow = 250;
    var secondRow = 350;
    var thirdRow = 450;
    var fourthRow = 550;



    //Fourth row - Less than 5 minutes
     var point1Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point1-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point1"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point1Bubble.transition()
            .duration(1000)
            .attr('cx', stepsModelBox)
            .attr('cy', fourthRow)
        }, 2000)

     var point2Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point2-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point2"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point2Bubble.transition()
            .duration(1000)
            .attr('cx', stepsInteriorBox)
            .attr('cy', fourthRow)
        }, 2000)

    var point3Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point3-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point3"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point3Bubble.transition()
            .duration(1000)
            .attr('cx', stepsExteriorBox)
            .attr('cy', fourthRow)
        }, 2000)

    var point4Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point4-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point4"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point4Bubble.transition()
            .duration(1000)
            .attr('cx', stepsOptionsBox)
            .attr('cy', fourthRow)
        }, 2000)

    var point5Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point5-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point5"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point5Bubble.transition()
            .duration(1000)
            .attr('cx', stepsAccessoriesBox)
            .attr('cy', fourthRow)
        }, 2000)

    var point6Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point6-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point6"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point6Bubble.transition()
            .duration(1000)
            .attr('cx', stepsSummaryBox)
            .attr('cy', fourthRow)
        }, 2000)



    //Third row - 5 to 10 minutes
    var point7Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point7-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point7"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point7Bubble.transition()
            .duration(1000)
            .attr('cx', stepsModelBox)
            .attr('cy', thirdRow)
        }, 2000)

     var point8Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point8-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point8"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point8Bubble.transition()
            .duration(1000)
            .attr('cx', stepsInteriorBox)
            .attr('cy', thirdRow)
        }, 2000)

    var point9Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point9-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point9"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point9Bubble.transition()
            .duration(1000)
            .attr('cx', stepsExteriorBox)
            .attr('cy', thirdRow)
        }, 2000)

    var point10Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point10-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point10"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point10Bubble.transition()
            .duration(1000)
            .attr('cx', stepsOptionsBox)
            .attr('cy', thirdRow)
        }, 2000)

    var point11Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point11-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point11"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point11Bubble.transition()
            .duration(1000)
            .attr('cx', stepsAccessoriesBox)
            .attr('cy', thirdRow)
        }, 2000)

    var point12Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point12-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point12"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point12Bubble.transition()
            .duration(1000)
            .attr('cx', stepsSummaryBox)
            .attr('cy', thirdRow)
        }, 2000)


//Second row - 10 to 15 minutes
    var point13Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point13-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point13"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point13Bubble.transition()
            .duration(1000)
            .attr('cx', stepsModelBox)
            .attr('cy', secondRow)
        }, 2000)

     var point14Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point14-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point14"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point14Bubble.transition()
            .duration(1000)
            .attr('cx', stepsInteriorBox)
            .attr('cy', secondRow)
        }, 2000)

    var point15Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point15-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point15"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point15Bubble.transition()
            .duration(1000)
            .attr('cx', stepsExteriorBox)
            .attr('cy', secondRow)
        }, 2000)

    var point16Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point16-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point16"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point16Bubble.transition()
            .duration(1000)
            .attr('cx', stepsOptionsBox)
            .attr('cy', secondRow)
        }, 2000)

    var point17Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point17-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point17"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point17Bubble.transition()
            .duration(1000)
            .attr('cx', stepsAccessoriesBox)
            .attr('cy', secondRow)
        }, 2000)

    var point18Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point18-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point18"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point18Bubble.transition()
            .duration(1000)
            .attr('cx', stepsSummaryBox)
            .attr('cy', secondRow)
        }, 2000)


//First row - 15 to 20 minutes
    var point19Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point19-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point19"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point19Bubble.transition()
            .duration(1000)
            .attr('cx', stepsModelBox)
            .attr('cy', firstRow)
        }, 2000)

     var point20Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point20-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point20"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point20Bubble.transition()
            .duration(1000)
            .attr('cx', stepsInteriorBox)
            .attr('cy', firstRow)
        }, 2000)

    var point21Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point21-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point21"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point21Bubble.transition()
            .duration(1000)
            .attr('cx', stepsExteriorBox)
            .attr('cy', firstRow)
        }, 2000)

    var point22Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point22-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point22"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point22Bubble.transition()
            .duration(1000)
            .attr('cx', stepsOptionsBox)
            .attr('cy', firstRow)
        }, 2000)

    var point23Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point23-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point23"] *10)
           .attr("fill-opacity", 0)
        setTimeout( function(){
           point23Bubble.transition()
            .duration(1000)
            .attr('cx', stepsAccessoriesBox)
            .attr('cy', firstRow)
        }, 2000)

    var point24Bubble = frame.append("circle")
           .attr('class', 'breakdown-bubble')
           .attr('id', 'point24-bubble')
           .attr('cx', clickedModelXpos)
           .attr('cy', clickedModelYpos)
           .attr('r', countedModels[model]["point24"] *10)
           .attr("fill-opacity", 0)
           .on("mouseover", function(){
            console.log("point24");
            showBreakdownLabel(model, "point24", "#point24-bubble");
           })
        setTimeout( function(){
           point24Bubble.transition()
            .duration(1000)
            .attr('cx', stepsSummaryBox)
            .attr('cy', firstRow)
        }, 2000)

    //Fade in breakdown bubbles
    frame.selectAll('.breakdown-bubble').transition()
                                 .duration(1000)
                                 .attr('fill-opacity', 1)
    
}

//Takes model and point to get amount to display
// Takes pointID to allow JQuery $ to find the SVG circle
// in the DOM, then look at it's position attributes,
// in order to use them to position the new label
function showBreakdownLabel(model, point, pointID){
    frame.append("text").text(countedModels[model][point])
                    .attr("x", function(){
                        return $(pointID).attr("cx");
                    })
                    .attr("y", function(){
                        return $(pointID).attr("cy");
                    })
                    .attr("opacity", 1)
                    .attr("text-anchor", "middle")
                    .attr("class", "steps-label")
}






}); //End of data loading function