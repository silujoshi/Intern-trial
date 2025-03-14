export default function Card({ title, progress, onContinue }) {
    return (
      <div className="rounded-lg border p-4 shadow-md bg-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{progress}</p>
        {onContinue && (
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={onContinue}>
            Continue
          </button>
        )}
      </div>
    );
  }
  