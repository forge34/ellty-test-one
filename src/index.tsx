import Button from "./components/button";
import Checkbox from "./components/checkbox";

export default function Index() {
  return (
    <div className="max-w-fit flex flex-col m-auto gap-2 py-2 px-4 border border-border rounded-[6px] shadow-lg ">
      <Checkbox label="All pages" />
      <hr />
      <div className="flex flex-col gap-2 w-[370px] h-[164px] overflow-scroll">
        {[1, 2, 3, 4, 5, 6].map((v) => {
          return <Checkbox label={`Page ${v}`} />;
        })}
      </div>
      <hr />
      <Button className="self-center">Done</Button>
    </div>
  );
}
