import React from 'react';
import Header from './Header';
import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';

function Preview(props){
    const { personal, education, experience } = props;
    const educationCards = education.map((block) => {
        return <EducationCard key={block.id} education={block} />;
    });
    const experienceCards = experience.map((block) => {
        return <ExperienceCard key={block.id} experience={block} />;
    });
    return (
        <div className='preview'>
            <Header personal={personal} />
            <div className='preview-main'>
                <section className='preview-section'>
                    <h3>Description</h3>
                    <p className='description'>{personal.description.trim()}</p>
                </section>
                <section className='preview-section'>
                    <h3>Education</h3>
                    {educationCards}
                </section>
                <section className='preview-section'>
                    <h3>Experience</h3>
                    {experienceCards}
                </section>
            </div>
        </div>
    );
}

export default Preview;
