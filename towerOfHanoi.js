const towerA = document.getElementById("A").addEventListener("click", selectTower)
const towerB = document.getElementById("B").addEventListener("click", selectTower)
const towerC = document.getElementById("C").addEventListener("click", selectTower)

let selectedDiscMove = true
let selectedDisc;

function selectTower(evt) {
    const selectedTower = evt.currentTarget
    console.log(selectedDiscMove)

    let hold = document.getElementById("hand");
    if (selectedDiscMove === true) {
        // pickup
        selectedDisc = selectedTower.lastElementChild
        hold.appendChild(selectedDisc)

        // drop 

        selectedDiscMove = false
    } else if (selectedDiscMove === false) {


        let holdDisc = hold.lastElementChild
        console.log(selectedDisc.clientWidth)
        if (selectedTower.lastElementChild === null) {
            selectedTower.appendChild(holdDisc)
            selectedDiscMove = true

        }
        else if (holdDisc.clientWidth < selectedTower.lastElementChild.clientWidth) {
            selectedTower.appendChild(holdDisc)
            selectedDiscMove = true
        }
        else { selectedDiscMove = false }

    }

    if (document.getElementById('C').childElementCount == 4) {
        { alert("Winner Winner Chicken Dinner! ") }
    }
}
































// const towerA = document.getElementById("#A").addEventListener("click", moveDisc)
// const towerB = document.getElementById("#B").addEventListener("click", moveDisc)
// const towerC = document.getElementById("#C").addEventListener("click", moveDisc)

// // const towerA = document.querySelector("#A")
// // const towerB = document.querySelector("#B")
// // const towerC = document.querySelector("#C")


// let choose = true
// let chosen;

// function moveDisc(click) {
//     // const selectedTower = ev.currentTarget
//     let currentClick = click.currentTarget

//     if (choose === true) {
//         chosen = currentClick.lastElementChild


//     document.getElementById('holding').appendChild(chosen);
//         chosen = false

//     } else if(choose === false) {
//     if (!currentClick.lastElementChild){
//     currentClick.appendChild(chosen);
//     choose = true
//     } 
//     else if(Number(chosen.id) > Number(currentClick.lastElementChild.id)) {
//         currentClick.appendChild(chosen);
//         choose = true;
//     }
// }
// if(document.getElementById('#C').childElementCount === 4){
//     {alert("Winner Winner Chicken Dinner! ")}

//     }
// }

