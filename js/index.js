
let year = parseInt(document.getElementById('year').value);
  let result =  document.getElementById('result')

const isLeapYear =()=> {
  let year = parseInt(document.getElementById('year').value);
			if(year %4 ===0 && year%100===0) {
				if(year%400===0) {
				result.innerText= year+ " is Leap year";
				}
				else
					result.innerText= year+ " is not Leap year";
			}
			else if(year%4===0 && year%100!==0) {
				result.innerText= year+ " is Leap year";
			}
			else
				result.innerText= year + " is not Leap year";
		}

document.querySelector('button').addEventListener("click",isLeapYear)


