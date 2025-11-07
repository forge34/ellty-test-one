import Button from "./components/button";

export default function Index() {
  return (
    <div className="flex flex-col gap-6 py-4 px-8">
      <div
        className="flex flex-col py-2 px-4 gap-4 max-w-fit border rounded-[5px]"
        id="btn-containr"
      >
        {[0, 1, 2].map((v) => {
          return <Button key={v}>Done</Button>;
        })}
      </div>
    </div>
  );
}
