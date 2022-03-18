import React from 'react' 

function ExperienceForm(props){
    const { experience, id, handleChange, handleAdd, handleDelete, isLast } = props;
    return (
        <div>
            <div className='field'>
                <label>Position</label>
                <input 
                  type='text'
                  name='position'
                  className='text-input'
                  placeholder='Position'
                  value={experience.position}
                  onChange={(e) => handleChange(e, id)}
                />
            </div>

            <div className='field'>
                <label>Company</label>
                <input 
                  type='text'
                  name='company'
                  className='text-input'
                  placeholder='Company'
                  value={experience.company}
                  onChange={(e) => handleChange(e, id)}
                />
            </div>

            <div className='field'>
                <label>Location</label>
                <input 
                  type='text'
                  name='location'
                  className='text-input'
                  placeholder='Location'
                  value={experience.location}
                  onChange={(e) => handleChange(e, id)}
                />
            </div>
            <div className='double-field'>
                <div className='field'>
                <label>From</label>
                <input 
                  type='text'
                  name='from'
                  className='text-input'
                  placeholder='From'
                  value={experience.from}
                  onChange={(e) => handleChange(e, id)}
                />
                </div>

                <div className='field'>
                <label>To</label>
                <input 
                  type='text'
                  name='to'
                  className='text-input'
                  placeholder='To'
                  value={experience.to}
                  onChange={(e) => handleChange(e, id)}
                />
                </div>
            </div>

            <div className='buttons'>
                {isLast ? (
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

export default ExperienceForm;