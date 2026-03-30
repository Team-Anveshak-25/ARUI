// import { useNetworkStatus } from '../ros/hooks/useNetworkStatus';


// This below section is for only testing
const useNetworkStatus = () => ({
  connected: true,
  devices: [
    { name: 'Orin', ip: '10.42.0.253', online: true },
    { name: 'Xavier', ip: '10.42.0.51', online: true },
    { name: 'IMOU', ip: '10.42.0.69', online: false },
    { name: 'Rover Mikrotik', ip: '10.42.0.100', online: false },
    { name: 'Base Mikrotik', ip: '10.42.0.99', online: false },
  ]
})

export function NetworkStatus() {
  const { devices, connected } = useNetworkStatus();

  if (!connected) return <p>Disconnected from rosbridge</p>;
  if (!devices.length) return <p>Waiting for network status...</p>;

  return (
    <div className= "bg-black border-2 border-red-600 rounded-xl p-3 flex flex-col gap-2 w-fit font-mono">
      <h2 className="text-red-600 font-semibold text-left mb-1 text-2xl border-b">Network Status</h2>
      {devices.map(device => (
        <div key={device.name} className="grid grid-cols-[1fr_1.1fr_0.25fr] items-center px-2 py-1">
          <span className="text-gray-300 font-bold text-sm">{device.name}</span>
          <span className="text-gray-600 text-sm text-center">{device.ip}</span>
          <div className="flex justify-end">
            <div className={`w-3 h-3 rounded-full ${device.online ? 'bg-green-500' : 'bg-red-500'}`} />
          </div>
        </div>
      ))}
    </div>
  );
}