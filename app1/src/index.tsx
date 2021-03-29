import { FC, useState } from 'react';
import ReactDOM from 'react-dom';

const App: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello World!!!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Button</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
