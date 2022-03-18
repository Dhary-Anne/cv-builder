import React from 'react' 

function EducationCard(props){
    const { education } = props;
    return(
        <div className='exp-card block'>
            <div className='time-range'>
                {education.from.trim()}-{education.to.trim()}
            </div>
            <div className='block-content'>
                <p>{education.institute.trim()}</p>
                <p>{education.location.trim()}</p>
                <p>Degree: {education.degree.trim()}</p>
                <p>Subject: {education.subject.trim()}</p>
            </div>
        </div>
    );
}

export default EducationCard;