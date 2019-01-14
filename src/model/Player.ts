import { Piece } from "./Piece";

let piecesConf = require('../datas/pieces.json')
interface JsonPieceConf {
    type: number, 
    nb: number
}
const pieceTypeGenerator = (conf: {type: number, nb: number}) => Array(conf.nb).fill(null).map(e => new Piece(conf.type))
const reducer = (set: Piece[]) => set.concat(pieceTypeGenerator(piecesConf), [])
let pieces = piecesConf.reduce(reducer)

const DEFAULT_PIECES_SET = pieces

export class Player {

    public pieces: Piece[]

    constructor(pieces = DEFAULT_PIECES_SET){
        this.pieces = pieces
    }

}