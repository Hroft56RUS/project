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

let stateRash1 = prompt("Введите обязательную статью расходов в этом месяце",""),
    stateAll1 = prompt("Во сколько обойдется?",""),
    stateRash2 = prompt("Введите обязательную статью расходов в этом месяце",""),
    stateAll2 = prompt("Во сколько обойдется?","");

appData.expenses.stateRash1 = stateAll1;
appData.expenses.stateRash2 = stateAll2;

alert(appData.budget/30);


