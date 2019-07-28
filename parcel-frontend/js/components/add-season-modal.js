export default function AddSeasonModal(){
    return `
    <section class='add-season'>
        <input class='add-season_name' type='text' placeholder='Add season name...'>
        <input class='add-season-productionCompany' type='text' placeholder='Add production company...'>
        <input class='add-season-imageurl' type='text' placeholder='Add season URL...'>
        <input class='add-album-description' type='text' placeholder='Add season description...'>
        <button class='add-season_submit'>Submit</button>
    </section>
    `
}