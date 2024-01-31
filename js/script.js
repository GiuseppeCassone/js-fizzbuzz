// GRIGLIA DA 1 A 100
const gridElement = document.querySelector("#grid");

for(let i = 1; i <= 100; i++){

    const newElement = document.createElement("div");
    newElement.className = "square";
    newElement.innerHTML = i;

    gridElement.append(newElement);
    
    if(i % 3 == 0) {
        
        newElement.className = "square fizz";
        newElement.innerHTML = `Fizz`;

    } else if (i % 5 == 0) {

        newElement.className = "square buzz";
        newElement.innerHTML = `Buzz`;
    }

    if(i % 15 == 0){
        
        newElement.className = "square fizzbuzz";
        newElement.innerHTML = `Fizzbuzz`;
    }
    

}