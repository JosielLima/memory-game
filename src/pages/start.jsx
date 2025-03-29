import React from 'react';
import { useAtom } from 'jotai';
import { gameState } from '../components/atoms';

const counter = gameState(0);

export default function Start() {
  const [count, setCounter] = useAtom(counter);
  const onClick = () => setCounter(prev => prev + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}
