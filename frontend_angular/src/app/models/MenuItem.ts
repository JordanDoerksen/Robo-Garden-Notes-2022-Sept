export class MenuItem{
    key:string;
    url:string;
    isActive:boolean;
    children:Array<MenuItem>;

    public constructor(
        key:string,
        url:string,
        isActive:boolean,
        children:Array<MenuItem>
    ){
        this.key = key;
        this.url = url;
        this.isActive = isActive;
        this.children = children;
    }
}