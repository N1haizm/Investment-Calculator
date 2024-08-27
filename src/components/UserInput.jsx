export default function UserInput({userInput, onChange}){
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" onChange={event => onChange(event, 'initialInvestment')} value={userInput.initialInvestment} required />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" onChange={event => onChange(event, 'annualInvestment')} value={userInput.annualInvestment} required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" onChange={event => onChange(event, 'expectedReturn')} value={userInput.expectedReturn} required />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" onChange={event => onChange(event, 'duration')} value={userInput.duration} required />
            </p>
        </div>
    </section>
}