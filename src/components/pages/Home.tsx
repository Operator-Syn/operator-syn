import { Fragment, useEffect, useState } from "react";
import "./Home.css";
import Clock from "../clock/Clock";

export default function Home() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        import("../../data/Homepage.types").then((module) => {
            setContent(module);
        });
    }, []);

    if (!content) return null;

    const { homeContent, devLoadoutsContent, profileInfo, socialLinksContent } = content;
    const { headerPhrase, elevatorPitch, profileImage } = homeContent;

    return (
        <Fragment>
            <div className="d-flex flex-xxl-row flex-column">

                <div className="leftSide d-flex g-3 flex-column">

                    <div className="d-flex align-items-center p-3 mx-2">
                        <h1 className="m-0">{headerPhrase}</h1>
                    </div>

                    <div className="d-flex flex-xxl-row flex-column gap-3 p-3">

                        <div className="elevatorPitch p-3 rounded-border">
                            {elevatorPitch.map((item: any, index: number) => (
                                <div key={index}>
                                    <h2 className="m-0">{item.title}</h2>
                                    <hr />
                                    <p className="text-justify">{item.content}</p>
                                </div>
                            ))}
                        </div>

                        <div className="devLoadouts p-3 rounded-border">
                            <h2 className="m-0">{devLoadoutsContent.header}</h2>
                            {devLoadoutsContent.sections.map((section: any) => (
                                <div key={section.category}>
                                    <p className="m-1">{section.category}</p>
                                    <div className="d-flex flex-wrap gap-1">
                                        {section.badges.map((url: string, index: number) => (
                                            <img key={`${url}-${index}`} src={url} alt="Badge" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="rightSide d-flex flex-column justify-content-between">

                    <div className="container-fluid d-flex justify-content-center">
                        <div className="p-3">
                            <img
                                src={profileImage}
                                alt="Profile Picture"
                                className="img-thumbnai profileImage"
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-fill p-3 gap-3">

                        <div className="profileDetails flex-fill d-flex flex-column justify-content-center rounded-border">
                            {profileInfo.map((info: any) => (
                                <p key={info.label} className="text-center m-0">
                                    {info.label}: {info.value}
                                </p>
                            ))}
                        </div>

                        <div className="socialLinks p-3 rounded-border">
                            <div className="d-flex flex-wrap row-gap-2 column-gap-1 justify-content-center align-items-center">
                                {socialLinksContent.badges.map((badge: any) => (
                                    <a
                                        href={badge.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={badge.alt}
                                    >
                                        <img src={badge.img} alt={badge.alt} />
                                    </a>
                                ))}
                            </div>
                        </div>


                        <div className="etC flex-fill rounded-border d-flex flex-column p-3">
                            <div className="d-flex flex-fill align-items-center">
                                <Clock />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}
