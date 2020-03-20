// Init GitHub
const github = new GitHub;
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
                }

            })
    } else {
        //Clear profile
    }

});