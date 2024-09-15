import { Dropdown } from "@/components/ui/dropdown";

export function ConfigureGame() {
  const handleSelect = () => {};
  return (
    <>
      <div>
        <h1>Please select a category</h1>
        <Dropdown
          options={["People", "Nature", "Food"]}
          onSelect={handleSelect}
        />{" "}
      </div>
    </>
  );
}
