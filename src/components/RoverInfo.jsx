// src/components/RoverInfo.jsx
import { useOdometry } from '../ros/hooks/useOdometry';
import { useGNSS } from '../ros/hooks/useGNSS';
import { useConfig } from '../ros/hooks/useConfig';

export function RoverInfo() {
  const { data: odom, connected } = useOdometry();
  const { data: vel } = useConfig();
  const { data: gnss } = useGNSS();

  const x         = odom?.position.x.toFixed(3)  ?? '—';
  const y         = odom?.position.y.toFixed(3)  ?? '—';
  const theta     = odom?.position.z.toFixed(3)  ?? '—';
  const velocity  = vel?.velocity.linear.toFixed(2)  ?? '—';
  const omega     = vel?.velocity.angular.toFixed(2) ?? '—';
  const lat       = gnss?.latitude.toFixed(6) ?? '—';
  const long      = gnss?.longitude.toFixed(6) ?? '—';

  return (
    <div className="bg-black border border-red-600 rounded-lg p-3 w-64 font-mono">

      {/* title */}
      <h2 className="text-red-600 text-2xl font-bold border-b border-red-600 pb-1 mb-3">
        Rover Info
      </h2>

      {/* two column grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">

        {/* left column */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Odometry</p>
            <p className="text-gray-300">x &nbsp;&nbsp;{x}</p>
            <p className="text-gray-300">y &nbsp;&nbsp;{y}</p>
            <p className="text-gray-300">θ &nbsp;&nbsp;{theta}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Velocity</p>
            <p className="text-gray-300">{velocity} m/s</p>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Omega</p>
            <p className="text-gray-300">{omega} rad/s</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest">GNSS</p>
            <p className="text-gray-300">Lat {lat}</p>
            <p className="text-gray-300">Lon {long}</p>
          </div>
        </div>

      </div>
      <div className="mt-3 pt-2 border-t border-gray-800 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`}/>
        <span className="text-gray-600 text-xs">{connected ? 'live' : 'disconnected'}</span>
      </div>

    </div>
  );
}