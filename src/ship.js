exports.Ship = (name, length) => {

    let shipSkeltn = () => {
        for(let i=0; i<length; i++){
            ship_array[i] = 1;
        }
    }

    ship_array = shipSkeltn();

    let hit = (position) => {
        for(let i=0; i<length; i++){
            ship_array[i] = 0;
        }
        return ship_array;
    }


    let place_ship = (coordinates, coord1,coord2) => {
        let coords = "";
        if(coordinates.includes(coord1) && coordinates.includes(coord2)){
            if(coord1[0] == coord2[0] || (coord1[1] == coord2[1])){
                // coords=[coord1,coord2];
                if(coord1[0] == coord2[0]){
                    coords = "vertacal";
                }
                if(coord1[1] == coord2[1]){
                    coords = "horizontal";
                }
            }

        }
        return coords;
    }

    let isSunk = (ship_array) => {
        sunk = false;
        let remainig_space = 0;
        for(let i=0; i<ship_array.length; i++){
            if(ship_array[i] === 1){
                remainig_space++;
            }
        }
        if(remainig_space > 0) { sunk=false; }
        else{ sunk=true; }

        return sunk;
    }

    
return {ship_array, hit, place_ship, isSunk};

    

    
}