import { Fragment, type ReactNode } from 'react';
import "./CookingArea.css";

interface CookingAreaProps {
    children?: ReactNode;
}

export default function CookingArea({ children }: CookingAreaProps) {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className="cookingArea rounded shadow-sm">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}