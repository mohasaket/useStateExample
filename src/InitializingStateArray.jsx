import React, { useState } from "react";

const InitializingStateArray = () => {
  //items:مقدار کنونی
  //setItems:فانکشنی که مقدار  کنونی را تغییر میدهد
  //مقدار دیفالت هم آرایه خالی است
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");
  //این فانکشن برای اپدیت کردن newitem که بر اساس inputvalue
  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };
  //این فانکشن  برای اضاقه کردن newitemتو Items .های آرایه است
  const handleAddItem = (event) => {
    //برای جلو گیری از رفتار پیش فرض eventمیایم این فانکشنو کال می کنیم
    // تابه browserبگوییم که رفتار پیشفرض رو لغو کنه و کنترل دقیق تری  داشته باشه
    event.preventDefault();
    //trim:برای حذف فضای خالی بین دو رشته استفاده میشه
    //شامل تب ها فاصله و خطوط جدید
    // حالا این کد میگه newItemبعد از اعمال trim()
    //اگه فضا خالی نداشت  وارد بلوک بشه

    if (newItem.trim() !== "") {
      //ایتمز که مقدارای آرایس
      //...این سه نقطه یعنی اومده میگه هرچی تو ایتمز بوده رو استخراج کن و بعد مقدار
      //newItemبهش اضاقه کن
      setItems([...items, newItem]);
      //بعدشم میگه مقدار جدید پاک کن بعد عملیات بالا
      setNewItem("");
    }
  };

  return (
    <div>
      {/* این فرم با کلیلک کاربر میاد روی ایونت onsubmitکیلیک میشه و ازآنجا که 
        وابسته به handleaddItemعملیات هنگام فشردن کلید انجام میشه */}
      <form onSubmit={handleAddItem}>
        {/* inputقراره تایپ کردن یوزر کپچر کنه  */}
        <input type="text" value={newItem} onChange={handleInputChange} />
        <button>اضافه کردن آیتم جدید</button>
        {/* حالا باید نمایش بدیم این لیست آرایه رو  */}
        <ul>
          {/*  map چیه؟؟؟ گردش در آرایه آیتم 
          و ایجاد یه لیستی که از عناصر استفاده کنه*/}
          {/* هر یه باری که میگرده تو خانه های آرایه یه مورد Itemپیدا میکنه که شناسه 
          اون indexبعد میاد استخراجش میکنه
          حالا هر المان چیه یک<li> که مقدار مشخص شده المان با key
          نمایش داده میشهو منحصر به قرده که
          در این مورد از indexاستفاده میشه  */}
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default InitializingStateArray;
