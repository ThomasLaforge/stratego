export enum PieceType {
    Flag = 0,
    Spy = 1,
    Scout = 2,
    Miner = 3,
    Sergeant = 4,
    Lieutenant = 5,
    Captain = 6,
    Major = 7,
    Colonel = 8,
    General = 9,
    Marshal = 10,
    Bomb = 11
}

export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 10
export const BOARD_PLAYER_PART_HEIGHT = 4

export interface IPosition {
    x: number,
    y: number
}