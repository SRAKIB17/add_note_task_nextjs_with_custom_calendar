import React, { useState } from 'react';
import { gridArray } from './constant';
import Plus_increase_zoom_add_new from './Plus_increase_zoom_add_new';

const CalenderDateContainer = ({ year, month, setShowModal }) => {
    const [date, setDate] = useState(1);
    const getFullDate = new Date(year, month, date);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const startIndex = getFullDate.getDay()
    const endIndex = new Date(year, month, 0)?.getDate() + startIndex


    return (
        <>
            {
                gridArray.map((data, i) =>
                    i >= startIndex && i < endIndex ?
                        <div
                            onClick={() => {
                                const taskFor = {
                                    data, month, year
                                }
                                setShowModal(taskFor)
                            }
                            }
                            className='CalenderDateDayContainerActive cursor-pointer'
                        >

                            <div className='bg-amber-100 relative'>
                                {data - startIndex + 1}
                                <div className='absolute top-1 right-1'>
                                    <Plus_increase_zoom_add_new size='10' strokeColor='red' strokeWidth='10' />
                                </div>
                            </div>
                        </div>
                        :
                        <div className=''>

                        </div>
                )
            }
        </>
    );
};

export default CalenderDateContainer;