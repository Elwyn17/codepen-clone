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

function Editor() {
    return (
        <Box>
            <CustomizedHeader>
                <CustomizedHeading>
                    <Box component="span"
                    style={{
                        background: 'red',
                        height: 20,
                        width: 20,
                        display: 'flex',
                        placeContent: 'center',
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom: 2
                    }}
                    >/</Box>
                    HTML
                </CustomizedHeading>
                <CloseFullscreenIcon />
            </CustomizedHeader>
            <ControlledEditor
                className="controlled-editor" />
        </Box>
    );
}

export default Editor;
