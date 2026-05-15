import type { Dispatch, SetStateAction } from "react";
import {
  SelectValue,
  SelectTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Select
      value={location}
      onValueChange={(value) => value && setLocation(value)}
    >
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
  "Hyderabad",
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
