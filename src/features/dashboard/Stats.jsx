import Stat from './Stat';
import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({bookings , confirmedStays,numDays,cabinCount}) {

 // 1.
 const numbookings = bookings.length;

 // 2.
 const sales = bookings.reduce((acc,cur) => acc + cur.totalPrice,0);

 // 3.
 const checkin = confirmedStays.length;

 // 4.
  // 4. Occupancy rate calculation with safeguards
  const totalNights = confirmedStays?.reduce(
    (acc, cur) => acc + (cur.numNights || 0),
    0
  );
  const occupation =
    numDays > 0 && cabinCount > 0 ? totalNights / (numDays * cabinCount) : 0;



  return (<>
    <Stat 
       title='Bookings' 
       color="blue"
       icon = {<HiOutlineBriefcase/>}
       value={numbookings}
     />
    <Stat 
       title='Sales' 
       color="green"
       icon = {<HiOutlineBanknotes/>}
       value={formatCurrency(sales)}
     />
     <Stat 
       title='Check ins' 
       color="indigo"
       icon = {<HiOutlineCalendarDays/>}
       value={checkin}
     />
     <Stat 
       title='Occupancy rate' 
       color="yellow"
       icon = {<HiOutlineChartBar/>}
       value={Math.round(occupation * 100) + "%"}
     />
  </>
  );
}

export default Stats
