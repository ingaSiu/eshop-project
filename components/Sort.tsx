'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from './ui/button';
import { Label } from '@/components/ui/label';
import { sortTypes } from '@/constants';
import { useState } from 'react';

const Sort = () => {
  const [value, setValue] = useState('');

  const path = usePathname();
  const router = useRouter();

  const clearSort = () => setValue('');
  const handleSort = (value: string) => {
    router.push(`${path}?sort=${value}`);
    setValue(value);
  };

  return (
    <Sheet>
      <SheetTrigger className=" py-2 px-4 rounded-md font-semibold cursor-pointer hover:bg-primary">
        Sort By{' '}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-white mb-4">Sort Products:</SheetTitle>
        </SheetHeader>
        <RadioGroup value={value} onValueChange={handleSort}>
          {sortTypes.map((sortType) => (
            <div key={sortType.label} className="flex gap-4 items-center mb-2">
              <RadioGroupItem value={sortType.value} />
              <Label className="text-white">{sortType.label}</Label>
            </div>
          ))}
        </RadioGroup>
        <SheetClose asChild>
          <div className="flex flex-col gap-4 mt-4 text-white font-semibold">
            <Button onClick={clearSort}>CLEAR</Button>
            <Button onClick={() => handleSort(value)}>APPLY</Button>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Sort;
