import {v4 as uuid4} from 'uuid'

export class User{
    id!:string
    title!:string;
    content!:string

    constructor(title: string,content:string){
        this.id = uuid4()
        this.title=title
        this.content=content
    }
}