'use client';

import { ChevronDown, X } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from './ui/button';
import { Label } from '@/components/ui/label';
import { sortTypes } from '@/constants';

const Sort = () => {
  const path = usePathname();
  const router = useRouter();
  const searchparams = useSearchParams();

  const currentSort = searchparams.get('sort') || '';

  const handleSort = (value?: string) => {
    const params = new URLSearchParams(searchparams.toString());

    if (!value) {
      params.delete('sort');
    } else {
      params.set('sort', value);
    }

    router.push(`${path}?${params.toString()}`);
  };

  const selectedSortLabel = sortTypes.find((sortType) => sortType.value === currentSort)?.label;

  return (
    <Sheet>
      <div className="flex flex-col justify-center gap-2">
        <SheetTrigger className="border border-black w-fit py-2 px-4 rounded-md flex items-center gap-2 font-semibold cursor-pointer hover:bg-primary">
          Sort By <ChevronDown className="w-4 h-4" />
        </SheetTrigger>
        {currentSort && (
          <Button
            onClick={() => handleSort()}
            variant="ghost"
            className="w-fit border border-black rounded-xl hover:bg-slate-100"
          >
            {selectedSortLabel}{' '}
            <span>
              <X className="w-4 h-4" />
            </span>
          </Button>
        )}
      </div>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-white mb-4">Sort Products:</SheetTitle>
        </SheetHeader>
        <RadioGroup value={currentSort} onValueChange={handleSort}>
          {sortTypes.map((sortType) => (
            <div key={sortType.label} className="flex gap-4 items-center mb-2">
              <RadioGroupItem value={sortType.value} />
              <Label className="text-white">{sortType.label}</Label>
            </div>
          ))}
        </RadioGroup>
        <SheetClose asChild>
          <div className="flex flex-col gap-4 mt-4 text-white font-semibold">
            <Button onClick={() => handleSort()}>CLEAR</Button>
            <Button onClick={() => handleSort(currentSort)}>APPLY</Button>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Sort;
