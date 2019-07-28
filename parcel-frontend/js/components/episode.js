export default function singleEpisode(episode){
    return `

    <div id='name-info'><h3>${episode.name}</h3>
        <div id='button-box'>
            <button class='edit-episode'>Edit Episode</button>
            <button class='delete-episode'>Delete Episode</button>
                <section class='edit-box'>
                    <input class='episode_id' type='hidden' value='${episode.episodeId}'>
                    <input class='edit-episode_name' type='text' value='${episode.name}'>
                    <input class='season_Id' type='hidden' value='${episode.seasonId}'>
                    <button class='edit-episode_submit'>Submit</button>
                </section>
        </div>
    
    </div>
       
    `
}
