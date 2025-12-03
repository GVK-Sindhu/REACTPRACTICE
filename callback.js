function getuserdetails(id,getuserid){
    console.log("getting user detail with id",id);
    getuserid({userrollno:595});
}

function getuserid(rollno,getusersub){
    console.log("getting user rollno",rollno);
    getusersub({subject:"maths"});
}

function getusersub(subject){
    console.log("getting user subject",subject);
}

getuserdetails(1,function(userroll){
     getuserid(userroll,function(subject){
        getusersub(subject);
     })
})