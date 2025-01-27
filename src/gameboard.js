const {Ship} = require("./ship.js");

exports.Gameboard = () => {
    let ships = [
        {
            ship_name: "ship1",
            length: 2,
            coordinate1: "",
            coordinate2: "",
            placement: "",
            hit_position: "",
            is_sunk: false,
        },
        {
            ship_name: "ship2",
            length: 3,
            coordinate1: "",
            coordinate2: "",
            placement: "",
            hit_position: "",
            is_sunk: false,
        },
        {
            ship_name: "ship3",
            length: 4,
            coordinate1: "",
            coordinate2: "",
            placement: "",
            hit_position: "",
            is_sunk: false,
        },
        {
            ship_name: "ship4",
            length: 5,
            coordinate1: "",
            coordinate2: "",
            placement: "",
            hit_position: "",
            is_sunk: false,
        },{
            ship_name: "ship5",
            length: 6,
            coordinate1: "",
            coordinate2: "",
            placement: "",
            hit_position: "",
            is_sunk: false,
        },
    ];

    missedShots = [];

    let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let x_length = x.length;
    let y_length = y.length;

    let xy_coordinates = () => {
        let coordinates = [];
        for(let i = 0; i<x_length; i++){
            for(let j = 0; j<y_length; j++){
                let x_coor = x[i];
                let y_coor = y[j];
                coordinates[i,j] = [x_coor,y_coor];
            }
        }        
        return coordinates;
    }

    let coordinates = xy_coordinates();

    let add_ship = (c1,c2) => {
        let selected_ship = "";
        let index = 0;
        for(let i=0; i<ships.length; i++){
            let ship = ships[i];
            if(ship.coordinate1 = ""){
                selected_ship = ship;
                index = i;
                break;
            }
        }

        let name = selected_ship.ship_name;
        let length = selected_ship.length;

        const ship = Ship(name,length);
        let placement = ship.place_ship(coordinates,c1,c2);
        if(placement.length > 0){
            // let ship_coordinates = [c1,c2];
            ships[index].placement = placement;
            ships[index].coordinate1 = c1;
            ships[index].coordinate2 = c2;
        }
        return ships;
    }


    let receiveAttack = (c1,c2) => {
        
        for(let i=0; i<ships.length; i++){
            let ship = ships[i];
            let first_coordinate = ship.coordinate1;
            let last_coordinate = ship.coordinate2; 
            let ship_name = ship.ship_name;           

            if(first_coordinate[0] - last_coordinate[0] == 0){
                if(c1 == first_coordinate[0] && c2 >= first_coordinate[1] && c2 <= last_coordinate[1]){
                    let ship_length = first_coordinate[1] - last_coordinate[1];
                    let position = c2 - first_coordinate[1];
                    let new_hit_ship = Ship(ship_name, ship_length);
                    let new_hit_ship_position = new_hit_ship.hit(position);
                    ship[i].hit_position = new_hit_ship_position;
                }else{
                    let missed = [c1,c2];
                    missedShots.push(missed);
                }
            }
            if(first_coordinate[1] - last_coordinate[1] == 0){
                if(c1 == first_coordinate[1] && c2 >= first_coordinate[0] && c2 <= last_coordinate[0]){
                    let ship_length = first_coordinate[0] - last_coordinate[0];
                    let position = c2 - first_coordinate[0];
                    let new_hit_ship = Ship(ship_name, ship_length);
                    let new_hit_ship_position = new_hit_ship.hit(position);
                    ship[i].hit_position = new_hit_ship_position;
                }else{
                    let missed = [c1,c2];
                    missedShots.push(missed);
                }
            }

            let missed = [c1,c2];
            missedShots.push(missed);

        }
    }

    let is_sunk =(ship_name) => {
        let sunk_state = false;
        for(let i=0; i<ships.length; i++){
            let name = ships[i].ship_name;
            if(ship_name.localeCompare(name) == 0){
                let lentgth_array = ships[i].hit_position; 
                let ship_lnth = ships[i].length; 
                let hit_ship = Ship(ship_name,ship_lnth);                        
                sunk_state = hit_ship.isSunk(lentgth_array);
                ships[i].is_sunk = sunk_state;
            }            
        }
        return sunk_state;
    }

    let are_all_sunk = () => {
        let all_sunk = true
        for(let i=0; i<ships.length; i++){
            let is_sunk = ships[i].is_sunk;
            if(is_sunk == false){
                all_sunk = false;
            }
        }
        return all_sunk;
    }

    return {ships, missedShots, coordinates, add_ship, receiveAttack, is_sunk, are_all_sunk};
}