// for each tile, check if it's on a river
// returns an array of arrays containing the XY of each tile that is a river

export const generateMap = mapData => {
  
  let mapTiles = [];
  const riverPitch = Math.abs((mapData.river.startY - 1) - mapData.river.endY);
  const riverTilesPerRow = Math.round(mapData.y / riverPitch);
  let counter = 0;
    
  Array(mapData.y).fill(0).map((item, yAxis) => {
    
    if (yAxis >= mapData.river.startY && yAxis <= mapData.river.endY) {

  Array(riverTilesPerRow).fill(0).map((item, xAxis) => {
      return (mapTiles.push({y: yAxis, x: xAxis + riverTilesPerRow * counter, isRiverTile: true})); 
  })
      counter++;
    } else {
      return (mapTiles.push({y: yAxis, x: counter, isRiverTile: false})); 
    }
  })
    return(mapTiles);
  };