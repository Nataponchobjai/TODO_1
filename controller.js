
let db = [];
let idcounter = 1001;

/*
3 ways to pass information from client to backend
1. query paramater
2. pa
3. request body
*/

// how do we want to respond to a request to an add item in our todo list
let addItem = function(req, res){

    // get the item indo from the request: label, notes
    // generate: id, done
    let item = {
        done: false,
        label: req.body.label,
        notes: req.body.notes,
        id: idcounter
    };
    idcounter++;
    // add the item to the db array
    db.push(item);

    // send back a 204 status (aka"everything is ok, but i dont have content to send back")
   // res.sendStatus(204);

   res.json(item);
}

let deleteItem = function(req, res){
    let id = req.params.id;
    let foundIndex;
    for(let i =0 ; i<db.length; i++){
        let item = db[i];
        if(id == item.id){
            foundIndex = i;
        }
    }
    let deleteItem;
    if(foundIndex >=0){
       deleteItem = db.splice(foundIndex, 1);

    }
    res.json(deleteItem)
}

let listItem = function(req, res){

    let copy = []
    
    for(let i=0; i<db.length; i++){
        let item =db[i];
        let copyItem = {
            done: item.done,
            label: item.label
        };
        copyArray.push(copyItem)

    }
    res.json(copyArray);
}


let getItem = function(req, res){

    //1. read the id we are looking for from the request
    let id = req.params.id;

    //2. look for the item with a matching id in the  db array
    let foundItem;
    for(let i=0;i<db.length; i++){
        if(id == db[i].id){
            foundItem = db[i];
        }
    }
    // if item found, add it to response

    // if item not founf, add null to responde
}
res.json(foundItem)

let updateItem = function(req, res){


    // get id from the path param
    let id = req.params.id;

    // get label, notes, and done, from body
    let lable = req.body.lable;
    let notes = req.body.notes;
    let done = req.body.done;

    if(done == true){
        done = true;
    }else {
        done = false;
    }
    let foundItem;
    for(let i=0; i<db.length;i++){
        let item = db[i];
        if(id == item.id){
            item.done = done;
            item.lable = lable;
            item.notes = notes;
            foundItem = item;


        }
    }
    res.json(foundItem);

    //if we find an item with a matcginh id, update its: label and notes

}

module.exports = {
    addItem,
    deleteItem,
    listItem,
    getItem,
    updateItem
}