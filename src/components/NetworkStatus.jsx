import { useNetworkStatus } from '../ros/hooks/useNetworkStatus';

export function NetworkStatus() {
  const { devices, connected } = useNetworkStatus();

  if (!connected) return <p>Disconnected from rosbridge</p>;
  if (!devices.length) return <p>Waiting for network status...</p>;

  return (
    <div>
      <h2>Network Status</h2>
      {devices.map(device => (
        <div key={device.name}>
          <span>{device.name}</span>
          <span>{device.online ? 'Online' : 'Offline'}</span>
        </div>
      ))}
    </div>
  );
}