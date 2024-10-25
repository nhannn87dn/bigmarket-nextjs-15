const FilterChecked = ({ checked = false }: { checked: boolean }) => {
    if (checked) {
      return (
        <span className="border border-gray-200 w-[16px] h-[16px] rounded-sm bg-primary text-white flex items-center justify-center">
          ✓
        </span>
      );
    }
    return (
      <span className="border border-gray-200 w-[16px] h-[16px] rounded-sm"></span>
    );
  };
export default FilterChecked;