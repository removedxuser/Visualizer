import { Box, Button, Slider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { unionSortClasses } from "../../interfaces/genericInterfaces";

interface Props {
    instance: unionSortClasses | null;
    defaultValues: { size: number; speed: number };
    maxValues: { size: number; speed: number };
}

interface StateButtons {
    start: boolean;
    pause: boolean;
    resume: boolean;
}

interface StateSliders {
    size: number;
    speed: number;
}

export default function Controls(props: Props) {
    const {
        instance,
        defaultValues: { size: dsize, speed: dspeed },
        maxValues: { size: msize, speed: mspeed },
    } = props;

    const [state, setState] = React.useState<StateButtons>({
        start: true,
        pause: false,
        resume: false,
    });

    const [sliderValues, setSliderValues] = React.useState<StateSliders>({
        size: dsize,
        speed: dspeed,
    });

    const handleButtonsStateChange = React.useCallback(
        (arg: Array<{ k: "start" | "pause" | "resume"; v: boolean }>) => {
            const finalState = {} as StateButtons;
            arg.forEach((p) => {
                finalState[p.k] = p.v;
            });
            setState({ ...state, ...finalState });
        },
        [] // eslint-disable-line react-hooks/exhaustive-deps
    );

    const handleSilderStateChange = React.useCallback((value: Partial<StateSliders>) => {
        setSliderValues({ ...sliderValues, ...{ ...value } });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box display="flex">
            <Button
                color="primary"
                variant="contained"
                onClick={() => {
                    if (instance) {
                        instance.start();
                        handleButtonsStateChange([{ k: "pause", v: true }]);
                    }
                }}
                style={{ width: "140px", height: "48px" }}
                disabled={!state.start}
            >
                Start/Reset
            </Button>
            <Button
                color="primary"
                variant="contained"
                onClick={() => {
                    if (instance) {
                        instance.pause();
                        handleButtonsStateChange([
                            { k: "pause", v: false },
                            { k: "resume", v: true },
                        ]);
                    }
                }}
                style={{ marginLeft: "16px", width: "140px", height: "48px" }}
                disabled={!state.pause}
            >
                Pause
            </Button>
            <Button
                color="primary"
                variant="contained"
                onClick={() => {
                    if (instance) {
                        instance.resume();
                        handleButtonsStateChange([
                            { k: "pause", v: true },
                            { k: "resume", v: false },
                        ]);
                    }
                }}
                style={{ marginLeft: "16px", width: "140px", height: "48px" }}
                disabled={!state.resume}
            >
                Resume
            </Button>
            <Box width="260px" ml="32px">
                <Typography id="discrete-slider-small-steps">
                    Array Size <span style={{ fontWeight: 700 }}>({sliderValues.size})</span>
                </Typography>
                <Slider
                    color="secondary"
                    defaultValue={dsize}
                    aria-labelledby="discrete-slider-small-steps"
                    step={50}
                    marks
                    min={50}
                    max={msize}
                    onChangeCommitted={(e, v) => {
                        if (instance) {
                            if ((v as number) % 50 === 0) {
                                instance.setSize(v as number);
                                instance.reinitialize();
                                handleSilderStateChange({ size: v as number });
                            }
                        }
                    }}
                    valueLabelDisplay="auto"
                />
            </Box>
            <Box width="260px" ml="32px">
                <Typography id="discrete-slider-small-steps">
                    Sorting Speed <span style={{ fontWeight: 700 }}>({sliderValues.speed})</span>
                </Typography>
                <Slider
                    color="secondary"
                    defaultValue={dspeed}
                    aria-labelledby="discrete-slider-small-steps"
                    step={10}
                    marks
                    min={10}
                    max={mspeed}
                    onChangeCommitted={(e, v) => {
                        if (instance) {
                            instance.setWait(Math.abs((v as number) - 100));
                            handleSilderStateChange({ speed: v as number });
                        }
                    }}
                    valueLabelDisplay="auto"
                />
            </Box>
        </Box>
    );
}
