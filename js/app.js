document.addEventListener("DOMContentLoaded", () => {
    getCards();
});
async function getCards() {
    //Url API Space X
    const url = `https://api.spacexdata.com/v3/launches`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        //Function paintCards
        paintCards(result);
    } catch (error) {
        console.log(error);
    }
}
function paintCards(cards) {
    //Select the section where the cards are inserted
    const cards = document.querySelector('#cards');
    //Variable to inject the HTML's code of cards
    let html = "";

}