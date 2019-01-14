import { PieceType, IPosition } from "./Stratego";

export class Piece {

    public type: PieceType
    public initialStrength: number
    public position: IPosition | null
    public isDead: boolean

    constructor(type: PieceType, pos: IPosition | null = null, isDead = false){
        this.type = type
        this.initialStrength = Number(type)
        this.position = pos
        this.isDead = isDead
    }

    getStrengthAgainst(ennemy: Piece){
        let strength = this.initialStrength

        if(this.type === PieceType.Spy && ennemy.type === PieceType.Marshal){
            strength += 10
        }
        else if(this.type === PieceType.Miner && ennemy.type === PieceType.Bomb){
            strength += 10
        }

        return strength
    }

    getNbMovePossible(){
        switch (this.type) {
            case PieceType.Bomb:
            case PieceType.Flag:
                return 0        
            case PieceType.Scout:
                return 10
            default:
                return 1
        }
    }

    get isActive(){
        return !this.isDead && this.position !== null
    }

    get isToPlace(){
        return !this.isDead && this.position === null
    }

}