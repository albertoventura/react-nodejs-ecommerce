interface erroInputMessageProps {
    message: string
}

export default function ErroInputMessage({message}: erroInputMessageProps) {
    return (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {message}
        </span>
    )
}