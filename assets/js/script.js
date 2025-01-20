// fetch("lkdl",{}).then().then()

fetch("https://api.github.com/users/GuzidYagmur")
.then(res => res.json()).then(data => {
    user.innerHTML=`
    <div class="container">
        <img src="${data.avatar_url}" alt="">
        <div class="head">
            <div class="head1">
                <h3>${data.name}</h3>
                <p>Joined 28 Nov 2025</p>
            </div>
            <div class="head2">
                <a href="#">${data.login}</a>
            </div>
            <div class="head3">
                <p>This profile has no bio</p>
            </div>
            <div class="content">
                <div class="content-head">
                    <div class="repos">
                        <p>Repos</p>
                        <p>${data.public_repos}</p>
                    </div>
                    <div class="followers">
                        <p>Followers</p>
                        <p>${data.followers}</p>
                    </div>
                    <div class="following">
                        <p>Following</p>
                        <p>${data.following}</p>
                    </div>
                </div>
            </div>
            <div class="end">
                <div class="first-row">
                    <div class="location">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>${data.location}</</p>

                    </div>
                    <div class="location">
                        <i class="fa-brands fa-twitter"></i>
                        <p>${data.twitter_username}</</p>
                    </div>
                </div>
                <div class="second-row">
                    <div class="location">
                        <i class="fa-solid fa-link"></i>
                        <a href="${data.html_url}" target="_blank">${data.html_url}</a>
                    </div>
                    <div class="location">
                        <i class="fa-brands fa-github-alt"></i>
                        <p>Github</p>
                    </div>
                </div>


            </div>

    
    `
});
