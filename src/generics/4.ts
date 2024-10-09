type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: Partial<User>):User {
    // Оновлення користувача
    const defaultdate:User = {
        name: ``,
        surname: ``,
        email: ``,
        password: ``,
        }

    return {...defaultdate, ...initialValues}
  }
  
//   console.log(
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  })
// )