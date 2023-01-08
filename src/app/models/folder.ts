import { Bookmark } from "./bookmark";

export interface Folder {
    id: number;
    name: string;
    parent_id?: string;
    description?: string;
    children?: Folder[];
    bookmarks?: Bookmark[];
}