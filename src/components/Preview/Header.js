import React from 'react' 

function Header(props){
    const { personal } = props;
    return (
        <div className='preview-header'>
            <div className='header-left'>
                <h2>
                    {personal.firstName.trim()} {personal.lastName.trim()}
                </h2>
                <p>{personal.jobTitle.trim()}</p>
            </div>
            <div>
                <p>{personal.phoneNumber.trim()}</p>
                <p>{personal.email.trim()}</p>
                <p>{personal.address.trim()}</p>
            </div>
        </div>
    );
}

export default Header;