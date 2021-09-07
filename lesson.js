window.addEventListener("load", function(){
	 let tasklist=[];
	 const name= document.getElementById("text");
	 const description=document.getElementById("txtarea");
	 const button=document.getElementById("btn");
	 
	 
	 
	 class Task{
		 constructor(name, description){
			 this.name=name;
			 this.description=description;
			 this.id=Date.now()
			 
		 }
		 toString(){
			 let html=`<li class="task"><div>
			  ${this.name}-${this.description}
			  <button>Edit</button>
			  
			  <button id="${this.id}">Delete</button>
			  
			 </div></li>`
			 return html;
		 }
	 }
	 function render(){
		 const listUi=document.getElementById("todolist");
		 
		 listUi.innerHTML="";
		 if(tasklist.length===0){
			  listUi.innerHTML="no task to do";
			  
			 
		 }
		 tasklist.forEach(function(task){
			 listUi.innerHTML+=task.toString()
			 
			 
		 })
		 
	 }
	 function addTask(t){
		 tasklist.push(t);
		 render()
		 
	 }
	function creatTask(){
		const tName=name.value;
		const tDescription=description.value;
		const newTask=new Task(tName, tDescription)
		addTask(newTask)
		
		
	}
	
	button.addEventListener("click", creatTask)
})