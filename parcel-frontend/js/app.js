import Home from './components/home';
import apiActions from './api/api-actions';

import SingleShow from './components/singleshow';
import SingleSeason from './components/singleseason';
//import SingleEpisode from './components/singleepisode';

import ShowSidebar from './components/showsidebar';
import SeasonSidebar from './components/seasonsidebar';
// import EpisodeSidebar from './components/episodesidebar';

import AddShowModal from './components/add-show-modal'
//import AddSeasonModal from './components/add-season-modal'
//import AddEpisodeModal from './components/add-episode-modal'




pageBuild();

function pageBuild(){
    home();
    navShows();
    navSeasons();
    // navEpisodes();

    editBoxDisplay();
    
    showModal();
    // seasonModal();
    // episodeModal();





    
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
    showsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44370/api/show', 
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
            apiActions.postRequest('https://localhost:44370/api/show', data, shows => {
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
            
            apiActions.deleteRequest('https://localhost:44370/api/show', data, shows => {
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
                       
            apiActions.putRequest('https://localhost:44370/api/show', data, shows => {
                   
                    document.querySelector('#main-info').innerHTML ="";
                    document.querySelector('#sidebar').innerHTML = ShowSidebar(shows);
                }
            );
        }
    });
    
    document.getElementById('sidebar').addEventListener('click', function(){
        if (event.target.classList.contains('show_name')){
            const showId = event.target.parentElement.querySelector('.show_id').value
            console.log(showId)
            apiActions.getRequest('https://localhost:44370/api/show/'+ showId, 
            show =>{
                document.querySelector('#main-info').innerHTML = SingleShow(show)
            })
        }
    })
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('target')){
            const seasonId = event.target.parentElement.querySelector('.season_id').value
            apiActions.getRequest('https://localhost:44370/api/season/'+ seasonId, 
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
            const showname = event.target.parentElement.querySelector('.add-show-name').value;
            const showactor = event.target.parentElement.querySelector('.add-show-actor').value;
            const data = {
                id: 0,
                name: showname,
                actor: showactor
            };
            apiActions.postRequest('https://localhost:44370/api/show', data, shows => {
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

function editBoxDisplay(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('edit-button')) {
            const editbox = event.target.parentElement.querySelector('.edit-box')
            console.log(editbox)
            editbox.style.display = 'block'
        }
    })
}



function navSeasons(){
    const seasonsbutton = document.querySelector('#nav__seasons')
    console.log(seasonsbutton)
    seasonsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44370/api/season', 
            seasons => {
                document.querySelector('#sidebar').innerHTML = SeasonSidebar(seasons)
            }
        )
        document.querySelector('#main-info').innerHTML = "";
    })

    document.getElementById('main-info').addEventListener('click', function() {
        if (event.target.classList.contains('add-season_submit')) {
            const newseason = event.target.parentElement.querySelector('.add-season_name').value;
            const showId = event.target.parentElement.querySelector('.show_Id').value
            const data = {
                Id: 0,
                name: newseason
                
            };
            apiActions.postRequest('https://localhost:44370/api/season', data, seasons => {
                document.querySelector('#main-info').innerHTML = "";
            })
            apiActions.getRequest('https://localhost:44370/api/show/'+ showId, 
            show =>{
                document.querySelector('#main-info').innerHTML = SingleShow(show)
            })

        }
    })
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('delete-season')){
            console.log('event triggered');
            const singleshow_id = event.target.parentElement.querySelector('.show_Id').value;
            const removeseason_id = event.target.parentElement.querySelector('.season_id').value;
            console.log(removeseason_id)
            const data = {
                artistId: singleshow_id,
                albumId: removeseason_id,
            };
            console.log(data);
            
            
            apiActions.deleteRequest('https://localhost:44370/api/season', data, seasons => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = "";
                    document.querySelector('#sidebar').innerHTML = SeasonSidebar(seasons);
                }
            );

            
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function()
    {
        if (event.target.classList.contains('edit-season')){
            const editbox = event.target.parentElement.querySelector('.edit-box')
            editbox.style.display = 'block'

        }
        if (event.target.classList.contains('edit-season_submit')){
           
            const editseason_id = event.target.parentElement.querySelector('.season_id').value;
            const editseason_name = event.target.parentElement.querySelector('.edit-season_name').value;
            const editseason_description = event.target.parentElement.querySelector('.edit-season_description').value;
            const editseason_showId = event.target.parentElement.querySelector('.show_Id').value;
                       
            const data = {
                SeasonId: editseason_id,
                Name: editseason_name,
                Description: editseason_description,
                ShowId: editseason_showId
            };
           
            
            apiActions.putRequest('https://localhost:44370/api/season', data, seasons => {
                    
                    document.querySelector('#main-info').innerHTML = "";
                    document.querySelector('#sidebar').innerHTML = SeasonSidebar(seasons);
                }
            );
        }
    });
    document.getElementById('sidebar').addEventListener('click', function(){
        if (event.target.classList.contains('season_name')){
            const seasonId = event.target.parentElement.querySelector('.season_id').value
            console.log(seasonId)
            apiActions.getRequest('https://localhost:44370/api/season/'+ seasonId, 
            album =>{
                document.querySelector('#main-info').innerHTML = SingleSeason(season)
            })
        }
    })
    
}
 