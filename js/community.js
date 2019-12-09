console.log("Page loaded");

class Post{
    constructor(title, date, content){
        this.title = title;
        this.date = date;
        this.content = content;
    }
}

let blogPage = 1;
let tipsPage = 1;

let blogMap = new Map();
let testimonialMap = new Map();
let tipsMap = new Map();
$.getJSON("https://api.myjson.com/bins/nnlio",function(data){
   for(i = 0; i < data.length; i++){

       newTitle = data[i]['title'];
       newDate = data[i]['date'];
       newContent = data[i]['content'];

       blogMap.set(i, new Post(newTitle, newDate, newContent));
       console.log(blogMap.get(i));
       console.log(blogMap.get(i).content); //IT WORKS YES! HOLY MOLY


   }
});




//Event Listeners
$("#blog-goto-page").on('click', gotoPage(parseInt($("#blog-requested-page").val())));
//Functions
function gotoPage(reqPage){
    console.log(reqPage);
}



