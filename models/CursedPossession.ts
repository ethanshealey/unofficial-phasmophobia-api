import CursedPossessionInteractions from "./CursedPossessionInteractions"

export default class CursedPossession {
    private name: string
    private description: string
    private interactions: CursedPossessionInteractions
    private tips: string[] | null

    constructor(name: string, description: string, tips?: string[] | null, interactions?: CursedPossessionInteractions ) {
        this.name = name
        this.description = description
        this.interactions = interactions
        this.tips = tips
    }

    getName(): string {
        return this.name
    }

    getDescription(): string {
        return this.description
    }

    getInteractions(): CursedPossessionInteractions {
        return this.interactions
    }

    getTips(): string[] {
        return this.tips
    }
}