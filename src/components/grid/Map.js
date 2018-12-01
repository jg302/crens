import React from 'react';
import Row from '../row/Row';
import { generateMap } from '../../functions/generateRiver';

import './map.css';

const Map = () => {
    const mapData = {x: 40, y: 40, river: {startY: 20, endY: 22}};
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