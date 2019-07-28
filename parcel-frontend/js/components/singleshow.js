export default function singleShow(show){
    return `
    <img src='${show.imageURL}' id='main-image' alt='Show image'></img>
    
    <div id='name-info'><h3>${show.name}</h3>
    <div id='button-box'>
        <button class='edit-show'>Edit Show</button>
        <button class='delete-show'>Delete Show</button>
        <section class='edit-box'>
            <input class='show_id' type='hidden' value='${show.showId}'>
            <input class='edit-show_imageUrl' type='hidden' value='${show.imageURL}'>
            <input class='edit-show_name' type='text' value='${show.name}'>
            <input class='edit-show_actor' type='text' value='${show.actor}'>
            <textarea class='edit-show_description'>${show.description}</textarea>
            <button class='edit-show_submit'>Submit</button>
        </section>
    </div>
    <p>${show.description}</p>
    </div>
    <div id='main-children'>
    <h3>Seasons</h3>

    <button class='add-season-modal'>Add Season</button>
    <ul id='season-list'>
        ${show.seasons.map(season => {
            return `
                <li>
                    <div class='child-image'>
                    <img src='${season.imageURL}'></img>
                    </div>
                    <h4 class='target'>${season.name}</h4>
                    <input class='season_id' type='hidden' value='${season.seasonId}'>
                    <input class='season_name' type='hidden' value='${season.name}'>
                    <input class='season_description' type='hidden' value='${season.description}'>
                    <input class='show_Id' type='hidden' value='${season.showId}'>
                </li>
    `;
        })
        .join("")}
    </ul>
    </div>
    `
}