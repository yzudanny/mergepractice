
$(function(){ $("input").on("click",function(){
    //alert("Hi");
$("h1").text($("li:first").text()); });
})
$(function(){ $("input").on("click",function(){
    //alert("Hi");
$("h1").text($("li:last").text()); });
});
$(function(){ $("input").on("click",function(){
    //alert("Hi");
$("h1").text($("li").eq(1).text()); });
});
$(function(){ $("input").on("click",function(){
    //alert("Hi");
var numberOfListItem = $("li").length;
var randomChildNumber = Math.floor(Math.random()*numberOfListItem); $("h1").text($("li").eq(randomChildNumber).text());
}); });