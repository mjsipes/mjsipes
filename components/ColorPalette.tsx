import React from "react";

const ColorPalette = () => {
  return (
    <div className="flex flex-row gap-4">
      <div>
        <div className="text-sipes-blue">sipes blue</div>
        <div className="text-sipes-green">sipes green</div>
        <div className="text-sipes-orange">sipes orange</div>
      </div>
      <div>
        <div className="text-sipes-yellow">sipes yellow</div>
        <div className="text-sipes-purple">sipes purple</div>
        <div className="text-sipes-red">sipes red</div>
      </div>
    </div>
  );
};

export default ColorPalette;
