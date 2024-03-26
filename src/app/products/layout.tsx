import React from 'react';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
export default function ProductLayout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
