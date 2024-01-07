import type { LocaleEntry } from './definitions';
/**
 * The possible definitions related to  books.
 */
export type BookDefinition = LocaleEntry<{

    book: string[];
    author: string[];
    genre: string[];
    rating: string;
    format: string[];
    isbn: string;
    publisher: string[];
}>;
