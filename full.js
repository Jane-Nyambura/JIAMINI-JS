var fruit = "i am learning ";
fruit += "i came second";
console.log(fruit)


function dog(myNoun, myVerb, myAdjective, myAdverb) {
    var results = "";
    results = "i like the way my " + " " + myNoun + " " + myVerb + " " + myAdjective + " to me";
    //string concatination (+)used to join strings,("")used for spacing
    return results;
} //change the words here to test the functions.
console.log(dog("big", "dog", "runs"));


let person = ["jane", "janelle", "frontend", "AkiraChix".split("")];
[firstName, lastName, title, school] = person //array destructuring the simple method .....person is the declared variable.
console.log(firstName);
console.log(lastName);
console.log(title);
console.log(school);


let patient = {
        age: 25,
        name: "Babra", //object destructuring
        isSick: true,
        isMarried: false
    } //must
let { age, ...rest } = patient; //the sweet rest operator
console.log(age);
console.log(rest.name);
console.log(rest.isSick);
console.log(rest.isMarried);


let dancer = {
        age: 20
    }
    // let { age, name = "joy", gender = "male" } = dancer; //default functions it's defined by = sign
    // console.log(age);
    // console.log(gender);
    // console.log(name);
    // let user = { name: "john" }



function prepare(ingredients, callback) {
    console.log(`preparing ${ingredients}`);
    callback();
}

function chop() {
    console.log("chopping");
}
prepare("tomatoes and onions", chop);
const posts = [{
    title: "Born a crime",
    author: "Trevor Noah "

}, {
    title: "Think Big",

    author: "Ben Carson"
}]

function getPost() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `${post.title}`;

        });
        console.log(output);

    }, 1000);

}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);

    }, 2000);

}
getPost();
createPost({
    title: 'to kill a mocking bird',
    author: "hopper lee "
});
var ourArray = ["jane", 20] /* array string and numbers*/
var myArray = [
    ["Akirachix", 616],
    ["every day is just amaizing", 13] //arrays within an other array./ /
];
var myData = myArray[1]; //array index position
console.log(myData);
myArray.push(["joy", "rose"]);
var removeFromMyArray = myArray.pop() //for removing the last
var removeFromMyArray = myArray.shift();
myArray.unshift("happy"); //unShift is to add a function to an array at the beginning of an array.
console.log(myArray);

function myReusableF() { //it runs any time the function is called
    console.log("Hi am an akirachix");
}
myReusableF();
myReusableF();
myReusableF();
myReusableF();

function myArgs(a, b) { //passing values to functions with arguments
    console.log(a * b);
}
myArgs(20, 10);
let studentName = (first, second) => `${first}, ${second}`
console.log(studentName("jane ", "nyambura"));
console.log("plant kunde");
setTimeout(function() {
    console.log("water kunde") //synchronous functions
}, 3000)
console.log("add fertilizer");
setTimeout(() => {
    try {
        add();
    } catch (err) {
        console.log("error message=>" + err)
    }
})