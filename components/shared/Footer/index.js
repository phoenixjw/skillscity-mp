import Link from "next/link";

export default function Footer({ href, title}) {
    return (
        <div className="w-full max-w-6xl mx-auto mt-8">
            <link href={href}>
                Go to {title}
            </link>
        </div>
    )


}