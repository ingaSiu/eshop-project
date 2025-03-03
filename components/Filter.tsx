'use client';

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { ChevronDown } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { filterTypes } from '@/constants';
import { useState } from 'react';

const Filter = () => {
  const path = usePathname();
  const router = useRouter();
  const searchparams = useSearchParams();
  const params = new URLSearchParams(searchparams.toString());

  const initialCategories = params.getAll('category') || [];

  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);

  const handleSelect = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  const applyFilter = () => {
    if (selectedCategories.length > 0) {
      params.delete('category');
      selectedCategories.forEach((category) => params.append('category', category));
    } else {
      params.delete('category');
    }
    router.push(`${path}?${params.toString()}`);
  };

  const clearFilter = () => {
    setSelectedCategories([]);
    params.delete('category');
    router.push(path);
  };
  return (
    <Sheet>
      <div className="flex flex-col justify-center gap-2">
        <SheetTrigger className="border border-black w-fit py-2 px-4 rounded-md flex items-center gap-2 font-semibold cursor-pointer hover:bg-primary">
          Filter By <ChevronDown className="w-4 h-4" />
        </SheetTrigger>
      </div>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-white mb-4">Filter Products by Category:</SheetTitle>
        </SheetHeader>

        <div>
          {filterTypes.map((filterType) => (
            <div key={filterType.label} className="flex gap-4 items-center mb-2">
              <Checkbox
                checked={selectedCategories.includes(filterType.value)}
                onCheckedChange={() => handleSelect(filterType.value)}
              />
              <Label className="text-white">{filterType.label}</Label>
            </div>
          ))}
        </div>

        <SheetClose asChild>
          <div className="flex flex-col gap-4 mt-4 text-white font-semibold">
            <Button onClick={clearFilter}>CLEAR</Button>
            <Button onClick={applyFilter}>APPLY</Button>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
