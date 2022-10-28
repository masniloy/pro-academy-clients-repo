import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='container mt-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b># How does programming work?</b> </Accordion.Header>
                    <Accordion.Body>
                        Programming contains a set of instructions for the computer to perform different tasks. In fact, those instructions are executable commands, each having a different purpose.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b># What is debugging?</b></Accordion.Header>
                    <Accordion.Body>
                        Debugging is the process of finding and removing errors in a program. In this process, the program is thoroughly checked for errors. Then errors are pointed out and debugged.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b># Name different types of errors which can occur during the execution of a program?</b></Accordion.Header>
                    <Accordion.Body>
                        There are three types of errors which can occur during the execution of a program. <br />

                        # Syntax Errors<br />
                        # Runtime Errors<br />
                        # Logical errors<br />

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b># When a syntax error occurs?</b></Accordion.Header>
                    <Accordion.Body>
                        A syntax error occurs when the program violates one or more grammatical rules of the programming language. These errors are detected at compile time, i.e., when the translator (compiler or interpreter) attempts to translate the program.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><b>#  What is an algorithm?</b></Accordion.Header>
                    <Accordion.Body>
                        An algorithm is a finite set of steps which, if followed, accomplish a particular task. An algorithm must be clear, finite and effective.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><b># When a logical error occurs?</b></Accordion.Header>
                    <Accordion.Body>
                        The logical error happens when a program implements the wrong logic. The translator (compiler or interpreter) does not report any error message for a logical error. These errors are the most difficult to locate.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header><b># What is a flowchart?</b></Accordion.Header>
                    <Accordion.Body>
                        The flowchart is a pictorial representation of a program which helps in understanding the flow of control and data in the algorithm.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;