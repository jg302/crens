import React from 'react';
import Row from '../row/Row';
import { generateMap } from '../../functions/generateRiver';

import './map.css';

const Map = () => {
    const mapData = {x: 80, y: 80, river: {startY: 15, endY: 30}};
    const mapRows = generateMap(mapData);

return (
    <div className="map">
    {mapRows.map((rowData, index ) => {
    return (
        <Row rowData={rowData[0]} key={index} y={index} />
    );
})
    }
</div>
);
}
export default Map;