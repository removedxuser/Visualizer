import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Box, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAppBarStyles } from "./SearchBarMuiStyles";
import Menu from "./Menu";

function SearchAppBar() {
    const classes = useAppBarStyles();

    const [menuOpen, setMenuOpen] = React.useState(false);
    const searchRef = React.useRef<HTMLInputElement | null>(null);
    const menuRef = React.useRef<HTMLDivElement | null>(null);

    function handleClick(e: any) {
        if (menuRef.current?.contains(e.target) || searchRef.current?.contains(e.target)) {
            return;
        } else {
            setMenuOpen(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const [searchText, setSearchText] = React.useState("");

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: "rgba(27,31,35,0.8)" }}>
                <Container>
                    <Toolbar
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 0,
                        }}
                    >
                        <Box fontSize="1.5rem" fontFamily="Rock Salt">
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                Algorithms Visualizer
                            </Link>
                        </Box>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>

                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ "aria-label": "search" }}
                                onFocus={() => setMenuOpen(true)}
                                value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                                ref={searchRef}
                            />
                        </div>
                    </Toolbar>

                    <Box display="flex" justifyContent="flex-end">
                        {menuOpen && (
                            <div ref={menuRef}>
                                <Menu
                                    searchText={searchText}
                                    forceCloseMenu={() => {
                                        setSearchText("");
                                        setMenuOpen(false);
                                    }}
                                />
                            </div>
                        )}
                    </Box>
                </Container>
            </AppBar>
        </div>
    );
}

export { SearchAppBar };
