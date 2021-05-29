import { Box, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { BreadcrumbNavigation, Crumb } from "./BreadcrumbNavigation";
import styles from "./HeaderComponent.module.css";

const CTypography = withStyles({
    root: {
        color: "#j202040",
    },
})(Typography);

function CTypographyTitle({ children }: { children: React.ReactNode }) {
    return <CTypography className={styles.root}>{children}</CTypography>;
}

function CTypographyWithBreadcrumbs({
    children,
    crumbs,
}: {
    children: React.ReactNode;
    crumbs: Array<Crumb>;
}) {
    return (
        <>
            <BreadcrumbNavigation crumbs={crumbs} />
            <CTypographyTitle>{children}</CTypographyTitle>
        </>
    );
}

function TitleComponent({ title, tC }: { title: string; tC: string }) {
    return (
        <Box display="flex" alignItems="center" component="span">
            <Box fontSize="2rem" component="span">
                {title}
            </Box>
            <Box component="span" ml="32px" mt="4px">
                Average Time Complexity: {tC}
            </Box>
        </Box>
    );
}

const [memoizedCTypographyTitle, memoizedCTypographyWithBreadCrumbs, memoizedTitleComponent] = [
    React.memo(CTypographyTitle),
    React.memo(CTypographyWithBreadcrumbs),
    React.memo(TitleComponent),
];

export {
    CTypography,
    memoizedCTypographyTitle as CTypographyTitle,
    memoizedCTypographyWithBreadCrumbs as CTypographyWithBreadcrumbs,
    memoizedTitleComponent as TitleComponent,
};
