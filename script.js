let timeLastStarted = null;
let elapsed = 0;


function startStop(){

    if (timeLastStarted === null){

        $("#start-stop").html('Stop');
        timeLastStarted = Date.now();
      
        setInterval(ticker, 20);

    }

    else{

        $("#start-stop").html('Start');
        
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
    $("#start-stop").html('Start');
}