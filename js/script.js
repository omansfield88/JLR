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
        "NPvogueSE": 1,
        "NPautobiography": 1,
        "NPSVautobiography": 1
    },
    "Range Rover Sport": {
        "Amount": 1,
        "NPhse": 1,
        "NPhseDynamic": 1,
        "NPautobiographyDynamic": 1,
        "NPsvr": 1
    },
    "Range Rover Evoque": {
        "Amount": 1,
        "NPse": 1,
        "NPseTech": 1,
        "NPhseDynamic": 1,
        "NPhseDynamicLux": 1,
        "NPautobiography": 1
    },
    "Discovery": {
        "Amount": 1,
        "NPgraphite": 1,
        "NPlandmark": 1,
        "NPcommercialSE": 1
    },
    "Discovery Sport": {
        "Amount": 1,
        "NPse": 1,
        "NPseTech": 1,
        "NPhse": 1,
        "NPhseBlack": 1,
        "NPhseLuxury": 1,
        "NPhseDynamicLux": 1,
    }
}


//Date filter function//
function getDatedModelAmounts(model, startDate, endDate){
    var filteredSession = 0; //Start with empty variable to hold counted sessions
    var NPvogue = 0;
    var NPvogueSE = 0;
    var NPautobiography = 0;
    var NPSVautobiography = 0;
    var NPautobiographyDynamic = 0;
    var NPhse = 0;
    var NPhseDynamic = 0;
    var NPsvr = 0;
    var NPse = 0;
    var NPseTech = 0;
    var NPhseDynamicLux = 0;
    var NPgraphite = 0;
    var NPlandmark = 0;
    var NPcommercialSE = 0;
    var NPhseBlack = 0;
    var NPhseLuxury = 0;



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
            else if (data[i].nameplate == "Vogue SE"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPvogueSE ++;
            } 
            else if (data[i].nameplate == "Autobiography"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPautobiography ++;           
            } 
            else if (data[i].nameplate == "SVAutobiography"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPSVautobiography ++;           
            } 
            else if (data[i].nameplate == "Autobiography Dynamic"
                    && data[i].date >= startDate && data[i].date <= endDate)
            {
                NPautobiographyDynamic ++;           
            } 
            else if (data[i].nameplate == "HSE"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPhse ++;           
            } 
            else if (data[i].nameplate == "HSE Dynamic"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPhseDynamic ++;       
            } 
            else if (data[i].nameplate == "SVR"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPsvr ++;           
            } 
            else if (data[i].nameplate == "SE"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPse ++;
            }
            else if (data[i].nameplate == "SE Tech"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPseTech ++;           
            } 
            else if (data[i].nameplate == "HSE Dynamic Lux"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPhseDynamicLux ++
            } 
            else if (data[i].nameplate == "Graphite"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPgraphite ++;           
            } 
            else if (data[i].nameplate == "Landmark"
                     && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPlandmark ++;           
            } 
            else if (data[i].nameplate == "Commercial SE"
                    && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPcommercialSE ++;           
            } 
            else if (data[i].nameplate == "HSE Black"
                    && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPhseBlack ++;           
            } 
            else if (data[i].nameplate == "HSE Luxury"
                    && data[i].date >= startDate && data[i].date <= endDate
            ){
                NPhseLuxury ++;           
            }            
        }

    };

    //Updated object with the number of found models and nameplates    
    countedModels[model]["Amount"] = filteredSession;
    countedModels[model]["NPvogue"] = NPvogue;
    countedModels[model]["NPvogueSE"] = NPvogueSE;
    countedModels[model]["NPautobiography"] = NPautobiography;
    countedModels[model]["NPSVautobiography"] = NPSVautobiography;
    countedModels[model]["NPhse"] = NPhse;
    countedModels[model]["NPhseDynamic"] = NPhseDynamic;
    countedModels[model]["NPsvr"] = NPsvr;
    countedModels[model]["NPse"] = NPse;
    countedModels[model]["NPseTech"] = NPseTech;
    countedModels[model]["NPhseDynamicLux"] = NPhseDynamicLux;
    countedModels[model]["NPgraphite"] = NPgraphite;
    countedModels[model]["NPlandmark"] = NPlandmark;
    countedModels[model]["NPcommercialSE"] = NPcommercialSE;
    countedModels[model]["NPhseBlack"] = NPhseBlack;
    countedModels[model]["NPhseLuxury"] = NPhseLuxury;
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

        

