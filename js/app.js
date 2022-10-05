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
function paintCards(launches) {
    //Select the section in the HTML where are going to insert the cards
    const cards = document.querySelector("#cards");
    //Concatenation variable
    let html = "";
    //Iterate the array of objects of the API
    launches.forEach((launch) => {
        //Destructuring the array of objects of the API
        const { mission_name, launch_year, links: { mission_patch }, flight_number } = launch;
        //Paint the html for the data of the launches
        html += `
        <div class="card">
        <img src="${mission_patch}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h2 class="card-title">${mission_name}</h2>
          <p class="card-text">${launch_year}</p>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary boton" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Ver Video
          </button>
        </div>
      </div>
        `;
        cards.innerHTML = html;
    });
}