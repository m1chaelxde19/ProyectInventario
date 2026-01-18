interface Props {
  mensaje: string;
}

export default function Home({ mensaje }: Props) {
  return <h1>{mensaje}</h1>;
}
