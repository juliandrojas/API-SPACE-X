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
        const {rocket_name, rocket_type } = card.rocket;
        html+=
        `
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mission_name}</h5>
                <p class="card-text"></p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Ver detalles 
                </button>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">SPACE X</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <iframe class="getvideos" width="560" height="315" src="${link_video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <table class="table">
                    Space Exploration Technologies Corp
                    <table class="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">Cohete</th>
                            <th scope="col">${rocket_name}</th>
                        </tr>
                        <tr>
                            <th scope="col">Cohete</th>
                            <th scope="col">${rocket_type}</th>
                        </tr>
                        <tr>
                            <th scope="col">Éxito lanzamiento</th>
                            <th scope="col">${launch_success}</th>
                        </tr>

                        </thead>
                    </table>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        `;
        sectionCards.innerHTML = html;
    });
}
