
interface SearchBarProps{
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar = ({value, onChange}: SearchBarProps) => {
  return (
    <input
        type="search"
        className="search-bar"
        placeholder="Buscar por título o empresa"
        aria-label="Buscar vacantes"
        value={value}
        onChange={(event) => onChange(event.target.value)}
    />
  )
}
