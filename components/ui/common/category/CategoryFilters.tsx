import { TProductByCate } from "@/constants/APIEndpoints/products";
import FilterOption from "./FilterOption";

export default function CategoryFilters({className ='',resData}: {className?: string;resData: TProductByCate}) {
  return (
    <div className={`category-sidebar ${className}`}>
          {/* LỌC THEO THƯƠNG HIỆU */}
          {resData.filter_brands.length > 0 && (
            <div className="category-filters flex flex-col">
              <p className="filter-title  font-bold mb-2">Thương hiệu</p>
              <div className="filter-child flex flex-col gap-y-1">
                {resData.filter_brands.map((b) => {
                  return (
                    <FilterOption
                      key={`attr_list-${b.brand_id}`}
                      selected={b.selected}
                      url={b.url}
                      label={b.brand_name}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* LỌC THEO THUỘC TÍNH */}
          {resData.filter_attrs.length > 0 &&
            resData.filter_attrs.map((attr) => {
              return (
                <div
                  className="category-filters flex flex-col"
                  key={`filter_attrs_${attr.filter_attr_id}`}
                >
                  <div className="filter-item">
                    <p className="filter-title font-bold mb-2">
                      {attr.filter_attr_name}
                    </p>
                    <div className="filter-child flex flex-col gap-y-1">
                      {attr.attr_list.length > 0 &&
                        attr.attr_list.map((al) => {
                          return (
                            <FilterOption
                              key={`attr_list-${al.id}`}
                              selected={al.selected}
                              url={al.url}
                              label={al.attr_value}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          {/* LỌC THEO GIÁ */}
          {resData.filter_prices.length > 0 && (
            <div className="category-filters flex flex-col">
              <p className="filter-title  font-bold mb-2">Mức giá</p>
              <div className="filter-child flex flex-col gap-y-1">
                {resData.filter_prices.map((p) => {
                  return (
                    <FilterOption
                      key={`attr_list-${p.id}`}
                      selected={p.selected}
                      url={p.url}
                      label={p.price_range}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
  )
}
