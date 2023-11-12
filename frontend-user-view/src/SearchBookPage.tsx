import { BookAPIProps } from "./BookAPIProps";

export default function SearchBookPage({ bookData, setBookData }: BookAPIProps) {

    return (
        <>
        <div>
            {bookData.items.map((item) => {
                return <div key={item.volumeInfo.infoLink}>{item.volumeInfo.title}</div>
            })}
        </div>
        </>
    )

}