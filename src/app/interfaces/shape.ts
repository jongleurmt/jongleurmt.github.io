export type ShapeType = 'circle' | 'cross';

export interface Shape
{
    type: 'circle' | 'cross';
    alpha: number;
    offset: number;
    delay: number;
    duration: number;
    rotation: number;
    size: number;
    zIndex: number;
}
