import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Link, useLocation, withRouter } from 'react-router-dom';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/ext-language_tools";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

const SolveAssignment = (props) => {
    const [code, setCode] = useState("");
    const [theme, setTheme] = useState("github");
    const { state: { assignment } } = useLocation();    
    const themes = [ 'github', 'monokai', 'tomorrow', 'xcode', 'solarized_dark', 'solarized_light']
    const onCodeChange = (value) => {
        setCode(value);
    }

    return (
        <div className="container mt-2">
            <div className="row mt-5">
                <div className="d-flex flex-column justify-content-start col-md-12">
                    <div className="col-md-12 d-flex justify-content-start align-items-baseline">
                            <div className="col-md-4 d-flex justify-content-start">
                                <Link to="/home/study-assignments">
                                    <FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" />
                                </Link>
                            </div>
                            <div className="d-flex justify-content-start col-md-5">
                                <h1 className="display-4">{assignment.name}</h1>
                            </div>    
                    </div>
                    <div className="border border-dark rounded mt-3">
                        <ReactMarkdown source={assignment.content} />
                    </div>
                    <div className="col-md-2 mt-2">
                        <select className="custom-select" onChange={(e) => setTheme(e.target.value)}>
                            { themes.map( (theme, index) => {
                              return <option value={theme} key={index}>{theme}</option>
                            })}
                        </select>
                    </div>
                    <div className="border border-dark rounded mt-3">
                        <AceEditor
                            mode="javascript"
                            theme={theme}
                            name="code"
                            onChange={onCodeChange}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            value={code}
                            setOptions={{
                                enableBasicAutocompletion: false,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                            style={{width: "100%", minHeight: "500px"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SolveAssignment);