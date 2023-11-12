import { BookAPIData } from "./BookAPIInterface";

export interface BookAPIProps {
    bookData: BookAPIData,
    setBookData: (data: BookAPIData) => void,
}