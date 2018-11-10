import React from 'react';
import classNames from 'classnames/bind';
import Tile from '../tile/Tile';

import './row.css';

const Row = ({children, y, river, tileCount}) => {
    const rowContainsRiver = (y >= river.startY && y <= river.endY);

    return (
    <div className={classNames('row', rowContainsRiver && 'has-river')} >
        {Array(tileCount).fill(0).map((tile, index ) => (
            <Tile y={y} x={index}/>
        ))}
    </div>
)}
export default Row;