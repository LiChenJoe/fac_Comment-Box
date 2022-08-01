let wordCounting = document.querySelector("#wordCounting"); 
function wordCount(comment, commentValue) {
    wordCounting.innerHTML= commentValue.length +" / 140";
    if (commentValue.length>= 140){
        wordCounting.style.color = "red";
        comment.style.borderColor = "red";
        comment.style.borderwidth = "2px"; 
        wordCounting.innerHTML = commentValue.length +" / 140" + "  Word limit is up to 140.";
    } else if (commentValue.length< 10) {
        wordCounting.style.color = "";
        comment.style.borderColor = "";
    }
}
let nameBox = document.querySelector("#nameBox");
let eEmail = document.querySelector("#eEmail");
let commentCotent = document.querySelector("textarea");
let commentReview = document.querySelector(".commentReview");
console.log(commentCotent.value);
function postComment() {
    if (nameBox.value==""||eEmail.value==""||commentCotent.value==""){
        console.log("ger");
        return ;
    } 
    if (commentCotent.value.length>140){
        console.log(commentCotent.value.length);
        window.alert("Sorry, You had exceed the word count.")
        return ;
    } 
    console.log("jj");
    if (commentReview.childNodes.length===0) {
        let reviewTitle = document.createElement("h1");
        reviewTitle.innerHTML= "Comment Review"
        commentReview.appendChild(reviewTitle);
        reviewTitle.classList.add("reviewTitle");
    } 
    let reviewCommentBlock = document.createElement("div");
    reviewCommentBlock.classList.add("reviewCommentBlock");
    let reviewName = document.createElement("p");
    let reviewEmail= document.createElement("p");
    let reviewComment= document.createElement("p");
    reviewComment.classList.add("reviewCooment");
    reviewName.innerHTML = "Name: "+ nameBox.value;
    reviewEmail.innerHTML = "Email: "+ eEmail.value;
    reviewComment.innerHTML= "comment: " +commentCotent.value;
    commentReview.appendChild(reviewCommentBlock);
    reviewCommentBlock.appendChild(reviewName);
    reviewCommentBlock.appendChild(reviewEmail);
    reviewCommentBlock.appendChild(reviewComment);
    clear();
}

function clear() {
    nameBox.value="";
    eEmail.value="";
    commentCotent.value="";
    wordCounting.innerHTML= " / 140";;
}


