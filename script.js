'use strict';

let money = prompt('Ваш бюджет а месяц?',""),
    time = prompt('Введите дату в формате YYYY-MM-DD',"");

let appData = { 
        budget: money, 
        timeData: time, 
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?","");
    
    if ( (typeof(a))==='sring' && (typeof(a) != null) && (typeof(b) != null) && (a != "") && (b != "") 
         && (a.length < 50) ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        continue;
    }
}

//let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",""),
//         b = prompt("Во сколько обойдется?","");
    
//     if ( (typeof(a))==='sring' && (typeof(a) != null) && (typeof(b) != null) && (a != "") && (b != "") 
//          && (a.length < 50) ) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
//     i++;
// }

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",""),
//         b = prompt("Во сколько обойдется?","");
        
//     if ( (typeof(a))==='sring' && (typeof(a) != null) && (typeof(b) != null) && (a != "") && (b != "") 
//             && (a.length < 50) ) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
//     i++;
// } while (i < 2);


alert(appData.budget/30);


