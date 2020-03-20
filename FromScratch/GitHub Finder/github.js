class GitHub {
    constructor() {
        this.client_id = 'f0094a6b40b067708f81';
        this.client_secret = 'f3394ee3628910cd259632f82619c8b9f71ae3b0';
        this.token = 'e523996e147310b0355e7fe22a823b25d25b3611';
        this.user = 'zipzapzup'
        this.authorisation_header = btoa(`${this.user}:${this.token}`)

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`,{
            headers: {
                'Content-type': 'application/json',
                'Authorization' :`basic ${this.authorisation_header}` 
           
        }


        });

        const profile = await profileResponse.json();
        return {
            profile: profile

        }
    }




}