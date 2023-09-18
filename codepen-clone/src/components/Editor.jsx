import { Box, styled} from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import React from "react";

import {Controlled as ControlledEditor} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const CustomizedHeading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`;

const CustomizedHeader = styled(Box)`
    display: flex;
    background: #060606;
    color: #aaaebc;
    justify-content: space-between;
    font-weight: 700;
`;

function Editor({ heading, icon, color,value, onChange }) {
    return (
        <Container>
            <CustomizedHeader>
                <CustomizedHeading>
                    <Box component="span"
                    style={{
                        background: color,
                        height: 20,
                        width: 20,
                        display: 'flex',
                        placeContent: 'center',
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom: 2,
                        color: '#000'
                    }}
                    >{icon}</Box>
                    {heading}
                </CustomizedHeading>
                <CloseFullscreenIcon />
            </CustomizedHeader>
            <ControlledEditor
                className="controlled-editor"
                value={value}
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </Container>
    );
}

export default Editor;
