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
    const sectionCards = document.querySelector("#sectionCards");
    let html= "";
     cards.forEach((card)=>{
        const image = card.links.mission_patch;
        const { mission_name,  launch_year, launch_success  } = card;
        const video = card.links.youtube_id;
        const link_video = `https://www.youtube.com/${video}`;
        const {rocket_name,rocket_type} = card.rocket;
        html+=
        `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
        sectionCards.innerHTML = html;
    });
}
