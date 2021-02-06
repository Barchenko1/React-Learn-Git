import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {

    // static contextType = LanguageContext;

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return(
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => this.renderSubmit(value.language)}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}

export default Button;