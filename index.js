let btnref = document.querySelectorAll(".btn");
let popupref = document.querySelector(".popup");
let newgamebtn = document.getElementById("new-game");
let restrtbtn = document.getElementById("restart");
let msgbtn = document.getElementById("msg");

let winningpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [6, 7, 8],
  [3, 4, 5],
  [2, 5, 8],
  [2, 4, 6],
  [1, 4, 7],
];
newgamebtn.addEventListener("click", () => {
  xturn = true;
  count=0;
  enablebtn();
  popupref.classList.add("hide");
  msgbtn.innerText="";

});
restrtbtn.addEventListener("click", () => {
  count=0;
  enablebtn();
  xturn = true;
  msgbtn.innerText="";

  
});
const enablebtn = () => {
  for (let box of btnref) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disablebtn = () => {
  for (let box of btnref) {
    box.disabled = true;
  }
};

let xturn = true;
let count = 0;

btnref.forEach((element) => {
  element.addEventListener("click", () => {
    if (xturn) {
      xturn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      xturn = true;
      element.innerText = "O";
      element.disabled = true;
    }
    count += 1;
    
    checkwinner();
    
  });
});
const checkwinner = () => {
  for (let pattern of winningpattern) {
    let [val1, val2, val3] = [
      btnref[pattern[0]].innerText,
      btnref[pattern[1]].innerText,
      btnref[pattern[2]].innerText,
    ];

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        console.log("winner");
        showwinner(val1);
        return;
      }
    }
  }
  if (count === 9) {
    showdraw();
  }
};

const showwinner = (winner) => {
  disablebtn();
  msgbtn.innerText = `' ${winner} ' wins 🎉`;
  popupref.classList.remove("hide");

};
const showdraw = () => {
  msgbtn.innerText = `It is a draw 😎`;
  disablebtn();
  popupref.classList.remove("hide");

  }

