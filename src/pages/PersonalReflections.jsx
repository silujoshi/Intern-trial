export default function PersonalReflections({ setActiveScreen, formData, setFormData }) {
    return (
      <div>
        <button className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => setActiveScreen("dashboard")}>
          &lt; Back
        </button>
        <h1 className="text-2xl font-bold">Personal Reflections</h1>
        <h2 className="text-lg font-semibold mt-4">Adolescence and Identity Formation</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          placeholder="Describe your family life growing up..."
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Save and Continue
        </button>
      </div>
    );
  }
  