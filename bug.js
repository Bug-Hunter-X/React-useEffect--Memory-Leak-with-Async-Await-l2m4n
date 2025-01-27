```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using async/await inside useEffect without a return function
    async function fetchData() {
      const response = await fetch('/some-data');
      const data = await response.json();
      // ...
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```