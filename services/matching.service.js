var _ = require('lodash');

exports.matching = function (data){
    var workers = data.workers,
        shifts = data.shifts,
        mappings = [];

        for (var i = 0, shiftsLen = shifts.length; i < shiftsLen; i++) {

            var shiftId = shifts[i].id,
                shiftDay = shifts[i].day;

            for (var j = 0, workersLen = workers.length; j < workersLen; j++) {
                
                var workerId = workers[j].id,
                    workerDays = workers[j].availability,
                    foundIndex = _.findIndex(workerDays, function(o) {return o == shiftDay });

                    if(foundIndex >= 0){

                        var mappingsRecord = {
                            'shiftId': shiftId,
                            'workerId': workerId

                        };

                        mappings.push(mappingsRecord);
                        _.pullAt(workers[j].availability, foundIndex);
                        break;
                    }

            }
            
        }
    
        return mappings;
};