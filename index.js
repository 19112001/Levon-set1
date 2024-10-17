
function findMax() {
    const input = document.getElementById("array").value;
    const arr = input.split(",").map(Number); 
    const max = Math.max(...arr); 
    document.getElementById("maxResult").innerHTML = "Maximum element is: " + max;
}


function findTwoSum() {
    const inputArray = document.getElementById("twoSumArray").value;
    const arr = inputArray.split(",").map(Number); 
    const target = Number(document.getElementById("target").value); 
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                document.getElementById("twoSumResult").innerHTML = `Indices: ${i}, ${j}`;
                return;
            }
        }
    }
    document.getElementById("twoSumResult").innerHTML = "No two numbers add up to the target.";
}
