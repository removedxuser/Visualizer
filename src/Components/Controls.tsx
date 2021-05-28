import { Button } from "@material-ui/core";
import React from "react";
import { unionSortClasses } from "../interfaces/genericInterfaces";

interface Props {
    instance: unionSortClasses | null;
}

interface State {
    start: boolean;
    pause: boolean;
    resume: boolean;
}

export default function Controls(props: Props) {
    const { instance } = props;

    const [state, setState] = React.useState<State>({
        start: true,
        pause: false,
        resume: false,
    });

    const handleStateChange = React.useCallback(
        (arg: Array<{ k: "start" | "pause" | "resume"; v: boolean }>) => {
            const finalState = {} as State;
            arg.forEach((_) => {
                finalState[_.k] = _.v;
            });
            setState({ ...state, ...finalState });
        },
        [] // eslint-disable-line react-hooks/exhaustive-deps
    );

    return (
        <>
            <Button
                color="primary"
                variant="contained"
                onClick={() => {
                    if (instance) {
                        instance.start();
                        handleStateChange([{ k: "pause", v: true }]);
                    }
                }}
                disabled={!state.start}
            >
                Start
            </Button>
            <Button
                color="primary"
                variant="contained"
                onClick={() => {
                    if (instance) {
                        instance.pause();
                        handleStateChange([
                            { k: "pause", v: false },
                            { k: "resume", v: true },
                        ]);
                    }
                }}
                style={{ marginLeft: "16px" }}
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
                        handleStateChange([
                            { k: "pause", v: true },
                            { k: "resume", v: false },
                        ]);
                    }
                }}
                style={{ marginLeft: "16px" }}
                disabled={!state.resume}
            >
                Resume
            </Button>
        </>
    );
}
