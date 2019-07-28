export default function singleSeason(Season){
    return `

    <img src='${Season.imageURL}' id='main-image' alt='Season image'>
    <div id='name-info'><h3>${Season.name}</h3>
        <div id='button-box'>
            <button class='edit-Season'>Edit Season</button>
            <button class='delete-Season'>Delete Season</button>
                <section class='edit-box'>
                    <input class='Season_id' type='hidden' value='${Season.SeasonId}'>
                    <input class='edit-Season_name' type='text' value='${Season.name}'>
                    <input class='edit-Season_productionCompany' type='text' value='${Season.productionCompany}'>
                    <input class='show_Id' type='hidden' value='${Season.showId}'>
                    <button class='edit-Season_submit'>Submit</button>
                </section>
        </div>
    <p>${Season.description}</p>

    </div>
    <div id='main-children'>
    <button class='add-show-modal'>Add Show</button>
    <ol>
        ${Season.episodes.map(show => {
            return `
                <li>
                    <h3>${episode.name}</h3>
                    <input class='episode_id' type='hidden' value='${episode.episodeId}'>
                    <input class='episode_name' type='hidden' value='${episode.name}'>
                    <input class='season_Id' type='hidden' value='${episode.SeasonId}'
                    
                </li>
    `;
        })
        .join("")}
    </ol>
    </div>
    `
}