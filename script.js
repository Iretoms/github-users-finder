const API_URL = 'https://api.github.com/users/'

const container = document.querySelector('.container')
const form = document.querySelector('.search-section')
const search = document.querySelector('.search')

function fetchUser(name){
    axios.get(API_URL + name)
        .then(response => {
            showUser(response.data);
        })
        .catch(error => console.log(error));
};

function showUser(user){
    const {avatar_url,public_repos, following, followers, bio, name,login,html_url,created_at} = user
    let user = document.createElement('div')
    user.classList.add('user')
    user.innerHTML = `
    <div class="user-image">
    <img src="" alt="">
    </div>

    <div class="user-info">
    <div class="name">
        <div>
            <h2>The Octocat</h2>
            <small>@octocat</small>
        </div>
        <small>
            Joined Tue Jan 25 2011
        </small>
    </div>

    <div class="about">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Facilis doloremque totam deleniti? Nostrum, sapiente
          aperiam.
    </div>

    <div class="activity">
        <div class="repos">
            <small>Repos</small>
            <h2>8</h2>
        </div>
        <div class="followers">
            <small>Followers</small>
            <h2>5650</h2>
        </div>
        <div class="following">
            <small>Following</small>
            <h2>9</h2>
        </div>
    </div>

    <div class="link">
        <i class="fa-solid fa-link"></i>
        <a href="#">https://github.com</a>
    </div>
   </div>`
}



form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const username =search.value

    if(username && username !== ''){
        fetchUser(username)
    }


})
