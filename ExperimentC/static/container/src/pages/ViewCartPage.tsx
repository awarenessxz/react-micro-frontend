import React from 'react';

const CartContent = React.lazy(() => import('app_mf_remote/CartContent'));

const ViewCartPage = (): JSX.Element => {
    return (
        <React.Suspense fallback={<div>Falling Back to Suspense...</div>}>
            <CartContent />
        </React.Suspense>
    );
};

export default ViewCartPage;
