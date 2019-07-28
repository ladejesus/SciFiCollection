export default function singleSeason(season){
    return `

    <img src='${season.imageURL}' id='main-image' alt='season image'>
    <div id='name-info'><h3>${season.name}</h3>
        <div id='button-box'>
            <button class='edit-season'>Edit season</button>
            <button class='delete-season'>Delete season</button>
                <section class='edit-box'>
                    <input class='season_id' type='hidden' value='${season.seasonId}'>
                    <input class='edit-season_name' type='text' value='${season.name}'>
                    <input class='edit-season_productioncompany' type='text' value='${season.productionCompany}'>
                    <textarea class='edit-season_description'>${season.description}</textarea>
                    <input class='show_Id' type='hidden' value='${season.showId}'>
                    <button class='edit-Season_submit'>Submit</button>
                </section>
        </div>
    <p>${season.description}</p>

    </div>
    <div id='main-children'>
    <button class='add-show-modal'>Add Show</button>
    <ol>
        ${season.episodes.map(episode => {
            return `
                <li>
                    <h3>${episode.name}</h3>
                    <input class='episode_id' type='hidden' value='${episode.episodeId}'>
                    <input class='episode_name' type='hidden' value='${episode.name}'>
                    <input class='season_Id' type='hidden' value='${episode.seasonId}'
                    
                </li>
    `;
        })
        .join("")}
    </ol>
    </div>
    `
}