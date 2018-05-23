let timeLastStarted = null;
let elapsed = 0;


function startStop(){

    if (timeLastStarted === null){

        $("#start-stop").html('Stop');
        timeLastStarted = Date.now();
        $("#start-stop").removeClass('btn btn-success button');
        $("#start-stop").addClass('btn btn-warning button');
        setInterval(ticker, 20);

    }

    else{

        $("#start-stop").html('Start');
        $("#start-stop").removeClass('btn btn-warning button');
        $("#start-stop").addClass('btn btn-success button');
        elapsed += (Date.now() - timeLastStarted) / 1000;

        timeLastStarted = null;
    }
  
}

function ticker(){

    let fullElapsed = elapsed;

    if(timeLastStarted !== null){
        fullElapsed += (Date.now() - timeLastStarted) / 1000;
    }


    $('#timer').html(fullElapsed.toFixed(2));
}

function reset(){
    timeLastStarted = null;
    elapsed = 0;
    fullElapsed = 0;
    $("#start-stop").removeClass('btn btn-warning button');
    $("#start-stop").addClass('btn btn-success button');
    $("#start-stop").html('Start');
    
}