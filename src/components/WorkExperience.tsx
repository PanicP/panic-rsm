// @ts-nocheck

import styled from 'styled-components'
import { BlockWithBackground } from './BlockWithBackground'
import { Carousel } from './Carousel'
import internal from '../assets/workexperience/internal.png'
import satang1 from '../assets/workexperience/satang1.png'
import satang2 from '../assets/workexperience/satang2.png'
import satang3 from '../assets/workexperience/satang3.png'
import hive1 from '../assets/workexperience/hive1.png'
import hive2 from '../assets/workexperience/hive2.png'
import hive3 from '../assets/workexperience/hive3.png'
import fg1 from '../assets/workexperience/fg1.png'
import fg2 from '../assets/workexperience/fg2.png'
import fg3 from '../assets/workexperience/fg3.png'
import kp1 from '../assets/workexperience/kp1.png'
import kp2 from '../assets/workexperience/kp2.png'
import kp3 from '../assets/workexperience/kp3.png'

const data = [
    {
        images: [satang1, satang2, satang3],
        header: 'Front-End Developer',
        subHeader: 'Satang Corporation Co., Ltd., Bangkok, Thailand',
        date: 'February 2022 - September 2022',
        website: 'https://satangcorp.com/',
        details: [
            '● Created and developed features related to cryptocurrencies.',
            '● Maintained trading capabilities.',
            '● Managed and distributed works within frontend team',
        ],
    },
    {
        images: [hive1, hive2, hive3],
        header: 'Back-End Developer',
        subHeader: 'Hive Ventures Co., Ltd., Bangkok, Thailand',
        date: 'July 2021 - February 2022',
        website: 'https://www.hivecorps.com/',
        details: [
            '● Created and developed company services related to companies, brands, and branches.',
            '● Created and developed food services related to groups of menus, menus, and menu options.',
            '● Developed and maintained other services such as notification service and resource service.',
        ],
    },
    {
        images: [internal],
        header: 'Front-End Developer',
        subHeader: 'Appman Co., Ltd., Bangkok, Thailand',
        date: 'March 2021 - June 2021',
        website: 'https://www.appman.co.th/',
        details: [
            '● Developed new features and maintained insurance platforms.',
        ],
    },
    {
        images: [fg1, fg2, fg3],
        header: 'Middle Front-End Developer',
        subHeader: 'Fillgoods Technology Co., Ltd., Bangkok, Thailand',
        website: 'https://www.fillgoods.co/',
        date: 'September 2020 - February 2021',
        details: [
            '● Created new features on a customer site about shop management.',
            '● Developed a new platform that supports customer service.',
        ],
    },
    {
        images: [kp1, kp2, kp3],
        header: 'Junior Front-End Developer',
        subHeader: 'King Power Click Co., Ltd., Bangkok, Thailand',
        date: 'February 2019 - September 2020',
        website: 'https://www.kingpower.com/',
        details: [
            '● Created new features, functionality, and capabilities on King Power’s eCommerce site.',
            '● Developed and maintained a back office site (partial ERP site) for officers who work behind an eCommerce site.',
            '● Collaborated with designers to ensure designs were efficient and technically sound.',
        ],
    },
    {
        images: [internal],
        header: 'Software Developer',
        subHeader: 'Bangkok Bank IT Division, Bangkok, Thailand',
        date: 'August 2017 - February 2019',
        website: 'https://www.bangkokbank.com/',
        details: [
            '● Developed and implemented programs that support an online banking team to store their documents during non-working time.',
            '● Developed and implemented a shell script that transfers data between 2 servers and imports data into the database.',
            '● Adjusted stored procedures in the team’s web application.',
            '● Supported users who use the team’s web application.',
        ],
    },
    {
        images: [internal],
        header: 'Software & Hardware Developer (Internship)',
        subHeader: 'Innovative Experiment (INEX), Bangkok, Thailand',
        date: 'June 2016 - July 2016',
        website: 'https://inex.co.th/',
        details: [
            '● Analyzed 3D printer hardware kit.',
            '● Analyzed 3D printers with software.',
            '● Developed a new product by using INEX’s hardware.',
        ],
    },
]

export const WorkExperience: React.FC = ({ fRef }: { fRef: HTMLElement }) => {
    return (
        <BlockWithBackground
            fRef={fRef}
            color="darkblue"
            header="Work Experience"
        >
            <Container>
                {data.map((item, index) => (
                    <Section key={index + item.header}>
                        <LeftSection>
                            <CarouselContainer>
                                <Carousel
                                    isBackground={false}
                                    images={item.images}
                                    arrowColor="bisque"
                                />
                            </CarouselContainer>
                        </LeftSection>
                        <RightSection>
                            <ContainerDetail
                                header={item.header}
                                subHeader={item.subHeader}
                                date={item.date}
                                website={item?.website}
                                details={item.details}
                            />
                        </RightSection>
                    </Section>
                ))}
            </Container>
        </BlockWithBackground>
    )
}

const ContainerDetail = ({
    header,
    subHeader,
    date,
    website,
    details,
}: {
    header: string
    subHeader: string
    date: string
    website: string
    details: Array<string>
}) => (
    <div>
        <Header>{header}</Header>
        <SubHeader>{subHeader}</SubHeader>
        <Date>{date}</Date>
        {website && (
            <Website>
                Site&nbsp;:&nbsp;
                <a href={website} target="_blank">
                    {website}
                </a>
            </Website>
        )}
        <Detail>
            {details.map((detail, index) => (
                <div key={index + detail}>{detail}</div>
            ))}
        </Detail>
    </div>
)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
`

const Section = styled.div`
    display: flex;
`

const LeftSection = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
`

const RightSection = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    font-size: 2rem;
`

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
`

const Header = styled.div`
    font-size: 2rem;
`

const SubHeader = styled.div`
    font-size: 2rem;
`

const Date = styled.div`
    font-size: 1.5rem;
`

const Website = styled.a`
    font-size: 1.5rem;

    a {
        color: pink;
    }
`

const Detail = styled.div`
    font-size: 1rem;
`
