import { Cell } from "./pages/cell/page";

export default function Home() {
  return (
    <div>
      <Cell value={3} />
      <Cell value={5} selected/>
      <Cell value={6} />
    </div>
  );
}
