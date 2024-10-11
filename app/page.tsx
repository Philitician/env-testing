export default function Home() {
  const myVar = process.env.MY_VAR;
  return <div>{myVar}</div>;
}
