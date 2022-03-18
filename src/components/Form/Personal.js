import React from 'react' 

function Personal(props){
    const { personal, handleChange } = props;
    return (
        <section className='personal-info'>
            <h2>Personal Information</h2>
            <div className='double-field'>
                <div className='field'>
                    <label>First Name</label>
                    <input
                      type='text'
                      name='firstName'
                      className='text-input'
                      placeholder='First Name'
                      value={personal.firstName}
                      onChange={handleChange}
                    />
                </div>
                <div className='field'>
                    <label>Last Name</label>
                    <input
                      type='text'
                      name='lastName'
                      className='text-input'
                      placeholder='Last Name'
                      value={personal.lastName}
                      onChange={handleChange}
                    />
                </div>
            </div>
            <div className='field'>
                <label>Job Title</label>
                <input
                  type='text'
                  name='jobTitle'
                  className='text-input'
                  placeholder='Job Title'
                  value={personal.jobTitle}
                  onChange={handleChange}
                />
            </div>

            <div className='field'>
                <label>Phone Number</label>
                <input
                  type='text'
                  name='phoneNumber'
                  className='text-input'
                  placeholder='Phone Number'
                  value={personal.phoneNumber}
                  onChange={handleChange}
                />
            </div>

            <div className='field'>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  className='text-input'
                  placeholder='Email'
                  value={personal.email}
                  onChange={handleChange}
                />
            </div>

            <div className='field'>
                <label>Address</label>
                <input
                  type='text'
                  name='address'
                  className='text-input'
                  placeholder='Address'
                  value={personal.address}
                  onChange={handleChange}
                />
            </div>

            <div className='field'>
                <label>Desctiption</label>
                <textarea
                  name='description'
                  cols='30'
                  rows='5'
                  placeholder='Briefly describe yourself and your achievements'
                  value={personal.description}
                  onChange={handleChange}
                />
            </div>
        </section>
    );
}

export default Personal;