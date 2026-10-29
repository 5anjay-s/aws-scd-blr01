import { impulseResults as hackathon } from '../content/impulse-winners';

export function ImpulseWinners() {
  return <section className="impulse-winners" id="impulse-winners" aria-labelledby="impulse-winners-title">
    <p className="event-kicker">HACKATHON / RESULTS</p>
    <h3 id="impulse-winners-title">{hackathon.name} winners.</h3>
    <ol className="impulse-winners-list" role="list">
      {hackathon.winners.map(winner => <li className="impulse-winner" data-place={winner.place} key={winner.place}>
        <div className="impulse-winner-place">
          <span className="event-kicker">{winner.label}</span>
          <span className="impulse-winner-number" aria-hidden="true">0{winner.place}</span>
        </div>
        <h4>{winner.team}</h4>
        <ul className="impulse-winner-members" aria-label={`${winner.team} team members`} role="list">
          {winner.members.map(name => <li key={name}>{name}</li>)}
        </ul>
      </li>)}
    </ol>
  </section>;
}
