

let loops=0;
let money=0;
while (true) {

let firstArray = [];
let i=0;
let counter1=0;
let counter0=0;
let price="";


    while(firstArray.length<5) {
        firstArray.push(Math.round(Math.random()));
    }


    while(i<firstArray.length) {
        console.log("value in index "+i+" is: "+firstArray[i]);
        if(firstArray[i]==1) {
            counter1++;
        } else {
            counter0++;
        }
        i++;
    }
    console.log("Total of ones: "+counter1+" and total of 0's: "+counter0);
    if(counter1==5) {
        price="JACKPOT!!";
    } else if (counter0==5) {
        price='Congrats! All zeroes!';
    } else if (counter1>3) {
        price='Congratz! You won a smaller price!';
    }
    loops++;
    money+=0.5;
    console.log(price+" on loop "+loops);
    if (price=="JACKPOT!!") {
        console.log("It cost you "+money+"€ to get the Jackpot")
        break;
    }

}
    //average price for jackpot came to 18,50 €
    //next is for tasks 10-11:
console.log('If the numbers are 0-5, it would be a bit harder. Let\'s count the average price from 5 Jackpots:');

    let rounds=0;
    let spending=0;
    let totalPrice=0;

    for(let t=0; t<5; t++)  {

    while (true) {
    let list = [];
    let n=0;
    let ones=0;
    let zeroes=0;
    let reward="";
    
        while(list.length<5) {
            list.push(Math.round(Math.random()*10/2));
        }
    
    
        while(n<list.length) {
            if(list[n]==1) {
                ones++;
            } else {
                zeroes++;
            }
            n++;
        }
        //console.log("Total of ones: "+ones+" and total of 0's: "+zeroes);
        if(ones==5) {
            reward="JACKPOT!!";
        } else if (zeroes==5) {
            reward='Congrats! All zeroes!';
        } else if (ones>3) {
            reward='Congratz! You won a smaller price!';
        }
        rounds++;
        spending+=0.5;
        //console.log(reward+" on round "+rounds);
        if (reward=="JACKPOT!!") {
            //console.log("It cost you "+spending+"€ to get the Jackpot");
            break;
        }
    
    }
    totalPrice+=spending;
}
console.log("Average price for jackpot was "+(totalPrice/5)+" €. So you on average the profit/loss is 30 000 - "+ (totalPrice/5)+" = "+(30000-(totalPrice/5))+" €");
