function catMouse(map, moves){

    let flat = map.replace(/\s/g, '');
    let width = map.indexOf("\n");
    let find = char => {
      let i = flat.indexOf(char);
      return i === -1 ? null : { x: i % width, y: i / width | 0 }
    };
  
    let cat = find('C');
    let mouse = find('m');
  
    if (!cat || !mouse)
      return 'boring without two animals';
  
    let dist = Math.abs(cat.x - mouse.x) + Math.abs(cat.y - mouse.y);
  
    return dist <= moves ? 'Caught!' : 'Escaped!';
  
  }