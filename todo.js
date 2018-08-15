function todo(todoList, label){
	while(label){
		var option = prompt("Enter your option: add, list, delete, quit ? ");
		if(option=="add"){
			var add = prompt("Enter your todo for today!");
			todoList.push(add);
		}
		else if(option=="list")	{
			console.log("Here is your todo for today!");
			console.log("****************");
			todoList.forEach(function(str,i){
				count++;
				console.log(i+". "+str)
			});
			console.log("****************");

		}
		else if(option=="quit"){
			console.log("Quitting, Thank you for using!");
			label=false;
		}
		else if(option=="delete"){
			var n = prompt("Which todo you want to delete?")
			delete todoList.splice(n,1);
		}
	}

}
var todoList = [];
var count=0
var label=true;
todo(todoList,label);
