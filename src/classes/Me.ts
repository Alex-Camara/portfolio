export class Me {
    private id: number;
    private name: string;
    private alias: string;
    private email: string;
    private twitter: string;
    private github: string;
    private linkedin: string;
    private telegram: string;
    private instagram: string;
    private resume: string;

    constructor(id: number, name: string, alias: string, email: string, twitter: string, linkedin: string,
                github: string, telegram: string, instagram: string) {
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.email = email;
        this.twitter = twitter;
        this.linkedin = linkedin;
        this.github = github;
        this.telegram = telegram;
        this.instagram = instagram;
    }

    getGithubLink() {
        return this.github;
    }
    getTwitterLink() {
        return this.twitter;
    }
    getLinkedinLink() {
        return this.linkedin;
    }
    getTelegramLink() {
        return this.telegram;
    }
    getInstagramLink() {
        return this.instagram;
    }
}