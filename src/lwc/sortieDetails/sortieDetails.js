import { api, track, LightningElement } from 'lwc';
 
export default class SortieDetails extends LightningElement {

    @track hasData = false

    @api
    get details(){
        return this._details
    }
    set details(data){

        console.log('DETAILS DATA')
        console.dir(JSON.parse(JSON.stringify(data)))
        if(Object.keys(data).length){
            
            this._details = data
            this.hasData = true
        }
    }

    get title(){
        return this.details.Name
    }
}