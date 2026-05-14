import {
  SelectValue,
  SelectTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";

export default function LocationDropdown() {
  return (
    <Select>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="relative z-9999">
        <SelectGroup>
          {locations.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const locations = [
  "Bangkok",
  "Tokyo",
  "Seoul",
  "Dubai",
  "Manila",
  "London",
  "New York",
  "Paris",
  "Berlin",
  "Madrid",
  "Rome",
  "Lisbon",
];
