import Evidence from "./Evidence";

export default class Ghost {

    private name: string;
    private evidence: Evidence[]
    private abilities: string[]
    private strength: string
    private weakness: string
    private strategies: string[]
    private identification: string[] | undefined

    constructor(name: string, evidence: Evidence[], abilities: string[], strength: string, weakness: string, strategies?: string[], identification?: string[]) {
        this.name = name
        this.evidence = evidence
        this.abilities = abilities
        this.strength = strength
        this.weakness = weakness
        this.strategies = strategies ?? undefined
        this.identification = identification ?? undefined
    }

    getName(): string {
        return this.name
    }

    getEvidence(): Evidence[] {
        return this.evidence
    }

    getAbilities(): string[] {
        return this.abilities
    }

    getStrength(): string {
        return this.strength
    }

    getWeakness(): string {
        return this.weakness
    }

    getStrategies(): string[] {
        return this.strategies
    }

    getIdentification(): string[] | undefined {
        return this.identification
    }

}