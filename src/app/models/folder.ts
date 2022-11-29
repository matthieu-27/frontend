import { Bookmark } from "./bookmark";

export interface Folder {
    id: number;
    name: string;
    description?: string;
    children?: Folder[];
    bookmarks?: Bookmark[];
    created_at: Date;
    updated_at: Date;
}