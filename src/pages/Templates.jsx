import Card from "./card";

export default function Templates({ setActiveScreen }) {
  const templates = [
    "Personal Reflections", "Defining Moments", "Core Beliefs & Values",
    "Influential Moments", "Passion & Purpose", "Loved Ones",
    "Overcoming Adversity", "The Meaning of Life", "Leave Less Unsaid",
    "Message for the World", "My Milestones", "Life Transitions",
    "Personal Triumphs", "My Own"
  ];

  return (
    <div>
      <button className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => setActiveScreen("dashboard")}>
        &lt; Back
      </button>
      <h1 className="text-2xl font-bold">Family History & Story Templates</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {templates.map((template, index) => (
          <Card key={index} title={template} progress="2-4 mins" />
        ))}
      </div>
    </div>
  );
}
