import {
  Characteristic,
  CharacteristicGetHandler,
  CharacteristicSetHandler,
  CharacteristicValue,
  Nullable
} from 'homebridge';

import { AccessoryThisType } from '../VeSyncAccessory.ts';

const characteristic: {
  get: CharacteristicGetHandler;
} & AccessoryThisType = {
  get: async function (): Promise<Nullable<CharacteristicValue>> {
    const { PURIFYING_AIR, INACTIVE } =
      this.platform.Characteristic.CurrentAirPurifierState;

    return this.device.isOn ? PURIFYING_AIR : INACTIVE;
  }
};

export default characteristic;
