import Link from 'next/link';
import React from 'react';

export default function DropdownLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} passHref>
      <div {...rest}>{children}</div>
    </Link>
  );
}
