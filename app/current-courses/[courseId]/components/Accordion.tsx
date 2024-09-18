import React, { useState } from 'react';

const AccordionComponent = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const accordionItems = Array(8).fill(null).map((_, index) => ({
        id: index + 1,
        title: `Unit ${index + 1} - Getting Started`,
        lessons: '4 Lessons',
        time: '1 hr 25 mins',
        objectives: [
            'Create an ABAP Cloud project',
            'Work with a development object',
            'Create an ABAP package',
            'Create a "Hello World" application',
        ],
        content: [
            'Preparing the Development Environment',
            'Taking a First Look at ABAP',
            'Understanding Software Structure and Logistics',
            'Developing Your First ABAP Program',
        ]
    }));

    const handleToggle = (id: number) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="container my-5">
            <div className="accordion" id="accordionExample">
                {accordionItems.map(item => (
                    <div key={item.id} className="accordion-item">
                        <h2 className="accordion-header" id={`heading${item.id}`}>
                            <button
                                className={`accordion-button ${activeIndex === item.id ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => handleToggle(item.id)}
                                aria-expanded={activeIndex === item.id ? 'true' : 'false'}
                                aria-controls={`collapse${item.id}`}
                            >
                                <div className="d-flex w-100">
                                    <div className="me-3">
                                        <i className={`fas ${activeIndex === item.id ? 'fa-minus' : 'fa-plus'}`}></i> {/* Toggle icon */}
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold">{item.title}</span>
                                            <div className="d-flex">
                                                <span className="d-flex align-items-center me-3">
                                                    <i className="fas fa-book me-1"></i> {/* Lesson number icon */}
                                                    {item.lessons}
                                                </span>
                                                <span className="d-flex align-items-center">
                                                    <i className="fas fa-clock me-1"></i> {/* Lesson time icon */}
                                                    {item.time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div
                            id={`collapse${item.id}`}
                            className={`accordion-collapse collapse ${activeIndex === item.id ? 'show' : ''}`}
                            aria-labelledby={`heading${item.id}`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h6>After completing this unit, you will be able to:</h6>
                                        <ul>
                                            {item.objectives.map((objective, index) => (
                                                <li key={index}>{objective}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5>Content:</h5>
                                        <ul className="list-unstyled">
                                            {item.content.map((content, index) => (
                                                <li key={index} className="d-flex align-items-center">
                                                    <i className="fas fa-circle me-2 text-muted"></i> {/* Empty circle icon */}
                                                    {content}
                                                </li>
                                            ))}
                                        </ul>
                                        <a href="#" className="text-primary">...See more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccordionComponent;
