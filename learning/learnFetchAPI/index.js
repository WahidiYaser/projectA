async function getUsers() {
    // let url = 'readme.json';
    try {
        let res = await fetch('readme.json');
        console.log(res.status)
        console.log(res.statusText)
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.profileURL}" >
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <p> ${user.gender}</p>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();