import { Bookmark } from "./bookmark";
import { Tag } from "./tag";

export interface Folder {
    id?: number;
    name: string;
    parent_id: number;
    description?: string;
    children?: Folder[];
    bookmarks?: Bookmark[];
    tags?: Tag[];
    created_at?: Date;
    updated_at?: Date;
}