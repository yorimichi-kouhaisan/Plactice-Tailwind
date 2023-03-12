import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const accordionList = [
    {
        id: "1",
        isOpen: false,
        summary: "What is Bookmark",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
    {
        id: "2",
        isOpen: false,
        summary: "How can I request a new browser?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
    {
        id: "3",
        isOpen: false,
        summary: "Is ther a mobile app?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
    {
        id: "4",
        isOpen: false,
        summary: "What about other Chromium browsers",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
]

const Accordion = () => {
    const [accordionListState, setAccordionList] = useState(accordionList)

    const accordionOpenClick = (event) => {
        const nextAccordionList = accordionListState.map((prevAccordion) => {
            if (prevAccordion.id === event.target.id){
                prevAccordion.isOpen = !prevAccordion.isOpen                
            }

            return {
                ...prevAccordion,
                isOpen: prevAccordion.isOpen
            }
        })
        setAccordionList(nextAccordionList)
    }

    return (
            <section id="faq-accordion">
            {/* Main Container */}
            <div className="container mx-auto px-6 mb-32">
                {/* Accordion Container */}
                <div className="max-w-2xl m-8 mx-auto overflow-hidden">
                    {accordionListState.map((accordion) => {
                        return (
                            <div key={accordion.id} className="py-1 border-b outline-none">
                                <div id={accordion.id} onClick={accordionOpenClick} className="group flex items-center justify-between py-3 text-gray-500 cursor-pointer">
                                    {/* Tab Title */}
                                    <div className="group-hover:text-red-500">{accordion.summary}</div>
                                    {/* Arrow */}
                                    <div className={`${accordion.isOpen && "-rotate-180 text-red-500"} transition duration-500`}>
                                        <FontAwesomeIcon icon={faChevronDown} className="w-4"/>
                                    </div>                                        
                                </div>
                                {/* Tab Inner Content */}
                                {accordion.isOpen && (
                                    <div className="transition duration-500 max-h-screen ease-in">
                                        <p className="py-2 text-justify text-gray-400">
                                            {accordion.content}
                                        </p>
                                    </div>                                    
                                )} 
                        </div>
                        )
                    })}
                </div>

                
            </div>
        </section>
    );
}

export default Accordion;