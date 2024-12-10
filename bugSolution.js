```javascript
import {useEffect, useState} from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1); // Correct: using functional update
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return <div>Count: {count}</div>;
}
```