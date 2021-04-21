import { FC, useState } from 'react';

const Profile: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Profile</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Button</button>
    </div>
  );
};

export default Profile;
