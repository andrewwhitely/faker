import { ModuleBase } from '../../internal/module-base';
export declare class BookModule extends ModuleBase {
    /**
     * Returns a random book title.
     *
     * @example
     * faker.book.title() // 'IT'
     *
     * @since 5.0.0
     */
    book(): string;

    /**
     * Returns a book author.
     *
     * @example
     * faker.book.author() // 'Stephen King'
     *
     * @since 5.0.0
     */
    author(): string;
    
    /**
     * Returns a book genre.
     *
     * @example
     * faker.book.genre() // 'Fantasy'
     *
     * @since 5.0.0
     */
    genre(): string;

    /**
     * Returns a book rating.
     *
     * @example
     * faker.book.rating() // '5'
     *
     * @since 5.0.0
     */
    rating(): string;

    /**
     * Returns a book format.
     *
     * @example
     * faker.book.format() // 'Hardcover'
     *
     * @since 5.0.0
     */
    format(): string;
    /**
     * Returns a book ISBN.
     *
     * @example
     * faker.book.isbn() // '978-1-56619-909-4'
     *
     * @since 5.0.0
     */
    isbn(): string;

    /**
     * Returns a book publisher.
     *
     * @example
     * faker.book.publisher() // 'Penguin Random House'
     *
     * @since 5.0.0
     */
    publisher(): string;
}
