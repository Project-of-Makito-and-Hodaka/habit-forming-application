import type { FilterType } from '../../types/todo'

type FilterTabsProps = {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

const FILTERS: FilterType[] = ['すべて', '未完了', '完了済み']

const FilterTabs = ({ currentFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentFilter === filter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterTabs
