// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;


// Search input

const searchUser = document.getElementById('searchUser');

// Search input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        console.log(userText);
        // Make HTTP Call
        github.getUser(userText)
            .then( data => {
                if(data.profile.message === 'Not Found') {
                    // Show Alert
                } else {
                    // Show Profile
                    ui.showProfile(data.profile);
                }

            })
    } else {
        //Clear profile
    }

});