import React, { useState } from "react";

const InitializingStateString = () => {
  //textمقدار کنونی input را در خود نگه میدارد
  //setText فانکشنی که مقدار کنونی input را اپدیت می کند.
  //مقدار input از جنس رشته است که داخل initialzing state وجود دارد
  const [text, setText] = useState("");
  //این فانکشن میاد هر وقت که یوزر تایپ میکنه اون مقدار اپدیت می کنه
  const HandleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      {/* inputمیاد نوشته کاربر را کپچر  می کنه  */}
      <input
        type="text"
        value={text}
        onChange={HandleChange}
        placeholder="typing ...."
      />
      <h4>you Typed :{text}</h4>
    </div>
  );
};

export default InitializingStateString;
