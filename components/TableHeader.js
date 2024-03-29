import React from 'react';
import { HiOutlineSortAscending } from 'react-icons/hi';
function TableHeader({ title, handleSort, order, col }) {
  return (
    <th className={'flex-1 m-0 w-1/4 '}>
      <div
        onClick={handleSort}
        className={`w-fit ${title !== 'action' ? 'hover:cursor-pointer' : ''}`}
      >
        <p
          className={
            'py-5 flex items-center gap-4 uppercase text-xs font-medium text-gray-600 '
          }
        >
          {title}
          <span
            className={`text-lg ${
              col === title ? 'text-gray-800' : 'text-gray-400'
            } ${col === title && order === 'descending' ? 'rotate-180' : ''}`}
          >
            {title !== 'action' && <HiOutlineSortAscending />}
          </span>
        </p>
      </div>
    </th>
  );
}

export default React.memo(TableHeader);
