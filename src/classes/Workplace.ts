export class Workplace {
    private id: number;
    private name: string;
    private job: string;
    private acronym: string;
    private link: string;
    private startDate: string;
    private endDate: string;
    private achievements: string[] = [];

    constructor(id: number, job: string, name: string, acronym: string,
                startDate: string, endDate: string, link: string) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.acronym = acronym;
        this.startDate = startDate;
        this.endDate = endDate;
        this.link = link;
    }

    public getId() {
        return this.id;
    }

    public getAcronym() {
        return this.acronym;
    }

    public addAchievement(achievement: string) {
        this.achievements.push(achievement);
    }
}
