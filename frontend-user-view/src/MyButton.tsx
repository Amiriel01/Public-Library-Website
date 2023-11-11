
interface MyButtonProps {
    title: string,
    id: string
}

export default function MyButton({ title, id }: MyButtonProps) {
    return (
        <button id={id}>{title}</button>
    )
}

