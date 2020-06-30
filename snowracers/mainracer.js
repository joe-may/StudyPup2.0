
// $('.tryAgain').hide();

$('.win').hide();
$('.lose').hide();


//////animations




///// audio

/////////
// var generateHearts = function () {
//   var heartsLoad = $('<li></li>').html('<img class=heart src="https://i.imgur.com/MQ88P97.png" />');
//   $("ul").append(heartsLoad);
//   console.log("generating!");
//   }



const answerset = [
  { problem: "3 + 2 =", answer: "5"},
  { problem: "6 + 1 =", answer: "7"},
  { problem: "4 + 4 =", answer: "8"},
  { problem: "2 + 9 =", answer: "11"},
  { problem: "5 + 4 =", answer: "9"},
  { problem: "3 + 1 =", answer: "4"},
  { problem: "7 + 3 =", answer: "10"},
  { problem: "6 + 6 =", answer: "12"},
  { problem: "2 + 1 =", answer: "3"},
  { problem: "3 + 3 =", answer: "6"},
]

$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();
$('li').first().remove();
$('li').first().remove();
$('li').first().remove();



///// animate kart2
setTimeout(function() {
    $('.kart2').animate({
        left: "45%"
    }, 20000);
});
///////// finish line
$( ".fline" ).delay( 20000 ).animate({
    left: "55%"
},2200);

/////timer and lose logic
var counter = 20;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0 && currentGameArray.length > 0) {
     		clearInterval(interval);
          $('#timer').html("<h3>Count down complete</h3>");
          console.log("you lose");
          $('.lose').show();
          $(".reset").html(" ");
          $(".start").show();
          
        return;
    }else{
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1100);



// $(document).mousemove(function(e) {
//   mouseX = e.pageX;
//   $('.obi').css("left", e.pageX);
// });

var currentGameArray = [];
var playerLives = 0;


answerset.forEach(function(questions) {
  currentGameArray.push(questions)
})


  var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
  var selectedProblem = currentGameArray[randomProblemSelector].problem;
  var theAnswer = currentGameArray[randomProblemSelector].answer;

console.log(currentGameArray);

  $.each(currentGameArray, function(index,value){
    $(".answers").append("<div class='snowmen' id='0'>" + value.answer + "</div>");
    console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
  });

 

  

  // display the selected problem on the screen
  
  var currentEquation = function () {
    var problemHtml = $('<p></p>').html(selectedProblem);
    return $(".problem").append(problemHtml);
      
  }
 
  currentEquation();
  ///boost varible
  var boost = 5
  

  // when answer is clicked on
  $('.answers div').on('click',function() {
    var clickedAnswer = $(this).text();
    
    if (clickedAnswer === theAnswer) {
      console.log("Correct!");
      $(this).fadeOut(200, function() {
          currentGameArray.splice(randomProblemSelector,1);
          winningCheck();
          generateNextTurn();
          console.log(currentGameArray.length + "Current game array");
          $('.kart1').animate({
            'left': boost + "%"
        }, 1000);
        
      });
      
      // get new problem/answer 

    } else {
      playerLives += 1
      $('li').first().remove();
      console.log("False");
    };
    

  });

 
  

  function generateNextTurn() {
    if (currentGameArray.length === 0){
    return;
    }
    randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
    selectedProblem = currentGameArray[randomProblemSelector].problem;
    theAnswer = currentGameArray[randomProblemSelector].answer;
    //$("p").first().html(selectedProblem);

    var problemHtml = $('<p></p>').html(selectedProblem);
    $(".problem").append(problemHtml);
    boost = boost + 5;
    
    
  }
  

  function winningCheck() {
  
  if (currentGameArray.length > 0){
console.log('keep playing');
  } else {
    $('.win').show();
    $(".reset").html(" ");
    $(".start").show();
    $('.tryAgain').show()
    // generateHearts();
    
   
    
  };
}
  
}); 


// var generateHearts = function () {
// var heartsLoad = $('<li></li>').html('<img class=heart src="https://i.imgur.com/MQ88P97.png" />');
// $("ul").append(heartsLoad);
// console.log("generating!");
// }