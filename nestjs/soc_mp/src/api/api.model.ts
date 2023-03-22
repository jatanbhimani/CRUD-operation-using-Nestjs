export interface Api{
    id:number,
    title:string,
    description:string,
    status:Apistatus
    
}
export enum Apistatus {
    DONE = 'Done',
    IN_PROGRESS = 'In_Progress',
    OPEN = "OPEN"
}
