/* 

given a string consisting of only two types of characters '(' and ')' balance 
the parentheses by inserting either a '( or ')' as many times as necessary. 
Determine the minimum number of characters that must be inserted. 

Return the minimum number of insertions required to balance the parentheses as an int
*/ 

function getMins(str){
    let strArr = str.split(''); 
    let balance = 0; 
    let minChar = 0; 
    for (let i = 0; i < strArr.length; i++){
        if (strArr[i] == '('){
            balance += 1
        } else {
            balance -=1
        }
        if (balance == -1){
            minChar += 1
            balance += 1
        }
    }
    return minChar + balance; 

}




//TESTS 

console.log(getMins('(()))')) // ==> 1 
console.log(getMins('()))')) // ==>  2 
console.log(getMins('()()')) // ==> 0 
console.log(getMins(')))()()()())())())))))())))))))())()))()()()))))))')) // ==> 
console.log(getMins('()))))))))))))))))))))))()()))()))))))))()))))))()))()))))(()))))))))))))()))))))(()))))))))()()))))))))))))()))))(())()))))))(()))))()))))))()))()())))())))))))))))()))())(()()())()()())))))()))))())()))()))))))))))))))()())))()))))()))))))()))())()))())))(()))()))))))))())))())))(())()))))()((()))))))((((()())())())(())))))())())))))))())))))()(()))))()))))())))))()())())()))()))))))))()))))))))))()))))())))))(((()))))()))((())))())))))))())))()()())())))))())))())())))))(())())))))))())))()()))))))))))))(())())())))((()))))))(())))()())))()))))(())))(())))))))))))))(())))(())()))))(()))())())))))))()())(()(())())))))))))))))))))))))))((()())))())))())))((()())))()))())()))))())()())))))))))))(()))))))))))))))()))))))()))))))))))))))))(()(()))(()))()))))))()))()()))))))))))()))())()))))())))()()()))()))))(())))))))))))))()()))))(())))()))))))()))()())()))())()())())))()()(()())))))()())))))))())))())))(())))())))))))()))))))))()((()(())))))))))(())))())))())))))))))()())))()))))))))('))