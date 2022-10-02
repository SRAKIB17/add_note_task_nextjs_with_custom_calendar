import React, { useState } from 'react';
import Clock from './Clock';
import { gridArray } from './constant';
import Plus_increase_zoom_add_new from './Plus_increase_zoom_add_new';

const CalenderDateContainer = ({ year, month, setShowModal, allNoteTask }) => {
    const [date, setDate] = useState(1);
    const getFullDate = new Date(year, month, date);
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const startIndex = getFullDate.getDay()
    const endIndex = new Date(year, month, 0)?.getDate() + startIndex


    return (
        <>
            {
                gridArray.map((date, i) =>
                    i >= startIndex && i < endIndex ?
                        <SpecificNote
                            date={date}
                            month={month}
                            year={year}
                            startIndex={startIndex}
                            setShowModal={setShowModal}
                            allNoteTask={allNoteTask}
                        />
                        :
                        <div className=''>

                        </div>
                )
            }
        </>
    );
};


const SpecificNote = ({ date, month, year, startIndex, setShowModal, allNoteTask }) => {

    const taskFor = date + month + year
    const filterTask = allNoteTask?.filter(d => d?.date == taskFor);
    console.log(filterTask);
    return (
        <div
            onClick={() => setShowModal(taskFor)}
            className='CalenderDateDayContainerActive  cursor-pointer'
        >

            <div className='bg-amber-100 relative'>
                {date - startIndex + 1}
                <div className='absolute top-1 right-1'>
                    <Plus_increase_zoom_add_new size='10' strokeColor='red' strokeWidth='10' />
                </div>
            </div>
            <div className={filterTask?.length ? 'hover:absolute hover:z-50 min-h-[200px] max-w-sm w-full hover:rounded-md hover:p-1 bg-blue-50' : ' '}>

                <div className='text-left pl-1 h-full relative  '>
                    {
                        filterTask?.map((data, i) => <div
                            key={i}

                            className='flex flex-col gap-1 rounded-md mt-1 text-xs lg:text-sm p-[2px] showDetails'
                            style={{ backgroundColor: data?.bg_color, color: data?.color }}
                        >
                            {
                                data?.title
                            }
                            <div className='taskDetails w-full p-4 flex flex-col gap-4'>
                                <div className='inline-flex w-full items-center'>
                                    <Clock size='12' />
                                    <div>
                                        {data?.time_from} - {data?.time_to}
                                    </div>
                                </div>
                                <div>
                                    {
                                        data?.note
                                    }
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}
export default CalenderDateContainer;