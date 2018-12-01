import React from 'react';
import Tile from '../tile/Tile';
import { generateMap } from '../../functions/generateRiver';

const Grid = () => {
    const mapData = {x: 40, y: 40, river: {startY: 20, endY: 22}};
    const mapTiles = generateMap(mapData);

    console.log(mapTiles);

return (
mapTiles.map((eachTile, index ) => {
    return (
        <Tile {...eachTile} key={index} />
    );
})

);
}
export default Grid;