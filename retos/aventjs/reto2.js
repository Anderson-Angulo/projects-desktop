function countHours(year, holidays) {
  const work_days={
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
  }
  let numberOfOvertime = 0
  holidays.forEach(md => {
    const date =new Date(md.concat(`/${year}`))
    if(!work_days[date.getDay()]){
      return
    }
    numberOfOvertime+=2
  }); 
  return numberOfOvertime
}

const year = 2022
const holidays = ['01/06', '12/25' ,'04/01'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

console.log(countHours(year, holidays)) // 2 days -> 4 extra hours in the year