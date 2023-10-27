import Validate from '../utils/Validate';
import UpdateConstants from '../models/UpdateConstant';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/OutputMsg';

class Controller {
    constructor() {
        this.VALIDATE = new Validate();
        this.UPDATE_MODEL = new UpdateConstants();
    }

    async inputVehicleName() {
        try {
            const VEHICLE_NAME = await Console.readLineAsync(OUTPUT_MSG.INPUT_VEHICLE_NAME);
            return this.UPDATE_MODEL.updateVehicleNameList(VEHICLE_NAME);
        } catch (error) {
            throw error;
        }
    }

    async inputPlayTimes() {
        try {
            const PLAY_TIME = await Console.readLineAsync(OUTPUT_MSG.INPUT_PLAY_TIME);
            return this.UPDATE_MODEL.updateGamePlayTimes(PLAY_TIME);
        } catch (error) {
            throw error;
        }
    }

    makeVehicleObject() {
        this.UPDATE_MODEL.updateObjectKeyValues()
    }

    getPlayTimeNumber() {
        return this.UPDATE_MODEL.getPlayTime();
    }

    setVehicleObjectNumber() {
        return this.UPDATE_MODEL.updateVehicleObjectValue();
    }

    findChampions(moveProcedure,champion) {
        const PROCEDURE_LENGTH = Object.values(moveProcedure).map((move) => move.length);
        const MAX_VALUE = Math.max(...PROCEDURE_LENGTH);
        Object.entries(moveProcedure).forEach((vehicle) => {
            if (vehicle[1].length === MAX_VALUE) champion.push(vehicle[0]);
        })
        return champion;
    }

}

export default Controller;