import { Empty } from "@/components/empty";
import { GoalsList } from "@/components/goals-list";
import { getPendingGoals } from "./actions";

export default async function Home() {
  const goals = await getPendingGoals();

  return <>{!goals || goals?.length == 0 ? <Empty /> : <GoalsList goals={goals} />}</>;
}
