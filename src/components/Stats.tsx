type StatsProps = {
  numberOfCharacters: number;
  instagramCharactersLeft: number;
  facebookCharactersLeft: number;
  numberOfWords: number;
};

export default function Stats({
  numberOfCharacters,
  instagramCharactersLeft,
  facebookCharactersLeft,
  numberOfWords,
}: StatsProps) {
  return (
    <section className='stats'>
      <Stat number={numberOfWords} label='Words' />
      <Stat number={numberOfCharacters} label='Characters' />
      <Stat number={instagramCharactersLeft} label='Instagram' />
      <Stat number={facebookCharactersLeft} label='Facebook' />
    </section>
  );
}

type StatProps = {
  label: string;
  number: number;
};

function Stat({ label, number }: StatProps) {
  return (
    <section className='stat'>
      <span className='stat__number'>{number}</span>
      <h2 className='second-heading'>{label}</h2>
    </section>
  );
}
