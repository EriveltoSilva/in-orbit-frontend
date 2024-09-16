import { Empty } from "@/components/empty";
import { GoalsList } from "@/components/goals-list";

export default function Home() {
  const goals = [0];
  return <>{goals.length === 0 ? <Empty /> : <GoalsList />}</>;
}
