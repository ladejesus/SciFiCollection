export default function ShowSidebar(shows){
    return `
    <h3>Select Show</h3>
    <ul>
    
    ${shows.map(show => {
        return `
            <li>
                <h3 class='artist_name'>${show.name}</h3>
                <input class='show_id' type='hidden' value='${show.showId}'>
            </li>
        `;
    })
    .join("")}
        </ul>
        <button class='add-show-modal'>Add Show</button>
    `
}