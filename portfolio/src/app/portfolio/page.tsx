import Content from "./content";

export default function Portfolio(){
    return (
        <>
        <div className="mx-16 mt-10">
            <h1 className="text-3xl font-black">Timeline</h1>
            <div className="animate-slide-down">
            <div className="mt-8 border-solid border-l-violet-500 border-l-2 p-8 eachTimeline">
                <h3 className="font-black mb-5">
                    Education
                </h3>
                <Content imgUrl={"/assets/images/kvs.svg"} imgAlt={"kvslogo"} position={"X (Secondary) | Science"} timeperiod={"03/2013"} org={"Kendriya Vidyalaya No.1 East Hill, Calicut"}
                desc={"Graduated with 10.0 GPA"}/>
                <div className="mt-5">
                <Content position={"XII (Senior Secondary) | Science "} timeperiod={"03/2015"} org={"Kendriya Vidyalaya No.1 East Hill, Calicut"}
                desc={"Graduated with 94.4% percentage"}/>
                </div>
                <div className="mt-5">
                <Content imgUrl={"/assets/images/cetlogo.jpeg"} imgAlt={"cetlogo"} position={"Bachelor of Technology (B.Tech) | Computer Science & Engineering "} 
                timeperiod={"08/2015-05/2019"} org={"College of Engineering Trivandrum, Trivandrum"}
                desc={"Graduated with 7.65 GPA"}/>
                </div>
            </div>
            <div className="border-solid border-l-violet-500 border-l-2 p-8 eachTimeline">
                <h3 className="font-black mb-5">
                    Internships
                </h3>
                <p>asdasdasdbs askdjaskcjx ascjaksjx </p>
            </div>
            <div className="border-solid border-l-violet-500 border-l-2 p-8 eachTimeline">
                <h3 className="font-black mb-5">
                    Work Experience
                </h3>
                <Content imgUrl={"/assets/images/oracle.png"} imgAlt={"oraclelogo"} position={"Application Developer 2, Oracle, Trivandrum"} 
                timeperiod={"09/2021-current"} org={"Oracle Corporation"}/>
                <div className="mt-5">
                <Content imgUrl={"/assets/images/nissanlogo.jpeg"} imgAlt={"nissanlogo"} position={"Software Engineer 1, Nissan Digital, Trivandrum"} 
                timeperiod={"08/2019-09/2021"} org={"Nissan Digital"}/>
                </div>
            </div>
            <div className="border-solid border-l-violet-500 border-l-2 p-8 eachTimeline">
                <h3 className="font-black mb-5">
                    Freelance or Contract Work
                </h3>
                <Content imgUrl={"/assets/images/smarthatchlogo.jpeg"} imgAlt={"smarthatchlogo"} position={"Front End Developer"}
                timeperiod={"2021"} org={"Smart Hatch Technologies"} />
            </div>
            <div className="border-solid border-l-violet-500 border-l-2 p-8 eachTimeline">
                <h3 className="font-black mb-5">
                    Personal Projects
                </h3>
                <p>asdasdasdbs askdjaskcjx ascjaksjx </p>
            </div>
            <div className="border-solid border-l-violet-500 border-l-2 p-8 eachTimeline">
                <h3 className="font-black mb-5">
                    Skills and Training
                </h3>
                <p>asdasdasdbs askdjaskcjx ascjaksjx </p>
            </div>
            <div className="border-solid border-l-violet-500 border-l-2 p-8 eachTimeline">
                <h3 className="font-black mb-5">
                Achievements and Milestones
                </h3>
                <p>asdasdasdbs askdjaskcjx ascjaksjx </p>
            </div>
            </div>
        </div>
        </>
    )
}