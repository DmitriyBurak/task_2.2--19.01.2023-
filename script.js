
// task 1
    let a = 10;
    alert(`Переменная задания 1: ${a}`);
    a = 20;
    alert(`Результат выполнения задания 1: ${a}`);

// task 2
    let bornOfIphone;
    let thisYear = 2023;
    let iPhonesAge = 16; //almost
    bornOfIphone = thisYear - iPhonesAge;
    alert(
        `Результат выполнения задания 2: Стив Джобс представил первый iPhone в ${bornOfIphone} году`
    );
    
// task 3
    const creator = "Brandan Eich";
    alert(
        `Результат выполнения задания 3: Кто основатель языка JS ?? Конечно же  ${creator} !!!`
    );
    
// task 4
    let firstNumber = 10;
    let secondNumber = 2;
    let sum = firstNumber + secondNumber;
    let sub = firstNumber - secondNumber;
    let mult = firstNumber * secondNumber;
    let div = firstNumber / secondNumber;
    alert(`Результат выполнения задания 4.1: ${sum}`);
    alert(`Результат выполнения задания 4.2: ${sub}`);
    alert(`Результат выполнения задания 4.3: ${mult}`);
    alert(`Результат выполнения задания 4.4: ${div}`);
    
// task 5
    let num = 2;
    let exp = 5;
    let result = num ** exp;
    alert(`Результат выполнения задания 5: ${result}`);
    
// task 6
    let numA = 9;
    let numB = 2;
    let rem = numA % numB;
    alert(`Результат выполнения задания 6: ${rem}`);
    
// task 7
    let numb = 1;
    numb += 5;
    numb -= 3;
    numb *= 7;
    numb /= 3;
    numb++;
    numb--;
      alert(`Результат выполнения задания 7: итоооогоооо ${numb}`);
      
// task 8
    let age = Number(prompt("Ну исколько Вам лет, ну ?"));
    alert(`Результат выполнения задания 8: ${age}`);
    
// task 9
    let user = {
    name: 'Чебурашка',
    age: 666,
    isAdmin: true,
    }

    // task 9.1
    user['city of residence'] = 'Istambul';
    //   or   user.cityOfResidence = 'Istambul';

    // task 9.2
    user.age = 999;

    // task 9.3
    delete user['city of residence'];

    // task 9.4
    let info = prompt('Какую информацию хотите узнать о пользователе?');
    alert(user[info]); 
    
// task 10
    let yourName = String(prompt("Ну и как тя звать-то ?"));
    alert(`Результат выполнения задания 10: О, так ты у нас ${yourName}`);
