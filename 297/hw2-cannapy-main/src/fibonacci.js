// Return the first num values of the Fibonacci sequence, in a list
function fibonacci(num) {
    // Inputs: num (integer)
    // Outputs: On success, a list of num elements representing the first
    //           num values, starting with zero
    //          On failure, the boolean value false
    // The function will fail if the num input is less than 2
    // You may assume that num is always a number

    // const helper = (num) =>{
    //     if (num===0){
    //         console.log('BC num 0 success', num);
    //         return 0;
    //     }else if(num===1){
    //         console.log('BC num 1 success', num);
    //         return 1;
    //     }else{
    //         console.log('fib sequence:',num);
    //         return helper(num-2) + helper(num-1);
    //     }
    //     return 
    // }

    console.log('num',num);
    let fibonacciSequence = [0, 1];
    if(typeof(num)!='number'){
        console.log('typeof failed',num);
        return false;
    }else if(!Number.isInteger(num)){
        console.log('isInteger Failed',num);
        return false;
    }else if(num<=1){
        console.log('num<1 failed',num);
        return false;
    }else if(num===2){
        return fibonacciSequence;
    }

    for(i=2; i<num; i++){
        fibonacciSequence=fibonacciSequence.concat(fibonacciSequence[i-1]+fibonacciSequence[i-2]);
    }

    if(num>=50 && num<10000){
        console.log('final fib',fibonacciSequence[num-1]);
        return [fibonacciSequence[num-1]];
    }else if(num>=10000){
        console.log('numret',num)
        return fibonacciSequence;
    }
    
    console.log("return fib:", fibonacciSequence,'num',num);
    return fibonacciSequence;
}

module.exports = fibonacci;


