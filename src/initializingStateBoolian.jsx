import React, { useState } from "react";

const InitializingStateBoolian = () => {
  //initial state ما از جنس boolian
  //isVisible:stateکنونی
  //setIsVisible:فانکشنی که آپدیت می کنه
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
        {/* الان تو وضعیت نمایش است */}
      <button onClick={() => setIsVisible(!isVisible)}>
      موضوع  {isVisible?'مخفی':'نمایش'}   
      </button>
      {/* این شرط رو روی تین جماه گذاشتم که درصورت نمایش نشون بده */}
      {isVisible && <p>مثلا اگه داری نمایش می دی بگو چه خبرا</p>}
    </div>
  );
};

export default InitializingStateBoolian;
