import Home from './components/home';
import apiActions from './api/api-actions';

import ShowSidebar from './components/showsidebar';
import SeasonSidebar from './components/seasonsidebar';
import EpisodeSidebar from './components/episodesidebar';


import Show from './components/show'

pageBuild();

function pageBuild(){
    home();
    navShows();
    navSeasons();
    navEpisodes();

    editBoxDisplay();
    
    showModal();
    seasonModal();
    episodeModal();





    
}


function home(){
    const homebutton = document.getElementById('nav__home')
    homebutton.addEventListener('click', function(){
        const maininfo = document.getElementById('main-info')
        maininfo.innerHTML = Home();
    })
}


function navShows(){
    const showsbutton = document.querySelector('#nav__shows')
    console.log(showsbutton)
    artistsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44301/api/show', 
            shows => {
                document.querySelector('#sidebar').innerHTML = ShowSidebar(shows)
            }
            
        )
        document.querySelector('#main-info').innerHTML = "";
    });

    document.getElementById('main-info').addEventListener('click', function() {
        if (event.target.classList.contains('add-show_submit')) {
            const newshow = event.target.parentElement.querySelector('.add-show_name').value;
            const data = {
                id: 0,
                name: newshow

            };
            apiActions.postRequest('https://localhost:44301/api/show', data, shows => {
                document.querySelector('#sidebar').innerHTML = showSidebar(shows);
            })
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('delete-show')){
            console.log('event triggered');
            const removeshow_id = event.target.parentElement.querySelector('.show_id').value;
            console.log(removeshow_id)
            const data = {
                ShowId: removeshow_id,
            };
            console.log(data);
            
            apiActions.deleteRequest('https://localhost:44301/api/show', data, shows => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = "";
                    document.querySelector('#sidebar').innerHTML = ShowSidebar(shows);
                }
            );
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('edit-show')){
            const editbox = event.target.parentElement.querySelector('.edit-box')
            editbox.style.display = 'block'

        }
        
        if (event.target.classList.contains('edit-show_submit')){
            
            const editshow_id = event.target.parentElement.querySelector('.show_id').value;
            const editshow_imageUrl = event.target.parentElement.querySelector('.edit-show_imageUrl').value;
            const editshow_name = event.target.parentElement.querySelector('.edit-show_name').value;
            const editshow_actor = event.target.parentElement.querySelector('.edit-show_actor').value;
            const editshow_description = event.target.parentElement.querySelector('.edit-show_description').value;
            
            const data = {
                ShowId: editshow_id,
                ImageUrl: editshow_imageUrl,
                Name: editshow_name,
                Actor: editshow_actor,
                Description: editshow_description
            };
                       
            apiActions.putRequest('https://localhost:44301/api/show', data, shows => {
                   
                    document.querySelector('#main-info').innerHTML ="";
                    document.querySelector('#sidebar').innerHTML = ShowSidebar(shows);
                }
            );
        }
    });
    
    document.getElementById('sidebar').addEventListener('click', function(){
        if (event.target.classList.contains('show_name')){
            const artistId = event.target.parentElement.querySelector('.show_id').value
            console.log(showId)
            apiActions.getRequest('https://localhost:44301/api/show/'+ showId, 
            show =>{
                document.querySelector('#main-info').innerHTML = SingleShow(show)
            })
        }
    })
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('target')){
            const seasonId = event.target.parentElement.querySelector('.season_id').value
            apiActions.getRequest('https://localhost:44301/api/season/'+ seasonId, 
            season =>{
                    document.querySelector('#main-info').innerHTML = SingleSeason(season)
                    })
        }
    })
}

function showModal(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('add-show-modal')) {
            const modal = document.getElementById('boxbg')
            const modalbox = document.getElementById('box')
            modalbox.innerHTML = AddShowModal()
            modal.style.display = 'block'};
        })
    document.getElementById('main').addEventListener('click', function(){
            if(event.target.classList.contains('add-show_submit')){
            const showname = event.target.parentElement.querySelector('.add-show_name').value;
            const showactor = event.target.parentElement.querySelector('.add-show-actor').value;
            const data = {
                id: 0,
                name: showname,
                actor: showactor
            };
            apiActions.postRequest('https://localhost:44301/api/show', data, shows => {
                document.querySelector('#sidebar').innerHTML = ShowSidebar(shows);
                
                })
                boxbg.style.display = 'none';
            }
        })

        const boxbg = document.getElementById('boxbg')
        window.onclick = function(event){
            if (event.target == boxbg){
                boxbg.style.display = 'none';
            }
        }
        const closebutton = document.getElementById('closebutton')
        window.onclick = function(event){
            if(event.target == closebutton){
                boxbg.style.display = 'none';
            }
        }
};
