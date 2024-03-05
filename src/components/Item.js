import React from "react";
import { memo } from "react";

export const Item = memo(({ id, value, onChange }) => {
  return (
    <form className="Item">
      <h5 className="Item-render">
        Re-Render{(Math.random() * 100).toFixed()}
      </h5>
      <label className="Item-label" htmlFor="text">
        Item
      </label>
      <input
        className="Item-Input"
        type="text"
        name="text"
        id="text"
        onChange={(e) => onChange(id, e.target.value)}
        value={value}
      />
    </form>
  );
});
