/* eslint-disable no-console */
import { api, LightningElement } from 'lwc'
//import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class SortieItem extends LightningElement {

    @api uid
    @api text
    @api title
    @api active
    
    @api type
    @api row
    @api col

    click(e){
        console.log(e.target.tagName)
        console.log('clicked')

        const event = new CustomEvent('clicked', {
            detail: {
                uid: this.uid,
                text: this.text,
                title: this.title,
                active: this.active,
                type: this.type,
                row: this.row,
                col: this.col,
            },
        })

        this.dispatchEvent(event)
    }
}