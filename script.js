let boxes = document.querySelectorAll(".box");
let rest = document.getElementById("rest");
let msg = document.getElementById("msg");
let newbtn = document.getElementById("newbtn");
let turnO = true;
var count = 0;
let winpat = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkwin();
  });
});
const disabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enables = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const checkwin = () => {
  for (let pattern of winpat) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pso2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;
    if (pos1val != "" && pso2val != "" && pos3val != "") {
      if (pos1val === pso2val && pso2val === pos3val) {
        msg.innerHTML = `Congratulations!! Winner is ${pos1val}`;
        disabled();
      }
    }
  }

  if (count == 9) {
    msg.innerHTML = `DRAW NOBODY WINS!!!!!`;
  }
};

const resetgame = () => {
  enables();
  turnO = true;
  msg.innerHTML = "";
  count = 0;
};

rest.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);
