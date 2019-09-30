import { track, LightningElement } from 'lwc';
 
export default class SortieView extends LightningElement {

    @track details = {}

    item_clicked(event){
        
        const detail = event.detail
        this.details = detail
        console.log('item_clicked')
        console.dir(detail.title)
    }
    
    get rows(){

        const data =  this.room.Objects.reduce((acc, curr) => {
        
            if( !acc[curr.Row-1] ){

                acc[ curr.Row-1] = { 
                    Id: curr.Id+Math.random().toString().replace('.', ''),
                    objects: [ curr ]
                }
                
                return acc
            }
            
            acc[curr.Row-1].objects[curr.Number-1] = curr
            
            return acc

        }, []);

        console.log('ROWS')
        console.dir(JSON.parse(JSON.stringify(data)))

        return data
    }

    get room(){

        return {
            Id: 'abc123',
            Name: 'Room - 00001',
            Objects: [
                {
                    Id: 'qwe001',
                    Type: 'Bed',
                    Active: false,
                    Row: 1,
                    Number: 1,
                    Occupant: 'Drogon Targaryen',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
                {
                    Id: 'qwe002',
                    Type: 'Bed',
                    Active: false,
                    Row: 1,
                    Number: 2,
                    Occupant: '',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
                {
                    Id: 'qwe003',
                    Type: 'Bed',
                    Active: false,
                    Row: 1,
                    Number: 3,
                    Occupant: 'Mitch Hedberg',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },

                {
                    Id: 'qwe0011',
                    Type: 'Bed',
                    Active: false,
                    Row: 2,
                    Number: 1,
                    Occupant: 'Gene Collie',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
                {
                    Id: 'qwe0012',
                    Type: 'Bed',
                    Active: false,
                    Row: 2,
                    Number: 2,
                    Occupant: 'Floof Panda',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
                {
                    Id: 'qwe0013',
                    Type: 'Bed',
                    Active: false,
                    Row: 2,
                    Number: 3,
                    Occupant: '',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
                {
                    Id: 'qwe0014',
                    Type: 'Bed',
                    Active: false,
                    Row: 2,
                    Number: 4,
                    Occupant: 'Lucy Chimp',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },


                {
                    Id: 'qwe0021',
                    Type: 'Bed',
                    Active: false,
                    Row: 3,
                    Number: 1,
                    Occupant: 'Richard Pryor',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
                {
                    Id: 'qwe0022',
                    Type: 'Bed',
                    Active: false,
                    Row: 3,
                    Number: 2,
                    Occupant: 'Prince Purple',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
                {
                    Id: 'qwe0023',
                    Type: 'Bed',
                    Active: false,
                    Row: 3,
                    Number: 3,
                    Occupant: '',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
                {
                    Id: 'qwe0024',
                    Type: 'Bed',
                    Active: false,
                    Row: 3,
                    Number: 4,
                    Occupant: 'Chris Farley',
                    get Name(){
                        return this.Occupant ? 'Occupied' : 'Vacant'
                    },
                    get _Name(){
                        return `${this.Type} - ${this.Number}`
                    },
                },
            ],
        }
    }
}