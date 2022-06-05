
// $("h1").addClass("big-title");

// $("button").html("<em>Click Me!</em>");

// $("a").attr("href", "http://www.yahoo.com");


// $("h1").click(function(){
//     $("h1").css("color", "red");
// });

// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "red";
//     });
// };

$("button").click(function(){
    $("h1").css("color", "red");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
});