import React from 'react';
import Row from '../row/Row';
//import { map1 } from '../../data/maps';

const Grid = () => {
const map = {rows: 50, columns: 50, river: {startY: 20, endY: 22}};

return (

Array(map.rows).fill(0).map((eachRow, index ) => {
    return (
        <Row y={index} river={map.river} tileCount={map.columns} />
    );
})

);
}
export default Grid;