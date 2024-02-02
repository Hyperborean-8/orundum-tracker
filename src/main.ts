const pullsCountLabel = document.getElementById("pullsCountLabel") as HTMLElement;

const orundumInput = document.getElementById("orundumInput") as HTMLInputElement;
const permitInput = document.getElementById("permitInput") as HTMLInputElement;
const originiumInput = document.getElementById("originiumInput") as HTMLInputElement;

let orundumNum: number = 0;
let permitNum: number = 0;
let originiumNum: number = 0;

let pullsNum: number = 0;

function stepUp(target: HTMLInputElement | null, amount: Number) {

}

function stepDown(target: HTMLInputElement | null, amount: Number) {

}

function handleInputChange() {
  console.log(originiumInput);

  console.log(originiumInput.value);

  orundumNum = parseInt(originiumInput.value);
  permitNum = parseInt(permitInput.value);
  originiumNum = parseInt(originiumInput.value);

  console.log(orundumNum);
  console.log(permitNum);
  console.log(originiumNum);

  console.log("something happened");

  pullsNum = Math.floor((orundumNum + originiumNum * 180) / 600) + permitNum;

  console.log(pullsNum);
}
