import Link from "next/link";
import FilterChecked from "./FilterChecked";

const FilterOption = ({
    selected,
    url,
    label,
  }: {
    selected: number;
    url: string;
    label: string;
  }) => {
    return (
      <Link
        className={`flex gap-x-[8px] items-center ${
          selected === 1 ? "font-bold" : ""
        }`}
        href={`/c/${url}`}
      >
        <FilterChecked checked={selected === 1} />
        {label}
      </Link>
    );
  };

export default FilterOption;