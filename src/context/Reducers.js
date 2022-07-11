

export default function BookReducer(book, action) {

    switch (action.type) {

        case 'book_added':
            return {
                ...book,
                cartItems: [...book.cartItems, { ...action.payload, qty: 1 }],
            };


        case 'book_removed':
            return {
                ...book,
                cartItems: book.cartItems.filter((item) => item.id !== action.payload.id)
            };

        case 'book_increase':

            book.cartItems[book.cartItems.findIndex((item) => item.id === action.payload.id)].qty++;
            console.log("reducerIncreased");

            return {
                ...book,
                cartItems: [...book.cartItems]
            }

        case 'book_decrease':

            book.cartItems[book.cartItems.findIndex((item) => item.id === action.payload.id)].qty--
            return {
                ...book,
                cartItems: [...book.cartItems]
            }

        case 'clear_cart':
            return {
                cartItems: []
            }


        default:
            return book;

    }

};

export const FilterReducer = (bookFilter, action) => {
    switch (action.type) {
        case "category_filter":
            return { ...bookFilter, byCategory: action.payload };

        case "price_sort":
            return { ...bookFilter, sort: action.payload };

        case "search_query":
            return { ...bookFilter, searchQuery: action.payload };

        default:
            return bookFilter;
    }
}
