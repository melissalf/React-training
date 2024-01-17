const LABEL_NAMES = [
  { name: "initial Investment", value: "initialInvestment" },
  { name: "annual Investment", value: "annualInvestment" },
  { name: "expected Return", value: "expectedReturn" },
  { name: "duration", value: "duration" },
];

export default function UserForm({ onUserInput, defaultValues }) {
  function handleOnChange(event) {
    onUserInput(event.target.name, event.target.value);
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="Text">{LABEL_NAMES[0].name}</label>
          <input
            type="number"
            name={LABEL_NAMES[0].value}
            value={defaultValues.initialInvestment}
            onChange={handleOnChange}
            required
          />
        </p>
        <p>
          <label htmlFor="Text">{LABEL_NAMES[1].name}</label>
          <input
            type="number"
            name={LABEL_NAMES[1].value}
            value={defaultValues.annualInvestment}
            onChange={handleOnChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="Text">{LABEL_NAMES[2].name}</label>
          <input
            type="number"
            name={LABEL_NAMES[2].value}
            value={defaultValues.expectedReturn}
            onChange={handleOnChange}
            required
          />
        </p>
        <p>
          <label htmlFor="Text">{LABEL_NAMES[3].name}</label>
          <input
            type="number"
            name={LABEL_NAMES[3].value}
            value={defaultValues.duration}
            onChange={handleOnChange}
            required
          />
        </p>
      </div>
    </section>
  );
}
