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
    //Loop through the cards
    cards.forEach(card => {
        const image = card.liks.mission_patch;
        //Destructuring the object of the JSON
        const { mission_name, launch_year, launch_success } = card;
        //Const of the videos of the JSON
        const link_video = `https://www.youtube.com/${video}`;
        //Const of the rocket data of the JSON
        const { rocket_name, rocket_type } = card.rocket;
        //Using the variable to inject the data of the JSON in the page
        html+=
        `
        <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="${mission_name}">
        <div class="card-body">
            <h5 class="card-title">${mission_name}</h5>
            <p class="card-text">${launch_year}</p>
            <section class="modalcar">
                <div class="titulo" >
                    <button type="button" class="btn btn-primary boton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        ver Detalles
                    </button>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">SPACE X</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <h2>Space Exploration Tecnologies Corp</h2>
                                </div>
                                <iframe class="getvideos" width="560" height="315" src="${linkvideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <table class="table table-dark" id="deletePedidos">
                                    <thead>
                                        <tr>
                                            <th>Cohete</th>
                                            <th>Tipo de Cohete</th>
                                            <th>Exito de Lanzamiento</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>${rocket_name}</td>
                                        <td>${rocket_type}</td>
                                        <td>${launch_success}</td>
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    `;
    
    });
}