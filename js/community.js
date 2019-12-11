//Author: Levi Schanding
console.log("Page loaded");

class Post {
    constructor(title, date, content) {
        this.title = title;
        this.date = date;
        this.content = content;
    }
}

let blogContentReady = false;
let testimonialContentReady = false;
let loadDelay = setInterval(isContentReady, 500);
let blogMap = new Map();
let testimonialMap = new Map();
let tipsArray = [
    "Great Ideas For Friends and Family Members to Help Her Though Her Breast Cancer Journey. Ideas for having fun &amp; improving the quality of her life! If you have a friend or loved one that has been diagnosed with breast cancer, you can help her avoid the feeling of loneliness and isolation &#8211; which often leads to despair &#8211; by keeping her in involved in your life. Please don&#8217;t let her go through treatment alone.",
    "There are many things you can do to help. Here are just a few ideas:",
    "Just Call to Chat",
    "Hat Shower give a shower for your friend. Have everyone bring a cool hat.",
    "Send out e-mail to co-workers and friends and give your friend&#8217;s address so people can send cards and letters.",
    "Take up a collection and buy a day of house cleaning, window washing or carpet cleaning for your friend.",
    "Cook a Meal for her family on chemotherapy days.",
    "Drop by with a milkshake.",
    "Go to a matinee movie and/or to lunch.",
    "Drop by to do some laundry.",
    "Run some errands for her (grocery shopping, post office, bank deposits).",
    "Get manicures and pedicures.",
    "Get her a gift certificate for a healing massage.",
    "Just Call to Chat",
    "Wash her car",
    "Help with yard work (and chat while working).",
    "Take her to hit a bucket of golf balls (depending on her level of strength).",
    "Arrange for a day of babysitting so she can rest.",
    "Go wig shopping &#8211; try on crazy colors (the crazier the better).",
    "Buy her a new shade of lipstick.",
    "Add her to your churches prayer chain, some womens groups will also send cards and notes.",
    "Ask her to make you a list of errand, chores and tasks so you can pass them around for others to help.",
    "Have a going away boobie party.",
    "Invite her to a special lunch, bring out the fancy china and silver. Don&#8217;t forget the linen napkins. What are you saving them for anyway. Celebrate your friendship and life.",
    "Many restaurants have gourmet foods to go. Bring home her favorites and enjoy them with her in comfy clothes.",
    "There is nothing better than the smell of warm bread, or the taste of warm bread with a slather of butter. Share the experience with her, and of course do the clean up. Slice it up and freeze it, so she can enjoy it later as well.",
    "Bring over an assortment of herbal teas. Looking for a better nights sleep? Try chamomile. Need an afternoon pick up? Try hibiscus and rose hips.",
    "Just Call to Chat",
    "If your friend likes to cook, bring over some fresh herbs, many supermarkets are stocking them these days.",
    "Ice cream sundaes are always in style, bring over a few toppings and you have instant fun.",
    "Create a fun &#8220;Do Not Disturb&#8221; sign for her to use it if she needs some alone time. Great for the bathroom door to take that long relaxing bath or an afternoon nap. Don&#8217;t forget a nice basket of bath products.",
    "If time is short, pay a responsible teenager to do some mundane &amp; tiring errands to take away some of the burden of chores.",
    "Breakfast in bed is always a hit, don&#8217;t forget the flowers to brighten up the tray.",
    "Take your friend for a new look. It&#8217;s more fun to do it together. If she&#8217;s up to it, try on some new styles of clothes together. A bald head goes well with punk styles. Pick something you would never normally wear and have a good laugh. Don&#8217;t forget the camera.",
    "Get a few wild temporary tattoos and have fun putting them in daring places.",
    "Drive your friend around so she can more easily do those errands, it will take some of the stress out of errands and make them more fun at the same time.",
    "Pamper your friend with a paraffin wax treatment, the warm wax does wonders for circulation and makes your hands soft and smooth. Can be used for sore, tired feet as well.",
    "When you come to visit your friend, suggest she take a long hot bubble bath while you watch the kids, do the dishes or just field the phone calls.",
    "Just Call to Chat",
    "Before she looses her hair, dye it a color she&#8217;s always talked about, or get it cut short and sassy. Encourage her to be daring by trying out some new styles or looks. Remember, it&#8217;s probably only going to last for a week or so.",
    "Try some art therapy. Not creative enough? Bring over a couple of coloring books and color crayons and help her feel like a kid again with color book therapy. Good time to talk and bring out the creativity even if she isn&#8217;t an artist. Don&#8217;t forget, it&#8217;s ok to color outside of the lines.",
    "If your friend is dealing with Lymphademia you could hire a massage therapist that is specially trained to help relieve the pressure and help her relax.",
    "If you like to do crafts, bring over the supplies and share this new craft with your friend.",
    "If you have a sweet pet that likes people, share them with your friend. Pets have a special healing power. (check for allergies beforehand)",
    "One way to pamper your friend is to shampoo her hair (or massage her head with lotion if she has no hair)",
    "Oh Yeah… Just Call to Chat!",
    "And Finally… If she says no, don&#8217;t give up, continue to offer to help."];
