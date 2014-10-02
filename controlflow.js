//Create an array of foods. Then create an if/else statement that prints "You have no food" if they array is empty, "You have one food" if there is exactly 1 item in the list, and "You have lots of food" otherwise.//
var statement;
var foods=["pizza", "pasta", "salad"];
if (foods.length>1){
	statement="You have lots of food";
}
else if (foods.length=1){
	statement="You have one food";
}
else {
	statement="You have no food";
}
console.log("How much food is there?" + statement);






