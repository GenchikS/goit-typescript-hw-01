enum DayOfWeek {
    Monday = `true`,
    Tuesday = `true`,
    Wednesday = `true`,
    Thursday = `true`,
    Friday = `true`,
    Saturday = `false`,
    Sunday = `false`
  }
  
  
  const isWeekend = (day:DayOfWeek) => {
    if (day === `true` ){
        console.log(`It is a day off - ${day}`)
    }
    else if (day === `false`) {
        console.log(`It is a day off - ${day}`)
    }  
    
  }

//   isWeekend(DayOfWeek.Sunday)
//   isWeekend(DayOfWeek.Wednesday)
