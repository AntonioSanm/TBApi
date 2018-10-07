var _ = require('lodash');

exports.matching = function (data, payrate = false){
    var workers = data.workers,
        shifts = data.shifts,
        mappings = [];

        for (var i = 0, shiftsLen = shifts.length; i < shiftsLen; i++) {

            var shiftId = shifts[i].id,
                shiftDay = shifts[i].day,
                payrateData = {
                    [shiftDay]:[],
                    'shiftId': shiftId
                };

            for (var j = 0, workersLen = workers.length; j < workersLen; j++) {
                
                var found = false,
                    workerId = workers[j].id,
                    workerDays = workers[j].availability,
                    foundIndex = _.findIndex(workerDays, function(o) {return o == shiftDay });

                    switch (payrate){
                        case false:
                            if(foundIndex >= 0){

                                var mappingsRecord = {
                                    'shiftId': shiftId,
                                    'workerId': workerId
        
                                };
        
                                mappings.push(mappingsRecord);
                                _.pullAt(workers[j].availability, foundIndex);
                                found = true;
                            }
                        break;

                        case true:
                            if(foundIndex >= 0){
                                var workerInfo = {
                                    'workerId': workerId,
                                    'payrate': workers[j].payrate
                                };
                                payrateData[shiftDay].push(workerInfo);
                                mappings.push(payrateData);

                            }
                        break;
                    }

                    if (found) break;

            }

        }

        if(payrate){
            
            var shiftsArray = Array.from(new Set(mappings.map(e => JSON.stringify(e)))).map(e => JSON.parse(e)),
                totalCost = 0;

            mappings = [];

            for (var i = 0, shiftsArrayLen = shiftsArray.length; i < shiftsArrayLen; i++) {

                var day = Object.keys(shiftsArray[i])[0];
                var lowestPayrate = undefined;
                var workerId = null;

                for (var j = 0, dayArrayLen = shiftsArray[i][day].length; j < dayArrayLen; j++){

                    if(shiftsArray[i][day][j].payrate < lowestPayrate || lowestPayrate === undefined){
                        lowestPayrate = shiftsArray[i][day][j].payrate;
                        workerId = shiftsArray[i][day][j].workerId;
                    }
                    
                }

                var mappingsRecord = {
                    'shiftId': shiftsArray[i].shiftId,
                    'workerId': workerId
                } 

                if(lowestPayrate === undefined) lowestPayrate = 0;
                totalCost += lowestPayrate;

                mappings.push(mappingsRecord);
            }
            
            var response = {
                'mappings': mappings,
                'totalCost': totalCost

            }
            return response;
        }

        return mappings;
};

exports.worker_matchingDatabase = function (data){
    
    return exports.matching(data, true);
}