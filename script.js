//Compute function when clicking "Compute Interest" button
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

//Check to see if number input is positive (and/or blank)
if (principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }

    //Compute interest rate
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //Show the computed data
    document.getElementById("result").innerHTML="If you deposit <strong>"+principal+"</strong>,\<br\>at an interest rate of <strong>"+rate+"</strong>\<br\>You will receive an amount of <strong>"+interest+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>"
}

//Update rate when changing slider value
function updateRate() 
    {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
    }
