type IsActive = {
  all: boolean;
  pop: boolean;
  edm: boolean;
  hipHop: boolean;
};

type Props = {
  title: string;
  isActive: IsActive;
  genre:  keyof IsActive
  handleClick: (str: string) => void
};

export default function FilterItem({ title, isActive, genre, handleClick }: Props) {
  return (
    <button
    onClick={() => handleClick(genre)}
      className={`h-10 w-24 border-[2px] border-base-100 ${isActive[genre] ? "bg-secondary text-primary" : "bg-primary text-secondary"}`}
    >
      {title}
    </button>
  );
}
