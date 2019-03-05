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

console.log(1 === '1');
// console.log(1 == '1');
console.log(1 !== '2');


const catName = () => {
    return 'killer';
}

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
};

console.log(bucketOCats.cat2);

console.log(bucketOCats['cat2']);

console.log(bucketOCats.cat4.water);

console.log(bucketOCats['cat4']['water']);


let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);


let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

  console.log("Our company's lawyer is " + employee.name);
  console.log("Jeff was hired on " + employee['hire_date']);
  employee.vacation_days = 20;

  let eom = "employee_of_the_month";
  employee[eom] = 'false';
  console.log(employee);