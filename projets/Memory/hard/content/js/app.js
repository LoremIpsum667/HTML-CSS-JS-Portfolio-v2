
// "content/card1.png",
// "content/card2.png",
// "content/card3.png",
// "content/card4.png",
// "content/card5.png",
// "content/card6.png",
// "content/card7.png",
// "content/card8.png"

document.addEventListener("DOMContentLoaded", () => {
    //option des cartes
    const cardArray = [
        {
            name: "card1",
            img: "../content/img/card1.png"
        },
        {
            name: "card2",
            img: "../content/img/card2.png"
        },
        {
            name: "card3",
            img: "../content/img/card3.png"
        },
        {
            name: "card4",
            img: "../content/img/card4.png"
        },
        {
            name: "card5",
            img: "../content/img/card5.png"
        },
        {
            name: "card6",
            img: "../content/img/card6.png"
        },
        {
            name: "card7",
            img: "../content/img/card7.png"
        },
        {
            name: "card8",
            img: "../content/img/card8.png"
        },
        {
            name: "card1",
            img: "../content/img/card1.png"
        },
        {
            name: "card2",
            img: "../content/img/card2.png"
        },
        {
            name: "card3",
            img: "../content/img/card3.png"
        },
        {
            name: "card4",
            img: "../content/img/card4.png"
        },
        {
            name: "card5",
            img: "../content/img/card5.png"
        },
        {
            name: "card6",
            img: "../content/img/card6.png"
        },
        {
            name: "card7",
            img: "../content/img/card7.png"
        },
        {
            name: "card8",
            img: "../content/img/card8.png"
        },
        {
            name: "card1",
            img: "../content/img/card1.png"
        },
        {
            name: "card2",
            img: "../content/img/card2.png"
        },
        {
            name: "card3",
            img: "../content/img/card3.png"
        },
        {
            name: "card4",
            img: "../content/img/card4.png"
        },
        {
            name: "card5",
            img: "../content/img/card5.png"
        },
        {
            name: "card6",
            img: "../content/img/card6.png"
        },
        {
            name: "card7",
            img: "../content/img/card7.png"
        },
        {
            name: "card8",
            img: "../content/img/card8.png"
        },
        {
            name: "card1",
            img: "../content/img/card1.png"
        },
        {
            name: "card2",
            img: "../content/img/card2.png"
        },
        {
            name: "card3",
            img: "../content/img/card3.png"
        },
        {
            name: "card4",
            img: "../content/img/card4.png"
        },
        {
            name: "card5",
            img: "../content/img/card5.png"
        },
        {
            name: "card6",
            img: "../content/img/card6.png"
        },
        {
            name: "card7",
            img: "../content/img/card7.png"
        },
        {
            name: "card8",
            img: "../content/img/card8.png"
        },
        {
            name: "card1",
            img: "../content/img/card1.png"
        },
        {
            name: "card2",
            img: "../content/img/card2.png"
        },
        {
            name: "card3",
            img: "../content/img/card3.png"
        },
        {
            name: "card4",
            img: "../content/img/card4.png"
        },
        {
            name: "card5",
            img: "../content/img/card5.png"
        },
        {
            name: "card6",
            img: "../content/img/card6.png"
        },
        {
            name: "card7",
            img: "../content/img/card7.png"
        },
        {
            name: "card8",
            img: "../content/img/card8.png"
        },
        {
            name: "card1",
            img: "../content/img/card1.png"
        },
        {
            name: "card2",
            img: "../content/img/card2.png"
        },
        {
            name: "card3",
            img: "../content/img/card3.png"
        },
        {
            name: "card4",
            img: "../content/img/card4.png"
        },
        {
            name: "card5",
            img: "../content/img/card5.png"
        },
        {
            name: "card6",
            img: "../content/img/card6.png"
        },
        {
            name: "card7",
            img: "../content/img/card7.png"
        },
        {
            name: "card8",
            img: "../content/img/card8.png"
        },
        {
            name: "card1",
            img: "../content/img/card1.png"
        },
        {
            name: "card2",
            img: "../content/img/card2.png"
        },
        {
            name: "card3",
            img: "../content/img/card3.png"
        },
        {
            name: "card4",
            img: "../content/img/card4.png"
        },
        {
            name: "card5",
            img: "../content/img/card5.png"
        },
        {
            name: "card6",
            img: "../content/img/card6.png"
        },
        {
            name: "card7",
            img: "../content/img/card7.png"
        },
        {
            name: "card8",
            img: "../content/img/card8.png"
        },
        {
            name: "card1",
            img: "../content/img/card1.png"
        },
        {
            name: "card2",
            img: "../content/img/card2.png"
        },
        {
            name: "card3",
            img: "../content/img/card3.png"
        },
        {
            name: "card4",
            img: "../content/img/card4.png"
        },
        {
            name: "card5",
            img: "../content/img/card5.png"
        },
        {
            name: "card6",
            img: "../content/img/card6.png"
        },
        {
            name: "card7",
            img: "../content/img/card7.png"
        },
        {
            name: "card8",
            img: "../content/img/card8.png"
        }
    ]

    //random
    cardArray.sort(() => 0.5 - Math.random())

    //game board

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChose = []
    let cardsChoseId = []
    let cardsWon = []
    let counterStarted = false
    //board creation
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("img");
            card.classList.add('bismillah')
            card.setAttribute("src", "../content/img/back.png")
            card.setAttribute("dare-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)

        }
    }

    //check paires
    function checkForMatch() {
        let cards = document.querySelectorAll("img")
        const optionOneId = cardsChoseId[0]
        const optionTwoId = cardsChoseId[1]
        if (cardsChose[0] === cardsChose[1]) {
            document.querySelector("#match").innerHTML = "You found a couple!"
            cards[optionOneId].setAttribute("src", "../content/img/white.png")
            cards[optionTwoId].setAttribute("src", "../content/img/white.png")
            cardsWon.push(cardsChose)
        } else {
            cards[optionOneId].setAttribute("src", "../content/img/back.png")
            cards[optionTwoId].setAttribute("src", "../content/img/back.png")
            document.querySelector("#tryAgain").innerHTML = "Try Again"
            // alert("Try again, Looser")

        }
        cardsChose = []
        cardsChoseId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            document.querySelector("#win").innerHTML = "You Win!"
        }
    }

    //flip cards
    function flipCard() {
        if(counterStarted == false){
            startCounter()
        } 
        document.querySelector("#tryAgain").innerHTML = ""
        document.querySelector("#match").innerHTML = ""
        let cardId = this.getAttribute("dare-id")
        cardsChose.push(cardArray[cardId].name)
        cardsChoseId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChose.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
    //timer
    function startCounter (){
        counterStarted = true
        let count = 60;
        let interval = setInterval(function () {
            document.querySelector('#count').innerHTML = "Timer : "
            document.querySelector('#count').innerHTML += count -1
            document.querySelector('#count').innerHTML += " seconds"
            console.log(count, "hey");
            count--;
            if (count === -1) {
                clearInterval(interval);
                window.location.reload();
                alert("You're out of time!");
            }
        }, 1000);
    }
})
