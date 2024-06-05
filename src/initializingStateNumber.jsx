//importing use State???
import react, { useState } from "react";

function InitializingStateNumber() {
  //initializing State??
  //count :مقدار stateکنونی می باشد.
  //setCount یک فانکشن که اجازه میده مقدار کنونی اپدیت کنی .
  //useState اسم هوک ما است که وظیفه ایجاد این   state را دارد.
  // مقدار صفر مقدار defaultما را در بر می گیرد .
  //یا همون initializing State

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>مقداری کنونی ما {count}</p>
      <button onClick={() => setCount(count + 1)}>کلیلک کن !!</button>
    </div>
  );
}
export default InitializingStateNumber;