//Main
getBlogEntries();
getTestimonialEntries();
isContentReady();
//Event Listeners
$("#blog-goto-page").on('click', function () {
    gotoPage(parseInt($("#blog-requested-page").val()))
});
$("#tips-content").click(function () {
    randomTip()
});
$("#t-btn-left ").on('click', function () {
    traverseTestimonials($("#t-btn-left").val())
});
$("#t-btn-right ").on('click', function () {
    traverseTestimonials($("#t-btn-right").val())
});

//Functions
function gotoPage(reqPage) {
    if (reqPage > blogMap.size || reqPage < 1) {
        $("#blog-requested-page").val("1");
        alert("Index out of bounds, call a priest");
        return;
    }
    //console.log(reqPage);
    $("#blog-title").text(blogMap.get(reqPage - 1).title);
    $("#blog-date").text(blogMap.get(reqPage - 1).date);
    $("#blog-content").text(blogMap.get(reqPage - 1).content);
}
function traverseTestimonials(btnVal) {
    let currentEntry = parseInt($("#t-page").val());
    switch (btnVal) {
        case "left":
            if (currentEntry > 1) {
                currentEntry--;
                $("#t-page").val(currentEntry);
            }
            break;
        case "right":
            if (currentEntry < testimonialMap.size) {
                currentEntry++;
                $("#t-page").val(currentEntry);
            }
            break;
        default:
            currentEntry = 1;
    }
    $("#testimonial-title").text(testimonialMap.get(currentEntry - 1).title);
    $("#t-content").text(testimonialMap.get(currentEntry - 1).content);
}
function isContentReady() {
    if (blogContentReady && testimonialContentReady) {
        $(function () {

            gotoPage(parseInt($("#blog-requested-page").val()));
            traverseTestimonials(1);
            randomTip();
        });
        clearInterval(loadDelay);
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function randomTip() {
    $("#tips-content").html('<p>' + tipsArray[getRandomInt(46)] + '</p>');
}
function getBlogEntries() {
    //populating blogMap with entries pulled from a JSON file
    $.getJSON("https://api.myjson.com/bins/ypel0", function (data) {
        for (i = 0; i < data['Blog'].length; i++) {

            newTitle = data['Blog'][i]['title'];
            newDate = data['Blog'][i]['date'];
            newContent = data['Blog'][i]['content'];

            blogMap.set(i, new Post(newTitle, newDate, newContent));
            console.log(blogMap.get(i));
            console.log(blogMap.get(i).content); //IT WORKS YES! HOLY MOLY


        }
        blogContentReady = true;
        console.log("Blog content ready.");
    });
}
//populating testimonialMap with entries pulled from a JSON file
function getTestimonialEntries() {
    $.getJSON("https://api.myjson.com/bins/ypel0", function (data) {
        for (i = 0; i < data['Testimonials'].length; i++) {

            newTitle = data['Testimonials'][i]['title'];
            newDate = data['Testimonials'][i]['date'];
            newContent = data['Testimonials'][i]['content'];

            testimonialMap.set(i, new Post(newTitle, newDate, newContent));
            console.log(testimonialMap.get(i));
            console.log(testimonialMap.get(i).content); //IT WORKS YES! HOLY MOLY


        }
        testimonialContentReady = true;
        console.log("Testimonial content ready.");
        console.log("T-Map length: " + testimonialMap);
    });
}




