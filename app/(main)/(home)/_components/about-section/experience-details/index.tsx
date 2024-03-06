import { Container } from '../../container'
import { ExperienceDetailCard } from './experience-detail-card'

export const ExperienceDetails = () => {
    const experienceData = [
        {
            year: '2023-24',
            title: 'Project Handler (Internship)',
            location: 'TatvaSoft Sculpting Thoughts',
        }, {
            year: '2023-24',
            title: 'Project Manager (Internship)',
            location: 'Vivan Web Solution Pvt. Ltd. (Internship)',
        },
    ]

    return (
        <Container title="My Experience" hoverColor="coral-pink">
            <div>

                {experienceData.map((item, index) => (
                    <ExperienceDetailCard key={index} year={item.year} title={item.title} location={item.location} hoverColor="coral-pink" />
                ))}

            </div>
        </Container>
    )
}
