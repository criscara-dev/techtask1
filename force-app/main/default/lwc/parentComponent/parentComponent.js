import { LightningElement,track } from 'lwc';

export default class ParentComponent extends LightningElement {

    @track parentValue = 'second text'

    addInputToList(){
        this.parentValue = 'third value'
    }
}