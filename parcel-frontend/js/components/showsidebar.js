export default function ShowSidebar(shows){
    return `
    <h3>Select Show</h3>
    <ul>
    
    ${artists.map(show => {
        return `
            <li>
                <h3 class='artist_name'>${show.name}</h3>
                <input class='artist_id' type='hidden' value='${show.showId}'>
            </li>
        `;
    })
    .join("")}
        </ul>
        <button class='add-artist-modal'>Add Show</button>
    `
}