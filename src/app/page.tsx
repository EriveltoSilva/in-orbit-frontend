import { Empty } from "@/components/empty";

export default function Home() {
  const goals = [];
  return <>{goals.length === 0 && <Empty />}</>;
}
