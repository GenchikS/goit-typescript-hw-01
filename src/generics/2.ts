type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }


type top = Pick<AllType, `name`| `color`>
type bottom = Pick<AllType, `position`| `weight`>
  
  function compare<T> (topstring:top, bottomnumber:bottom):T | undefined {
    return 
    {
        console.log(topstring.name)
    //   topstring.name,
    //   topstring.color,
    //   bottomnumber.position,
    //   bottomnumber.weight,
    }
  }

  compare(`nick`, 14)