export default function Story({ setActiveScreen }) {
  const cardData = [
    { title: "Personal Reflections", progress: "6 out of 12 chapters completed" },
    { title: "Defining Moments", progress: "3 out of 10 chapters completed" },
    { title: "Core Beliefs & Values", progress: "5 out of 8 chapters completed" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Story & Legacy</h1>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setActiveScreen("templates")}
      >
        Add Family History & Story Templates
      </button>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {cardData.map((item, index) => (
          <Card key={index} title={item.title} progress={item.progress} onContinue={() => setActiveScreen("form")} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, progress, onContinue }) {
  return (
    <div className="rounded-lg border p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">{progress}</p>
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
}
