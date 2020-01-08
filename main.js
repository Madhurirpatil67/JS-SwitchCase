// switch case compares value as well as data type also

let month=7; //number
let msg=undefined;

switch(month)
{
 case 1:
        msg="Jan";
        break;
 case 2:
        msg="Feb";
        break;   
 case 3:  
        msg="March";
        break; 
 case 4:
        msg="April";
        break;
 case 5:
        msg="May";
        break;   
 case 6:  
        msg="Jun";
        break; 
 case 7:
        msg="July";
        break;
 case 8:
        msg="Aug";
        break;
 case 9:
        msg="Sep";
        break;
 case 10:
        msg="Oct";
        break;
 case 11:
        msg="Nov";
        break;
 case 12:
        msg="Dec";
        break;  
  default:
        msg="Enter Valid Input";            
}
console.log(msg);