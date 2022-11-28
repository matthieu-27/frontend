export interface Folder {
    id: number;
    name: string;
    children?: Folder[];
}