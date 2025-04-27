//Constructor for Fan Club member object 
function Member(first ,last, email) {
    this.firstName = first;
    this.lastName = last;
    this.emailAddress = email;
}

//Add Fan Club member object to array of member objects
function addToMemberList(member) {
    members.push(member);
}

//Display Fan Club member info
function displayMemberInfo(member){
    console.log(member.firstName, member.lastName, member.emailAddress);
}

//Display list of Fan Club Members
function displayMemberList(){
    for (m in members) {
    displayMemberInfo(members[m]);
    }
}

const members = [];

//Sample data for testing

//const member1 = new Member("Bronson", "McLean", "bronson.mclean@email.com");
//addToMemberList(member1);
//const member2 = new Member("John", "Doe", "johndoe@email.com");
//addToMemberList(member2);
//const member3 = new Member("Jane", "Doe", "janedoe@email.com");
//addToMemberList(member3);
//displayMemberInfo(member3);
//displayMemberList();



