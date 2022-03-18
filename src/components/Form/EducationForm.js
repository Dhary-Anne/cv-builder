import React from 'react';

function EducationForm(props){
    const { id, education, handleChange, handleAdd, handleDelete, isLast } = props;
    return (
        <div>
            <div className='field'>
                <label>Name of Institution</label>
                <input
                     type='text'
                     name='institute'
                     className='text-input'
                     placeholder='Institution Name'
                     value={education.institute}
                     onChange={(e) => handleChange(e, id)} />
            </div>

            <div className='field'>
                <label>Location</label>
                <input
                     type='text'
                     name='location'
                     className='text-input'
                     placeholder='Location'
                     value={education.location}
                     onChange={(e) => handleChange(e, id)} />
            </div>

            <div className='field'>
                <label>Degree</label>
                <input
                     type='text'
                     name='degree'
                     className='text-input'
                     placeholder='Degree'
                     value={education.degree}
                     onChange={(e) => handleChange(e, id)} />
            </div>

            <div className='field'>
                <label>Subject</label>
                <input
                     type='text'
                     name='subject'
                     className='text-input'
                     placeholder='Subject'
                     value={education.subject}
                     onChange={(e) => handleChange(e, id)} />
            </div>

         <div className='doudle-field'>
            <div className='field'>
                <label>From</label>
                <input
                     type='text'
                     name='from'
                     className='text-input'
                     placeholder='From'
                     value={education.from}
                     onChange={(e) => handleChange(e, id)} />
            </div>

            <div className='field'>
                <label>To</label>
                <input
                     type='text'
                     name='to'
                     className='text-input'
                     placeholder='To'
                     value={education.to}
                     onChange={(e) => handleChange(e, id)} />
            </div>
        </div>
        
        <div className='buttons'>
            {isLast ?  (
                <button className='btn add-btn' onClick={handleAdd}>
                    Add
                </button>
            ) : null}
            <button className='btn delete-btn' onClick={() => handleDelete(id)}>
                Delete
            </button>
        </div>

        </div>
    );
}
export default EducationForm;