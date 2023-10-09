interface LogoProps {
    center?: boolean
}

export default function Logo({center}: LogoProps) {
    return (
        <div className={"font-bold text-2xl "+ (center ? 'text-center' : '')}>
            uE-commerce
        </div>
    )
}