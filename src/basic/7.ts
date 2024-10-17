// interface user {
//     title: string,
//     likes: number,
//     accounts: string[],
//     status: string,
//     details?: {}
// }

interface user {
    [key:string]: string | number |{} | [],
}

const page1:user = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
  }
  
  const page2:user = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }

//   console.log(`page1`, page1)
//   console.log(`page2`, page2)
