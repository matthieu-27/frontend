import { Bookmark } from "./bookmark";
import { Folder } from "./folder";

export interface Tag {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    bookmarks: Bookmark[];
    folders: Folder[];
}