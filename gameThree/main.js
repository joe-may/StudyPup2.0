
$('.win').hide();
$('.lose').hide();


////snowball throw
$('body').click(function(e) {
  var parentOffset = $(this).parent().offset();
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - parentOffset.top;
  $(".snowball").animate({
      width: '10px',
      left: relX,
      top: relY
  }, 200, function() {
      $(".snowball").removeAttr('style');
  });
});

const answerset = [
  { problem: "3 + 2 =", answer: "5"},
  { problem: "6 + 1 =", answer: "7"},
  { problem: "4 + 4 =", answer: "8"},
  { problem: "1 + 2 =", answer: "3"},
  { problem: "3 + 1 =", answer: "4"},
  { problem: "7 + 3 =", answer: "10"},
  { problem: "6 + 3 =", answer: "9"},
  { problem: "2 + 4 =", answer: "6"},
  
  
]

$('.start').on('click',function() {
$('.start').hide();
$('.win').hide();
$('.lose').hide();



// $(document).click(function(e) {
//   mouseX = e.pageX;
//   $('.dart').css("left", e.pageX);
// });

var currentGameArray = [];
// var playerLives = 0;


answerset.forEach(function(questions) {
  currentGameArray.push(questions)
})


  var randomProblemSelector = Math.floor((Math.random() * currentGameArray.length));
  var selectedProblem = currentGameArray[randomProblemSelector].problem;
  var theAnswer = currentGameArray[randomProblemSelector].answer;

console.log(currentGameArray);

  // $.each(currentGameArray, function(index,value){
  //   $(".answers").append("<div class='house'><div class='iglooWrapper "+'a'+index+"'><img src='https://i.imgur.com/DsWjPxC.png' class='scoop'><img src='../StudyPup_assets/penguin_transparent.gif' class='penguin hide'><div class='answer'>" + value.answer + "</div></div></div>");
  //   console.log("index: " + index + " problem: " + value.problem + " answer: " + value.answer );
  // });

 
  var counter = 30000;
 
//////up counter 
$('.countUp').click(function() {
  $('.output').html(function(i, val) { return val*1+1 });
});
///// down counter
$('.countDown').click(function() {
  $('.output').html(function(i, val) { return val*1-1 });
});

////////////timer
  var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0 && currentGameArray.length > 0) {
         clearInterval(interval);
          // $('#time').text(counter);
          console.log("you lose");
          $('.lose').show();
          $(".reset").html(" ");
          $(".start").show();
          
        return;
    }else{
      $('#time').text(counter);
      
      console.log("Timer --> " + counter);
    }
}, 1000);

  

  // display the selected problem on the screen
  
  var currentEquation = function () {
    var problemHtml = $('<p></p>').html(selectedProblem);
    return $(".problem").append(problemHtml);
      
  }
 
  currentEquation();
  

  // when answer is clicked on
  $('.create').on('click',function() {
    var clickedAnswer = $('.output').text();
    
    if (clickedAnswer === theAnswer) {
      console.log("Correct!");
      
        $( "p" ).remove();
          currentGameArray.splice(randomProblemSelector,1);
          console.log(currentGameArray.length);
          winningCheck();
          generateNextTurn();
          console.log($(this).parent());
          
      

   

      // get new problem/answer 

    } else {
     
    };
  });
    // if (playerLives === 3) {
    //   $('.lose').show();
    //   $(".reset").html(" ");
    //   $(".start").show();
    //   // generateHearts();
      
      

      
  //   }
  


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
    
  }
  

  function winningCheck() {
  
  if (currentGameArray.length > 0){
console.log('keep playing');
  } else {
    $('.win').show();
    $(".reset").html(" ");
    $(".start").show();
    $('.tryAgain').show();
    clearInterval(interval);
    console.log('you win')
    // generateHearts();
    
   
    
  };
}
  
}); 


// var generateHearts = function () {
// var heartsLoad = $('<li></li>').html('<img class=heart src="https://i.imgur.com/MQ88P97.png" />');
// $("ul").append(heartsLoad);
// console.log("generating!");
// }