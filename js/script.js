var dateOfBirth = prompt ('please enter birth date');
var monthOfBirth = prompt ('please enter birth month');
var yearOfBirth = prompt ('please enter birth year');
var genderAtBirth = prompt ('please enter gender assigned at birth')
alert ('My Birthday is ' + [dateOfBirth] + '/' + [monthOfBirth] + '/' + [yearOfBirth]);

var century = parseInt(yearOfBirth[0]+yearOfBirth[1]);
var year = parseInt(yearOfBirth[2]+yearOfBirth[3]);
var month = parseInt(monthOfBirth);
var date = parseInt(dateOfBirth);
alert([century] + [year]); 

function findWeekDay(d){
    dayOfBirth = ( ( (([century]/4) -2)*([century]-1)) + ((5*[year]/4) ) + ((26*([month]+1)/10)) + [date] )%7;
    return(dayOfBirth);
 }
 alert(findWeekDay());
 var nDay = Math.trunc(dayOfBirth);
 alert(nDay)
 if (nDay>=3) {
     nDayBorn= nDay -2;
 }
 else {
     nDayBorn=nDay;
 };
 
 var weekDay = ["Monday" , "Tusday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
 alert(weekDay[nDayBorn]);

 var maleAkanName = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
 var femaleAkanName = ["Adwaa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua"];
 var genderNonConforming = ["Kwadwo-Adwaa", "Kwabena-Abenaa", "Kwaku-Akua", "Yaw-Yaa", "Kofi-Afua", "Kwame-Ama", "Kwasi-Akosua"];

 if (genderAtBirth==='male') {
    alert('Your Akan name is ' + (maleAkanName[nDayBorn]) + '!');
}
else if (genderAtBirth==='gnc') {
    alert('Your Akan name is ' + (genderNonConforming[nDayBorn]) + '!');
 }
else {
    alert('Your Akan name is ' + (femaleAkanName[nDayBorn]) + '!');
}