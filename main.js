const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

const iAmThirsty = (num) => {

    if (num >= 21 && num < 65){
       return 'Have a beer. ';
    }
    else if (num < 21){
        return 'Drink some water. ';
    }
    else if(num > 65) {
       return 'Take a nap. ';
    }
};

printToDom('thirsty', iAmThirsty(55));
printToDom('thirsty', iAmThirsty(11));
printToDom('thirsty', iAmThirsty(67));

