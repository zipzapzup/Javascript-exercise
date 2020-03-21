class GitHub {
    constructor() {
        this.client_id = 'f0094a6b40b067708f81';
        this.client_secret = 'f3394ee3628910cd259632f82619c8b9f71ae3b0';
        this.token = '';
        this.user = 'zipzapzup'
        this.authorisation_header = btoa(`${this.user}:${this.token}`)
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`,{
            headers: {
                'Content-type': 'application/json',
                'Authorization' :`basic ${this.authorisation_header}`   
        }
        });

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.repos_sort}`,{
            headers:{
                'Content-type': 'application/json',
                'Authorization' :`basic ${this.authorisation_header}`   
            }
        });

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile: profile,
            repos

        }
    }




}