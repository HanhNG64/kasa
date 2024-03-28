import data from '../../assets/logements.json';

function Home() {
  return (
    <div>
      <h1>Hello!</h1>
      <p>Il y a : {data.length} logements.</p>
    </div>
  );
}

export default Home;
