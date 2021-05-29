import React from "react";
import { SortMetaType, __sortMetaData__ } from "../../interfaces/searchMetaInfo";
import styles from "./Menu.module.css";
import { useHistory } from "react-router-dom";

interface Props {
    searchText: string;
    forceCloseMenu: () => void;
}

function filterOptions(v: string, options: Array<SortMetaType>): Array<SortMetaType> {
    return options.filter((o) => {
        return o.name.includes(v) || o.route.includes(v) || o.tC.includes(v);
    });
}

export default function Menu(props: Props) {
    const { searchText, forceCloseMenu } = props;
    const history = useHistory();
    const [state, setState] = React.useState<Array<SortMetaType>>(__sortMetaData__);

    React.useEffect(() => {
        setState(filterOptions(searchText, __sortMetaData__));
    }, [searchText]);

    return (
        <div className={styles.container}>
            <div className={styles.root}>
                {state.length ? (
                    state.map((item) => (
                        <div
                            className={styles.menuItem}
                            onClick={() => {
                                history.push(item.route);
                                forceCloseMenu();
                            }}
                        >
                            {item.name}
                            <br />
                            {item.tC}
                        </div>
                    ))
                ) : (
                    <div className={styles.nomenuItem}>No elements match to the search!</div>
                )}
            </div>
        </div>
    );
}
