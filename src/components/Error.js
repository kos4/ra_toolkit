import React from "react";

export default function Error({text}) {
  return (
    <div className="error">Ошибка! {text}</div>
  );
}