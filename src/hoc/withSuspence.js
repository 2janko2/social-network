import React from "react";




export const withSuspence = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<h3> Please Wait! The page is loading ...  </h3>}>
            <Component {...props} />
        </React.Suspense>
    };
}

