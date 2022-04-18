import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import React from "react";
import {CellValue} from "../game/Game";

interface SelectorPanelProps {
    selectedNumber: CellValue;
    setSelectedNumber: (newValue: CellValue) => void;
}

function SelectorPanel(props: SelectorPanelProps) {
    const oneToNine = Array.from({length: 9}, (_, i) => i + 1);

    const {selectedNumber, setSelectedNumber} = props;

    const handleSelectedNumberChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: CellValue,
    ) => {
        setSelectedNumber(newAlignment);
    };

    return (
        <ToggleButtonGroup
            exclusive
            value={selectedNumber}
            onChange={handleSelectedNumberChange}
        >
            {oneToNine.map(i =>
                <ToggleButton
                    key={'tglBtn-' + i}
                    value={i}
                >
                    {i}
                </ToggleButton>)}
        </ToggleButtonGroup>);
}

export default SelectorPanel;