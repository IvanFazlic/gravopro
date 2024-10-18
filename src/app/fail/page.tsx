export default function Fail() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-center p-6 bg-red-100 border border-red-400 rounded-lg">
                <h1 className="text-2xl font-bold text-red-600 mb-4">
                    Došlo je do greške
                </h1>
                <p className="text-lg text-gray-700">
                    Žao nam je, vaša forma nije uspešno predata. Molimo pokušajte ponovo kasnije.
                </p>
            </div>
        </div>
    );
}
