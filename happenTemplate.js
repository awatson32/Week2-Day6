var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){},
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){return String(new Date().getSeconds());},
			DblDigit: function(){}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){return String(new Date().getMinutes());},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {return String(new Date().getHours());},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                var d = new Date();
                return days[d.getDay()];
            },
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){},
					DateDblDigit: function(){}
				}
			})(),
			MonthNumber: function(){return String(new Date().getMonth() + 1);},
			MonthNumberDblDigit: function(){return String('0' + new Date().getMonth() + 1).slice(-2);},
			AbrOfCurrentMonth: function(){},
			CurrentMonth: function(){}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){},
			YearAbr: function(){}
		}
	})(),
	Defaults: function(){}
  }
})();