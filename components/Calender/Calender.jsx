import React, { useState } from 'react';
import AddNote from './AddNote';
import CalenderDateContainer from './CalenderDateContainer';
import CalenderWeekContainer from './CalenderWeekContainer';
import SelectYearMonth from './SelectYearMonth';
const Calender = () => {
    const [selectYear, setSelectYear] = useState('2022');
    const [selectMonth, setSelectMonth] = useState('0');

    const [modal, setShowModal] = useState(null);

    const [AllNote, setAllNote] = useState([])

    const AddTaskHandle = e => {
        e.preventDefault();

        const title = e.target.title.value;
        const bg_color = e.target.bg_color.value?.slice(1)
        const color = e.target.color.value?.slice(1)
        const time_from = e.target.time_from.value
        const time_to = e.target.time_to.value;
        const note = e.target.note.value;
        const noteTask = {
            title, color, bg_color, time_from, time_to, note
        }

        
    }

    console.log(modal)
    return (
        <div className=''>

            <div className='m-4'>
                <SelectYearMonth
                    selectMonth={selectMonth}
                    selectYear={selectYear}
                    setSelectMonth={setSelectMonth}
                    setSelectYear={setSelectYear} />


                <div className='grid grid-cols-7 gap-2'>

                    <CalenderWeekContainer />
                    <CalenderDateContainer
                        setShowModal={setShowModal}
                        month={selectMonth}
                        year={selectYear}
                    />
                </div>

            </div>
            {
                modal &&
                <AddNote setShowModal={setShowModal} AddTaskHandle={AddTaskHandle} />
            }
        </div>
    );
};

export default Calender;