export class Project {
    private id: number;
    private name: string;
    private type: string;
    private description: string;
    private githubLink: string;
    private webLink: string;
    private stack: string[] = [];
    private imageSamples: string[] = [];

    constructor(id: number, name: string, type: string, description: string, githubLink: string,
                webLink: string, stack: string[], imageSamples: string[]) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.githubLink = githubLink;
        this.webLink = webLink;
        this.stack = stack;
        this.imageSamples = imageSamples;
    }

    public getId() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
    public getDescription() {
        return this.description;
    }
    public getType() {
        return this.type;
    }
    public getImageSamples(): string[] {
        return this.imageSamples;
    }
    public getStack(): string[] {
        return this.stack;
    }
}
