import moment from "moment";

export default {
  install(Vue) {
    Vue.prototype.$duration = {};
    Vue.prototype.$duration.durationMomentToString = (
      _durationMoment,
      type
    ) => {
      if (type == "clock") {
        let hourString = _durationMoment
          .hours()
          .toString()
          .padStart(2, "0");
        let minuteString = _durationMoment
          .minutes()
          .toString()
          .padStart(2, "0");
        let secondString = _durationMoment
          .seconds()
          .toString()
          .padStart(2, "0");
        return `${hourString}:${minuteString}:${secondString}`;
      } else if (type == "separate") {
      }
    };
    Vue.prototype.$duration.durationMomentToStringJSON = _durationMoment => {
      let data = _durationMoment._data;
      Object.keys(data).forEach(key => (data[key] = String(data[key])));
      return data;
    };
    Vue.prototype.$duration.stringToDurationMoment = _durationString => {
      // remove whitespace
      let newDuration = _durationString.replace(/ /g, "");
      /*
        Parse the duration String and convert to Duration object.
        match one of:
        1 - X:Y, :Y
        2 - Xh, XhY, XhYm
        3 - Xm, X (just a digit, inferred to be number of minutes)
      */
      let regexps = [
        /^(\d*):(\d+){1,2}$/,
        /^(\d*)[Hh]+(\d*){1,2}[Mm]?$/,
        /^(\d*)[Mm]?$/
      ];
      // loop through allowed formats to figure out which format was used
      for (let re of regexps) {
        // if there is a match with the input, splice the hours and minutes
        let match = newDuration.match(re);
        if (match) {
          let durationMoment;

          /* String.match returns for each input:
            1 - 4h30 : ["entire string", "hour group", "minute group"]
                       ["4h30", "4", "30"]
            2 - 4h : ["entire string", "hour group", ""]
                     ["4h30", "4", ""]
            3 - 30 : ["entire string", "minute group"]
                     ["30", "30"]
            Based on the length of this array and whether the last element is "",
            one can figure out the hour and minutes inputted
          */
          if (match.length == 3) {
            // hours (and potentially minutes)
            durationMoment = moment.duration({
              hours: match[1],
              // check if minutes exists
              minutes: match[2] ? match[2] : 0
            });
          } else {
            // only minutes
            durationMoment = moment.duration({
              minutes: match[1]
            });
          }
          return durationMoment;
        }
      }
      // no matches were found
      return false;
    };
  }
};
