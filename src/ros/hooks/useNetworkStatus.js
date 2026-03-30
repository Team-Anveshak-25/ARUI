// src/ros/hooks/useNetworkStatus.js
import { useTopic } from './useTopic';
import { TOPICS } from '../topics';

const DEVICES = [
  'Rover Mikrotik',
  'Base Mikrotik',
  'Jetson Orin',
  'Imou Camera',
  'Xavier',
]

export function useNetworkStatus() {
  const { msg, connected } = useTopic(
    TOPICS.NETWORK_STATUS,
    'std_msgs/Int8MultiArray',
  );

  if (!msg) return { devices: [], connected };

  return {
    connected,
    devices: [
                { name: DEVICES[0], online: msg.data[0] === 1 },
                { name: DEVICES[1], online: msg.data[1] === 1 },
                { name: DEVICES[2], online: msg.data[2] === 1 },
                { name: DEVICES[3], online: msg.data[3] === 1 },
                { name: DEVICES[4], online: msg.data[4] === 1 },
            ]
  };
}