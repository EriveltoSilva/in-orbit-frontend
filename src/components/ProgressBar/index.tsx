interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="w-full rounded-full bg-zinc-900 h-2">
      <div
        className={`max-w-[100%] h-full rounded-full bg-gradient-to-r from-pink-500 to-violet-700`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
