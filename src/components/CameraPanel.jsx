import { useState, useCallback } from "react";

const CAMERAS = [
  { id: 1, label: "Camera 1" },
  { id: 2, label: "Camera 2" },
  { id: 3, label: "Camera 3" },
  { id: 4, label: "Camera 4" },
];

const CONTROLS = [
  { key: "brightness", label: "Brightness", min: 0, max: 100, default: 50 },
  { key: "zoom", label: "Zoom", min: 1, max: 10, default: 1 },
  { key: "contrast", label: "Contrast", min: 0, max: 100, default: 50 },
];

const defaultState = () =>
  Object.fromEntries(CONTROLS.map((c) => [c.key, c.default]));

const initialState = Object.fromEntries(
  CAMERAS.map((cam) => [cam.id, defaultState()])
);

function CameraBlock({ cam, values, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
        {cam.label}
      </p>

      {CONTROLS.map((ctrl) => (
        <div key={ctrl.key} className="flex items-center gap-2">
          <span className="text-gray-300 text-xs w-16">{ctrl.label}</span>
          <input
            type="range"
            min={ctrl.min}
            max={ctrl.max}
            value={values[ctrl.key]}
            onChange={(e) => onChange(cam.id, ctrl.key, Number(e.target.value))}
            className="cam-slider flex-1"
          />
          <span className="text-gray-500 text-xs w-5 text-right tabular-nums">
            {ctrl.key === "zoom" ? `${values[ctrl.key]}x` : values[ctrl.key]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CameraPanel() {
  const [state, setState] = useState(initialState);

  const handleChange = useCallback((camId, key, value) => {
    setState((prev) => ({
      ...prev,
      [camId]: { ...prev[camId], [key]: value },
    }));
  }, []);

return (
  <>
    <style>{`
      .cam-slider {
        -webkit-appearance: none;
        appearance: none;
        height: 3px;
        background: #1f2937;
        outline: none;
        border-radius: 0;
        cursor: pointer;
      }
      .cam-slider::-webkit-slider-runnable-track {
        height: 3px;
        background: #dc2626;
        border-radius: 0;
      }
      .cam-slider::-moz-range-track {
        height: 3px;
        background: #1f2937;
        border-radius: 0;
      }
      .cam-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 8px;
        height: 8px;
        background: #dc2626;
        border-radius: 1;
        cursor: pointer;
        margin-top: -3px;
      }
      .cam-slider::-moz-range-thumb {
        width: 8px;
        height: 8px;
        background: #dc2626;
        border-radius: 1;
        cursor: pointer;
        border: none;
      }
    `}</style>

    {/* Card — identical wrapper to RoverInfo */}
    <div className="bg-black border-2 border-red-600 rounded-lg p-3 font-mono">

      {/* Title — identical to RoverInfo */}
      <h2 className="text-red-600 text-2xl font-bold border-b border-red-600 pb-1 mb-3">
        Camera Panel
      </h2>

      {/* 2×2 camera grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <CameraBlock cam={CAMERAS[0]} values={state[1]} onChange={handleChange} />
        <CameraBlock cam={CAMERAS[2]} values={state[3]} onChange={handleChange} />
        <CameraBlock cam={CAMERAS[1]} values={state[2]} onChange={handleChange} />
        <CameraBlock cam={CAMERAS[3]} values={state[4]} onChange={handleChange} />
      </div>

    </div>
  </>
);
}