class MenuItem{
    title:string;
    url:string;
    isActive:boolean;
    subMenu:Array<MenuItem>;

    public constructor(
        title:string,
        url:string,
        isActive:boolean,
        subMenu:Array<MenuItem>
    ){
        this.title = title;
        this.url = url;
        this.isActive = isActive;
        this.subMenu = subMenu;
    }
}