export default function SeasonSidebar(seasons){
    return `
    <h3>Select Season</h3>
    <ul>
    
    ${seasons.map(season => {
        return `
            <li>
                <h3 class='season_name'>${season.name}</h3>
                <input class='season_id' type='hidden' value='${season.seasonId}'>
            </li>
        `;
    })
    .join("")}
        </ul>
        
    `
}