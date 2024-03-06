import { Container } from '../../container'
import { EducationDetailCard } from './education-detail-card'

export const EducationDetails = () => {
    const educationData = [
        {
            title: 'B.Tech. in Information Technology',
            location: 'LDRP Institute of Technology and Research',
            year: '2024',
        }, {
            title: 'HSC (Higher Secondary Certificate) in Science Stream',
            location: 'Devasya International School',
            year: '2020',
        }, {
            title: 'SSC (Secondary School Certificate)',
            location: 'Maharshi Sandipani School',
            year: '2018',
        },
    ]

    return (
        <Container title="My Education" hoverColor="coral-pink">
            <div className="space-y-6">

                {educationData.map((item, index) => (
                    <EducationDetailCard key={index} hoverColor="coral-pink" title={item.title} location={item.location} year={item.year} />
                ))}

            </div>
        </Container>
    )
}
