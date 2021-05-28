import { Link, Breadcrumbs } from "@material-ui/core";
import React from "react";

export function generateCrumbs(...args: Array<Crumb>): Array<Crumb> {
    const defaultCrumb: Crumb = {
        crumbLabel: "Home",
        href: "/",
        active: true,
    };
    const generatedCrumbs = [defaultCrumb];
    if (args.length) {
        generatedCrumbs[0].active = false;
        for (let i = 0; i < args.length; i++) {
            generatedCrumbs.push(args[i]);
        }
        generatedCrumbs[generatedCrumbs.length - 1].active = true;
    }

    return generatedCrumbs;
}

export interface Crumb {
    crumbLabel: string;
    href: string;
    active: boolean;
}

interface Props {
    crumbs: Array<Crumb>;
}

function BreadCrumbs(props: Props) {
    const { crumbs } = props;

    return (
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
            {crumbs.map(({ crumbLabel, href, active }) => (
                <Link
                    color="textSecondary"
                    href={href}
                    style={!active ? { color: "lightgrey" } : {}}
                    key={crumbLabel}
                >
                    {crumbLabel}
                </Link>
            ))}
        </Breadcrumbs>
    );
}

const BreadcrumbNavigation = React.memo(BreadCrumbs);

export { BreadcrumbNavigation };
