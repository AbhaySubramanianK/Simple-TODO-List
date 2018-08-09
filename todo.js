function todo(){
	while(label){
		var option = prompt("Enter your option: add, list, quit ? ");
		if(option=="add"){
			var add = prompt("Enter your todo for today!");
			todoList.push(add);
		}
		else if(option=="list")	{
			console.log("Here is your todo for today!");
			console.log(todoList);

		}
		else if(option=="quit"){
			console.log("Quitting, Thank you for using!");
			label=false;
		}
	}

}
var todoList = [];
var label=true;
todo();
