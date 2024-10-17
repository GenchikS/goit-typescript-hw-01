function showMessage(message:string):string {
    console.log(message);
    return message
  }
  
  function calc(num1:number, num2:number):number {
    return num1 + num2;
  }
  
  function customError(error:string):never {
    throw new Error('Error');
  }