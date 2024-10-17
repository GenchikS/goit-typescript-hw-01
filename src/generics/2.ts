type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }

type top = Pick<AllType, `name` | `color`>
type bottom = Pick<AllType, `position` | `weight`>

// let test:AllType = {
//   name: "Test",
//   color: "red",
//   position: 333,
//   weight: 44,
// };


function compare(top: top, bottom: bottom):Object{
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
