export default function Header({ name }) {
    return (
        <div className="w-full max-w-6xl mx-auto py-4 px-4">
            <h1 className="font-bold text-4xl text-center">{name} Page</h1>
        </div>
    );
}