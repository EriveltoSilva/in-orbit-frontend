export interface GoalEntity {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionsCount?: number;
}
