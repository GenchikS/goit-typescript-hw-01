type userName = {
  name:string
}

type userAge = {
  age: number
}

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

// const merged = merge< userName, userAge>({ name: `Nick` }, { age: 45 });
  //  as { name: string, age: number }  //  можна використати такий варіант запису, але тоді видалити <T, U>
  // console.log(`merged`, merged)

