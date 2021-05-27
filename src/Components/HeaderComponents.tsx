import { Typography, withStyles } from "@material-ui/core";
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

const [memoizedCTypographyTitle, memoizedCTypographyWithBreadCrumbs] = [
    React.memo(CTypographyTitle),
    React.memo(CTypographyWithBreadcrumbs),
];

export {
    CTypography,
    memoizedCTypographyTitle as CTypographyTitle,
    memoizedCTypographyWithBreadCrumbs as CTypographyWithBreadcrumbs,
};
