import React, { useState } from 'react';
import '../styles/CSS.css';

const CSS = () => {
  const [search, setSearch] = useState("");

  const cssList = [
    "color - Matn rangini o‘zgartiradi.",
    "background - Orqa fonni belgilaydi (rang, rasm va boshqalar).",
    "background-color - Orqa fon rangini belgilaydi.",
    "background-image - Orqa fonga rasm qo‘yadi.",
    "background-size - Fon o‘lchamini belgilaydi.",
    "background-position - Fon joylashuvini belgilaydi.",
    "width - Element kengligi.",
    "height - Element balandligi.",
    "max-width - Maksimal kenglik.",
    "min-width - Minimal kenglik.",
    "margin - Tashqi bo‘shliq.",
    "padding - Ichki bo‘shliq.",
    "border - Chegara (qalinlik, turi, rang).",
    "border-radius - Burchaklarni yumaloqlaydi.",
    "box-shadow - So‘ya beradi.",
    "text-align - Matnni tekislaydi (left, center, right).",
    "font-size - Matn o‘lchami.",
    "font-weight - Matn qalinligi.",
    "font-family - Shrift turi.",
    "line-height - Qator balandligi.",
    "letter-spacing - Harflar orasidagi masofa.",
    "display - Element ko‘rinish turi (block, inline, flex).",
    "position - Joylashuv turi (static, relative, absolute, fixed).",
    "top - Yuqoridan masofa (position bilan ishlaydi).",
    "left - Chapdan masofa.",
    "right - O‘ngdan masofa.",
    "bottom - Pastdan masofa.",
    "overflow - Sig‘magan kontentni boshqaradi.",
    "z-index - Element ustma-ust joylashuv tartibi.",
    "opacity - Shaffoflik darajasi.",
    "cursor - Sichqoncha ko‘rinishini o‘zgartiradi.",
    "transition - O‘tish animatsiyasi.",
    "transform - Elementni aylantirish, kattalashtirish.",
    "animation - Animatsiya berish.",
    "flex - Flex element o‘lchami.",
    "flex-direction - Flex yo‘nalishi.",
    "justify-content - Flex ichidagi elementlarni gorizontal tekislash.",
    "align-items - Flex ichidagi elementlarni vertikal tekislash.",
    "gap - Elementlar orasidagi masofa.",
    "grid-template-columns - Grid ustunlarini belgilaydi.",
    "grid-template-rows - Grid qatorlarini belgilaydi.",
    "object-fit - Rasm joylashuvini boshqaradi.",
    "list-style - Ro‘yxat belgisi turi.",
    "visibility - Element ko‘rinishini boshqaradi.",
    "white-space - Matnning qatorga tushishini boshqaradi."
  ];

  const filteredCSS = cssList.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className='CSS__title HTML__title'> CSS Properties </h1>
      <input className='CSS__input HTML__input' type="search" placeholder='Write the CSS Property' value={search} 
      onChange={(e) => setSearch(e.target.value)} />

      <div className='CSS__properties HTML__tags'>
        {filteredCSS.length > 0 ? (
          filteredCSS.map((item, index) => (
            <p key={index} className='property tags'> {item} </p>
          ))) : (
          <p className='property tags__not__founded'> Property topilmadi ❌</p>
        )}
      </div>
    </div>
  );
}
export default CSS;