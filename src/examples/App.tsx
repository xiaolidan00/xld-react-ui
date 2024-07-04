import type { FC } from 'react';
import * as Comps from '../index';
import React from 'react';
console.log(Comps);
const App: FC = () => {
  const list: any = [];
  for (const k in Comps) {
    const El = Comps[k as keyof typeof Comps];
    list.push(
      <div key={k}>
        {k}:<El>{k}</El>
      </div>
    );
  }
  return <>{list}</>;
};
export default App;
