import { Search, Plane } from "lucide-react";

import Input from "@/components/input";
import Button from "@/components/button";

export default function SearchBar() {
  return (
    <div className="flex gap-4">
      <Input placeholder="Buscar aeropuertos..." iconLeft={<Search />} />

      <Button variant="primary" icon={<Plane />}>
        Buscar
      </Button>
    </div>
  );
}
