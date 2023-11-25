//And operators 
//1
let gender1="male";
let ciy="namakkal";
console.log(gender1=="male" && ciy=="namakkal");

//2

let busname="Redbus";
console.log("www."+busname+".com"+" Book your seats");
let city="salem";
let price=1000;
console.log(city=="salem" && price==1000);

//Or Operator

let degree="Post graduation";
let gender="male";
console.log(degree=="post graduation" || gender=="male")


//conditional And operator

let mark=59;
if(mark==35)
{
    console.log("You are pass");
}
else if(mark>90 && mark<=100)
{
    console.log("A Gread");
}
else if(mark>80 && mark<=90)
{
    console.log("B gread");
}
else if(mark>70 && mark<=80)
{
    console.log("C gread");
}
else if(mark>60 && mark<=70)
{
    console.log("D gread");
}
else if(mark>40 && mark<=60)
{
    console.log("E gread");
}
else
{
    console.log("Faill");
}

// conditional Or operator

let totel_ticket=10;
let totel_seats=2;
if(totel_ticket<=100 || totel_seats<=100)
{
    console.log("Go to your seats");
}
else
{
    console.log("not available");
}

//------------------------------------------------------
let age=10;
if(age>=18)
{
    console.log("You are eligible for Vote");
}
else
{
    console.log("You are Not Eligible For Vote");
}
//-------------------------------------------------------
let person_age=23;
let voterid_number=2323;
if(person_age>=18 && voterid_number==2323)
{
    console.log("You are Eligible For Vote");
}
else
{
    console.log("You are Not Eligible For Vote");
}
//------------------------------------------------------


