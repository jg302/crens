// for each tile, check if it's on a river
// returns an array of arrays containing the XY of each tile that is a river

export const generateMap = mapData => {
  
  let mapRows = [];
  let mapTiles = [];
  const riverPitch = Math.abs((mapData.river.startY - 1) - mapData.river.endY);
  const riverTilesPerRow = Math.round(mapData.y / riverPitch);
  let riverOffset = 0;

  Array(mapData.y).fill(0).map((item, yAxis) => {
    
    Array(mapData.x).fill(0).map((item, xAxis) => {

      if (yAxis <= mapData.river.startY && xAxis <= riverTilesPerRow + riverOffset) {
        mapTiles.push({x: xAxis,  y: yAxis, isRiverTile: true})
      } else {
        mapTiles.push({x: xAxis,  y: yAxis, isRiverTile: false})
      }
    })
    mapRows.push([mapTiles]);
    mapTiles = [];
    riverOffset = riverOffset + riverTilesPerRow;
  })
    return(mapRows);
  };