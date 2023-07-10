import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';

export default function Filter() {
    const [query, setQuery] = useState('');

    const router = useRouter();
    const submitHandler = (e) => {
      e.preventDefault();
      router.push(`/search?query=${query}`);
    };
  return (
    <div>
         <form
              onSubmit={submitHandler}
              className="mx-auto  hidden w-full justify-center md:flex pl-4"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none bg-gray-200 rounded-br-none p-1 text-sm   focus:ring-0"
                placeholder="Search products"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none bg-gray-300 p-1 text-sm dark:text-black hover:bg-purple-500 duration-300"
                type="submit"
                id="button-addon2"
              >
                <SearchIcon className="h-5 w-5"></SearchIcon>
              </button>
            </form>
    </div>
  )
}

