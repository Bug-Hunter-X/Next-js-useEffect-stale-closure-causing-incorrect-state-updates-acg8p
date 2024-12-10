```javascript
import {useEffect, useState} from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timeoutId = setTimeout(() => {
      setCount(count + 1); //Bug: using previous state value
    }, 1000);

    return () => clearTimeout(timeoutId); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```