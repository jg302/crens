import React from 'react';
import classNames from 'classnames/bind';
import './tile.css';

const Tile = ({isRiverTile, x, y}) => (
    <div className={classNames("tile", isRiverTile && 'is-river')} />
)

export default Tile;