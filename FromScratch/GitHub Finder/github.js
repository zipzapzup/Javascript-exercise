class GitHub {
    constructor() {
        this.client_id = 'f0094a6b40b067708f81';
        this.client_secret = 'f3394ee3628910cd259632f82619c8b9f71ae3b0';

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return {
            profile: profile

        }
    }




}