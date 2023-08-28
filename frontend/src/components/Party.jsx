export const Party = ({ name, vote, key }) => {
  return (
    <section className="Party" key={key}>
      <section className="Party-name">
        <h2>{name}</h2>
      </section>
      <section className="Party-vote">
        <p className="Party-p">
          Votos
          <span className="Party-vote">{vote}</span>
        </p>
      </section>
    </section>
  );
};