//Draw model bubbles
var modelsRangeRover = frame
                       .append('circle')
                       .attr('cy', 340)
                       .attr('cx', 100)
                       .attr('r', 0)

                       .on('click', function(){
                            
                            var inflatedBubbleRadius = 200; 
                            var inflatedBubbleXpos = 390;

                            //Change amount of a nameplate found into a percentage of the width of the inflated bubble
                            var RangeRoverVogueAmount = countedModels["Range Rover"]["NPvogue"] / countedModels["Range Rover"]["Amount"] * inflatedBubbleRadius;
                            var RangeRoverVogueSEAmount = countedModels["Range Rover"]["NPvogueSE"] / countedModels["Range Rover"]["Amount"] * inflatedBubbleRadius;
                            var RangeRoverAutobiographyAmount = countedModels["Range Rover"]["NPautobiography"] / countedModels["Range Rover"]["Amount"] * inflatedBubbleRadius;
                            var RangeRoverSVAutobiographyAmount = countedModels["Range Rover"]["NPSVautobiography"] / countedModels["Range Rover"]["Amount"] * inflatedBubbleRadius;


                            //Work out xPos based on previous bubbles xPos
                            var vogueBubbleXpos = inflatedBubbleXpos - inflatedBubbleRadius + RangeRoverVogueAmount;
                            var vogueSEBubbleXpos = vogueBubbleXpos + RangeRoverVogueAmount + RangeRoverVogueSEAmount;
                            var autobiographyBubbleXpos = vogueSEBubbleXpos + RangeRoverVogueSEAmount + RangeRoverAutobiographyAmount;
                            var SVautobiographyBubbleXpos = autobiographyBubbleXpos + RangeRoverAutobiographyAmount + RangeRoverSVAutobiographyAmount;

                            modelsRangeRover.transition()
                            .duration(1000)
                            .attr('r', inflatedBubbleRadius)
                            .attr('cx', inflatedBubbleXpos);

                            var vogueBubble = frame
                               .append('circle')
                               .attr('cy', 340)
                               .attr('cx', vogueBubbleXpos)
                               .attr('r', RangeRoverVogueAmount )
                               .attr('class', 'nameplate-bubble');
                            var vogueSEBubble = frame
                               .append('circle')
                               .attr('cy', 340)
                               .attr('cx', vogueSEBubbleXpos)
                               .attr('r', RangeRoverVogueSEAmount)
                               .attr('class', 'nameplate-bubble');
                            var autobiographyBubble = frame
                               .append('circle')
                               .attr('cy', 340)
                               .attr('cx', autobiographyBubbleXpos)
                               .attr('r', RangeRoverAutobiographyAmount)
                               .attr('class', 'nameplate-bubble');
                            var SVautobiographyBubble = frame
                               .append('circle')
                               .attr('cy', 340)
                               .attr('cx', SVautobiographyBubbleXpos)
                               .attr('r', RangeRoverSVAutobiographyAmount)
                               .attr('class', 'nameplate-bubble');
                        })

                       .attr('class', 'model-bubble');

var modelsRangeRoverSport = frame
                       .append('circle')
                       .attr('cy', 340)
                       .attr('cx', 340)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');

var modelsRangeRoverEvoque = frame
                       .append('circle')
                       .attr('cy', 340)
                       .attr('cx', 580)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');

var modelsDiscovery = frame
                       .append('circle')
                       .attr('cy', 340)
                       .attr('cx', 820)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');

var modelsDiscoverySport = frame
                       .append('circle')
                       .attr('cy', 340)
                       .attr('cx', 1060)
                       .attr('r', 0)
                       .attr('class', 'model-bubble');










//Animates the radius of the model-bubbles
// Takes carModel and numOfCarModel as parameters,
// so you can invoke grow with any model.
function grow(carModel, numOfCarModel) {
  carModel.transition()
        .duration(1000)
        .attr('r', numOfCarModel)
}

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
    // so you can invoke grow with any model.
    function grow(carModel, numOfCarModel) {
      carModel.transition()
            .duration(2000)
            .attr('r', numOfCarModel)
    }

    //Calls animation
    grow(modelsRangeRover, countedModels['Range Rover']['Amount']);
    grow(modelsRangeRoverSport, countedModels['Range Rover Sport']['Amount']);
    grow(modelsRangeRoverEvoque, countedModels['Range Rover Evoque']['Amount']);
    grow(modelsDiscovery, countedModels['Discovery']['Amount']);
    grow(modelsDiscoverySport, countedModels['Discovery Sport']['Amount']);



    console.log(countedModels);
     

});


///////////////////////////////////////////////////
////////////Dive into nameplates//////////////////
/////////////////////////////////////////////////







/////////////////////////////////
//////Bubble Pack Layout////////
///////////////////////////////



}); //End of data loading function