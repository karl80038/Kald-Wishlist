
const fs = require('fs');
const path = require('path');
module.exports = class Wish {
    constructor(MFG, Model, Color, Price){
        this.wishMFG = MFG;
        this.wishName = Model;
        this.wishColor = Color;
        this.wishPrice = Price;
    }

    saveWish() {

        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wishes.json'        
        );
        
        console.log(dataPath);
        fs.readFile(dataPath, (error, fileContent) => {
            let wishes = [];
            if(!error){
                wishes = JSON.parse(fileContent);
            }
            wishes.push(this);

            fs.writeFile(dataPath, JSON.stringify(wishes), (error) => {
                console.log(error);
            });

        });

    }
    static fetchAllWishes(callBack){
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wishes.json'        
        );

        fs.readFile(dataPath, (error, fileContent) => {
            if(error){
                return callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    }
}