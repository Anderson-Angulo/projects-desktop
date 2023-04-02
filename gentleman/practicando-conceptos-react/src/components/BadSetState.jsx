import { useCallback, useState } from "react";

export default function BadSetState() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleDelayedIncrement = useCallback(() => {
    // counter + 1 is the problem,
    // because the counter can be already different, when callback invokes
    setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter]);

  return (
    <div>
      <h1>{`Counter is ${counter}`}</h1>
      {/* This handler works just fine */}
      <button onClick={handleIncrement}>Instant increment</button>
      {/* Multi-clicking that handler causes unexpected states updates */}
      <button onClick={handleDelayedIncrement}>Delayed increment</button>
    </div>
  );
}