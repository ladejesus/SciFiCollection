export default function EpisodeSidebar(episodes){
    return `
    <h3>Select Episode</h3>
    <ul>
    
    ${episodes.map(episode => {
        return `
            <li>
                <h3 class='episode_name'>${episode.name}</h3>
                <input class='episode_id' type='hidden' value='${episode.episodeId}'>
            </li>
        `;
    })
    .join("")}
        </ul>
    `
}