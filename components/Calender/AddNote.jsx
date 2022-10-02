import React from 'react';

const AddNote = ({ setShowModal, AddTaskHandle }) => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='fixed -top-4 w-full  sm:max-w-sm mx-auto '>;
                    <form action="" className='flex pt-12 flex-col gap-2 w-full top-[50%] p-10 absolute bg-sky-100' onSubmit={AddTaskHandle}>

                        <button
                            onClick={() => setShowModal(null)}
                            className='absolute right-10 top-2 bg-red-500  rounded-full h-7 text-center flex-col flex items-center justify-center w-7 hover:bg-red-400 text-white capitalize'>
                            x
                        </button>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <label htmlFor="title" className='flex items-center gap-2'>
                                            Title :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="text"
                                            id='title'
                                            name='title'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8 rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>


                                <tr>
                                    <th>
                                        <label htmlFor="color" className='flex items-center gap-2'>
                                            Color :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="color"
                                            id='color'
                                            name='color'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-10  rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <label htmlFor="bg_color" className='flex items-center gap-2'>
                                            Bg Color :
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="color"
                                            id='bg_color'
                                            name='bg_color'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-10  rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <label htmlFor="time_from" className='flex items-center gap-2'>
                                            From
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="time"
                                            id='time_from'
                                            name='time_from'
                                            required
                                            className='border max-w-sm w-full border-r-purple-200 h-8  rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <label htmlFor="time_to" className='flex items-center gap-2'>
                                            To
                                        </label>
                                    </th>
                                    <td>
                                        <input
                                            type="time"
                                            id='time_to'
                                            name='time_to'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8  rounded-md focus:outline-none'
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        <label htmlFor="note" className='flex items-center gap-2'>
                                            Note :
                                        </label>
                                    </th>
                                    <td>
                                        <textarea
                                            type="text"
                                            id='note'
                                            name='note'
                                            required
                                            className='border  max-w-sm w-full border-r-purple-200 h-8 rounded-md focus:outline-none'
                                        />
                                    </td>

                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <button className='bg-green-300 p-2 rounded-md h-10 hover:bg-green-500'>
                                            Add
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNote;