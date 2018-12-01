import React from 'react';
import Tile from '../tile/Tile';
import './row.css';

const Row = ({rowData}) => (

    <div className={"row"}>
    {rowData.map((eachTile, index ) => {

        return (
            <Tile x={eachTile.x} y={eachTile.y} isRiverTile={eachTile.isRiverTile} />
        );
    })
    }
    </div>
);

export default Row;