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