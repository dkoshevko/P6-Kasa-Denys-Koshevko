import { useState } from 'react';
import '../styles/Collapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Collapse({ title, text, customClasses }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse-container ${customClasses}`}>
            <div className={`collapse ${customClasses}`}>
                <button className={`collapse-header ${customClasses}`} onClick={toggleCollapse}>
                    <h3 className={`collapse-title ${customClasses}`}>{title}</h3>
                    <FontAwesomeIcon
                        icon={isOpen ? faChevronDown : faChevronUp}
                        className="collapse-icon"
                        />
                </button>
                {!isOpen && (
                    <div className={`collapse-body ${customClasses}`}>
                    {text}
                    </div>
                )}
            </div>
        </div>
    );
}