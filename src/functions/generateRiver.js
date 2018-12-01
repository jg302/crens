// for each tile, check if it's on a river
// returns an array of arrays containing the XY of each tile that is a river

export const generateMap = mapData => {
  
  let mapRows = [];
  let mapTiles = [];
  const riverPitch = Math.abs((mapData.river.startY - 1) - mapData.river.endY);
  const riverTilesPerRow = Math.round(mapData.y / riverPitch);
  let riverTileOffset = 0;
  let isRiverRow;
  let riverRowCount = 0;

  Array(mapData.y).fill(0).map((item, yAxis) => {
    if (yAxis >= mapData.river.startY && yAxis <= mapData.river.endY) {
      riverTileOffset = riverTilesPerRow * riverRowCount;
      riverRowCount ++;
      isRiverRow = true;
    } else isRiverRow = false;

    Array(mapData.x).fill(0).map((item, xAxis) => {

      if ((xAxis >= riverTileOffset && xAxis <= riverTileOffset + riverTilesPerRow) && isRiverRow === true) {
        mapTiles.push({x: xAxis,  y: yAxis, isRiverTile: true})
      } else {
        mapTiles.push({x: xAxis,  y: yAxis, isRiverTile: false})
      }
    })

    mapRows.push([mapTiles]);
    mapTiles = [];
  })
    return(mapRows);
  };