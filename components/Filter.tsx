'use client';

import { ChevronDown, X } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from '@/components/ui/label';
import { filterTypes } from '@/constants';

const Filter = () => {
  const handleFilter = () => {};
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
              <Checkbox value={filterType.value} />
              <Label className="text-white">{filterType.label}</Label>
            </div>
          ))}
        </div>

        <SheetClose asChild>
          <div className="flex flex-col gap-4 mt-4 text-white font-semibold">
            <Button onClick={() => {}}>CLEAR</Button>
            <Button onClick={() => {}}>APPLY</Button>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
