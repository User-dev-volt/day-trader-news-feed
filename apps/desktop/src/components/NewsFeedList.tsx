import React from 'react';

const NewsFeedList: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto">
      <ul className="p-4">
        {/* Placeholder items */}
        <li className="border-b border-gray-700 p-4">
          <h2 className="text-xl font-bold">Placeholder Title 1</h2>
          <p className="text-gray-400">This is a placeholder for a news article summary.</p>
        </li>
        <li className="border-b border-gray-700 p-4">
          <h2 className="text-xl font-bold">Placeholder Title 2</h2>
          <p className="text-gray-400">This is a placeholder for a news article summary.</p>
        </li>
        <li className="border-b border-gray-700 p-4">
          <h2 className="text-xl font-bold">Placeholder Title 3</h2>
          <p className="text-gray-400">This is a placeholder for a news article summary.</p>
        </li>
      </ul>
    </div>
  );
};

export default NewsFeedList;
