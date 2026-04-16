import { Button } from './form/Button';

import prevIcon from '../assets/left.svg';
import nextIcon from '../assets/right.svg';

type Props = {
  current: number;
  total: number;
  nextPage?: () => void;
  prevPage?: () => void;
};

export function Pagination({ current, total, nextPage, prevPage }: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="iconSmall" onClick={prevPage} disabled={current === 1}>
        <img src={prevIcon} alt="Previous" />
      </Button>

      <span className="mx-2 flex items-center gap-2 text-sm text-gray-200">
        <p>{current}</p>
        <small>/</small>
        <p>{total}</p>
      </span>

      <Button
        variant="iconSmall"
        onClick={nextPage}
        disabled={current === total}
      >
        <img src={nextIcon} alt="Next" />
      </Button>
    </div>
  );
}
