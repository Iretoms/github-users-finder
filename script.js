const API_URL = 'https://api.github.com/users/'

const container = document.querySelector('.container')
const form = document.querySelector('.search-section')
const search = document.querySelector('.search')

function fetchUser(name){
    axios.get(API_URL + name)
        .then(response => {
            showUser(response.data);
        })
        .catch(error => {
            if( error.response.status === 404){
                createErrorCard('This user doesnt exist')
            }
        });
};



function createErrorCard(message){
    let person = document.createElement('div')
    person.classList.add('user')
    person.innerHTML = `<h2>${message}</h2>`
    container.appendChild(person)
}


function showUser(user){
    let person = document.createElement('div')
    person.classList.add('user')
    
    const {avatar_url,public_repos, following, followers, bio, name,login,html_url,created_at} = user
    let date = new Date(created_at).toDateString()
    person.innerHTML = `
    <div class="user-image">
    <img src="${avatar_url}" alt="${name}">
    </div>

    <div class="user-info">
    <div class="name">
        <div>
            <h2>${name}</h2>
            <small>@${login}</small>
        </div>
        <small>
            Joined ${date}
        </small>
    </div>

    <div class="about">
        ${bio ? bio : ''}
    </div>

    <div class="activity">
        <div class="repos">
            <small>Repos</small>
            <h2>${public_repos}</h2>
        </div>
        <div class="followers">
            <small>Followers</small>
            <h2>${followers}</h2>
        </div>
        <div class="following">
            <small>Following</small>
            <h2>${following}</h2>
        </div>
    </div>

    <div class="link">
        <i class="fa-solid fa-link"></i>
        <a href="${html_url}">${html_url}</a>
    </div>
   </div>`

   container.appendChild(person);
   
}



form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const username = search.value

    if(username){
        fetchUser(username)

        search.value = ''

        setTimeout(() => {
            window.location.reload()
        }, 20000 );
    }
})
