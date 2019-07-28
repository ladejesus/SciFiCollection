import Home from './components/home';
import apiActions from './api/api-actions';

import SingleShow from './components/singleshow';
import SingleSeason from './components/singleseason';
import SingleEpisode from './components/singleepisode';

import ShowSidebar from './components/showsidebar';
import SeasonSidebar from './components/seasonsidebar';
import EpisodeSidebar from './components/episodesidebar';

import AddShowModal from './components/add-show-modal';
import AddSeasonModal from './components/add-season-modal';
import AddEpisodeModal from './components/add-episode-modal';

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
                showId: removeshow_id,
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
            const showname = event.target.parentElement.querySelector('.add-show_name').value;
            const data = {
                id: 0,
                Name: showname,
               
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
                showId: singleshow_id,
                seasonId: removeseason_id,
            };
                     
            apiActions.deleteRequest('https://localhost:44370/api/season', data, seasons => {
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
            const editseason_productioncompany = event.target.parentElement.querySelector('.edit-season_productionCompany').value;
            const editseason_description = event.target.parentElement.querySelector('.edit-season_description').value;
            const editseason_showId = event.target.parentElement.querySelector('.show_Id').value;
                       
            const data = {
                seasonId: editseason_id,
                name: editseason_name,
                productionCompany: editseason_productioncompany,
                description: editseason_description,
                showId: editseason_showId
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
            season =>{
                document.querySelector('#main-info').innerHTML = SingleSeason(season)
            })
        }
    })   
}
 

function seasonModal(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('add-season-modal')) {
            const modal = document.getElementById('boxbg')
            const modalbox = document.getElementById('box')
            modalbox.innerHTML = AddSeasonModal()
            modal.style.display = 'block'};
        })

    document.getElementById('main').addEventListener('click', function(){
            if(event.target.classList.contains('add-season_submit')){
            const seasonname = event.target.parentElement.querySelector('.add-season_name').value;
            const productioncompany = event.target.parentElement.querySelector('.add-season_productioncompany').value;
            const maininfo = document.querySelector('#main-info')
            const showId = maininfo.querySelector('.show_Id').value
            console.log(showId)
            const data = {
                seasonid: 0,
                name: seasonname,
                productioncompany: productioncompany,
                showId: showId
            };
            console.log(seasonname)
            console.log(productioncompany)
            console.log(showId)
            apiActions.postRequest('https://localhost:44370/api/season', data, show => {
                document.querySelector('#main-info').innerHTML = SingleShow(show);       
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

   
function navEpisodes(){
    const episodesbutton = document.querySelector('#nav__episodes')
    console.log(episodesbutton)
    episodesbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44370/api/episode', 
            episodes => {
                document.querySelector('#sidebar').innerHTML = EpisodeSidebar(episodes)
            }
        )
        document.querySelector('#main-info').innerHTML = "";
    });

    document.getElementById('main-info').addEventListener('click', function() {
        if (event.target.classList.contains('add-episode_submit')) {
            const newepisode = event.target.parentElement.querySelector('.add-episode_name').value;
            const seasonId = event.target.parentElement.querySelector('.season_Id').value
            const data = {
                seasonId: 0,
                name: newepisode

            };
            apiActions.postRequest('https://localhost:44370/api/episode', data, episodes => {
                document.querySelector('#main-info').innerHTML = "";
            })
            apiActions.getRequest('https://localhost:44370/api/season/'+ seasonId, 
            season =>{
                document.querySelector('#main-info').innerHTML = SingleShow(season)
            })
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('delete-episode')){
            console.log('event triggered');
            const removeepisode_id = event.target.parentElement.querySelector('.episode_id').value;
            console.log(removeepisode_id)
            const data = {
                EpisodeId: removeepisode_id,
            };
            console.log(data);
            
            apiActions.deleteRequest('https://localhost:44370/api/episode', data, episodes => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = "";
                    document.querySelector('#sidebar').innerHTML = EpisodeSidebar(episodes);
                }
            );
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('edit-episode')){
            const editbox = event.target.parentElement.querySelector('.edit-box')
            editbox.style.display = 'block'

        }
        if (event.target.classList.contains('edit-episode_submit')){
            console.log('event triggered');
            const editepisode_id = event.target.parentElement.querySelector('.episode_id').value;
            const editepisode_name = event.target.parentElement.querySelector('.edit-episode_name').value;
            const editepisode_seasonId = event.target.parentElement.querySelector('.season_Id').value;

            const data = {
                EpisodeId: editepisode_id,
                Name: editepisode_name,
                SeasonId: editepisode_seasonId

            };
                       
            apiActions.putRequest('https://localhost:44370/api/episode', data, episodes => {
                   
                    document.querySelector('#main-info').innerHTML = "";
                    document.querySelector('#sidebar').innerHTML = EpisodeSidebar(episodes);                    
                        }
                        
                    )
        }
    });

    document.getElementById('sidebar').addEventListener('click', function(){
        if (event.target.classList.contains('episode_name')){
            const episodeId = event.target.parentElement.querySelector('.episode_id').value
            console.log(episodeId)
            apiActions.getRequest('https://localhost:44370/api/episode/'+ episodeId, 
            episode =>{
                document.querySelector('#main-info').innerHTML = SingleEpisode(episode)
            })
        }
    })
}

function episodeModal(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('add-episode-modal')) {
            const modal = document.getElementById('boxbg')
            const modalbox = document.getElementById('box')
            modalbox.innerHTML = AddEpisodeModal()
            modal.style.display = 'block'};
        })
    document.getElementById('main').addEventListener('click', function(){
            if(event.target.classList.contains('add-episode_submit')){
            const episodename = event.target.parentElement.querySelector('.add-episode_name').value;
            const maininfo = document.querySelector('#main-info')
            const seasonId = maininfo.querySelector('.season_Id').value
            console.log(episodeId)
            const data = {
                episodeid: 0,
                name: episodename,
                seasonId: seasonId
            };
            console.log(data)
            console.log(name)
            console.log(seasonId)
            apiActions.postRequest('https://localhost:44370/api/episode', data, season => {
                document.querySelector('#main-info').innerHTML = Singleseason(season);
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