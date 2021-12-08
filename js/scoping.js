var global = 'This is my variable'

const functionOne = () => {
    let innerVariable = 'This can only be accessed in function one'
    console.log(global);
    console.log(innerVariable);
}

const functionTwo = () => {
    console.log(global);
    console.log(innerVariable);
}

functionOne();
functionTwo();