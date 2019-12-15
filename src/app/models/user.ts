import {Product} from './product';
import {Comment} from './comment';
export interface User{
    email:string,
    password:string,
    id:string,
    name:string,
    comments:Comment[]
    cart:Product[]
}