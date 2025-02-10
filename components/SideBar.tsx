import { Checkbox } from './ui/checkbox';
import { sortTypes } from '@/constants';

const SideBar = () => {
  return (
    <aside>
      <div>Home link</div>

      <nav>
        <ul className="flex flex-1 flex-col gap-6 ml-4">
          {sortTypes.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <Checkbox />
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
