

function merge<T, U> (objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const merged  = merge({name: `Nick`},{age:45})
  console.log(`merged`, merged.name)

