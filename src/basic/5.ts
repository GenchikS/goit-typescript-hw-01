
enum DayOfWeek {
    Monday = `true`,
    Tuesday = `true`,
    Wednesday = `true`,
    Thursday = `true`,
    Friday = `true`,
    Saturday = `false`,
    Sunday = `false`
  }
  
  let dayWeek: boolean;

  const isWeekend = (day:DayOfWeek): boolean => {
    
    if (day === `true` ){
        dayWeek = true
    }
    else if (day === `false`) {
        dayWeek = false
    }  
    return dayWeek
  }

//   console.log(isWeekend(DayOfWeek.Sunday))
//   console.log(isWeekend(DayOfWeek.Wednesday))
