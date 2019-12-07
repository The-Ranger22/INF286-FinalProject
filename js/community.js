console.log("Page loaded");

class Post{
    constructor(title, date, content){
        this.title = title;
        this.date = date;
        this.content = content;
    }
}



let blogMap = new Map();
$.getJSON("https://api.myjson.com/bins/nnlio",function(data){
   for(i = 0; i < data.length; i++){

       newTitle = data[i]['title'];
       newDate = data[i]['date'];
       newContent = data[i]['content'];

       blogMap.set(i, new Post(newTitle, newDate, newContent));
       blogMap.get(i);


   }
});





