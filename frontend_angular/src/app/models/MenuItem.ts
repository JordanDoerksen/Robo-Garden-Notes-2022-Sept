export class MenuItem{
    key:string;
    url:string;
    isActive:boolean;
    children:Array<MenuItem>;
    showInFooter:boolean;

    public constructor(
        key:string,
        url:string,
        isActive:boolean,
        children:Array<MenuItem>,
        showInFooter:boolean

    ){
        this.key = key;
        this.url = url;
        this.isActive = isActive;
        this.children = children;
        this.showInFooter = showInFooter;
    }

    public hasChildren():boolean{
        return this.children.length != 0;
    }
}