import React from 'react';
import {
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiTitle,
    EuiButton,
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';
import ErrorBoundary from "../components/ErrorBoundary";

interface productDetails {
    id: string;
    image: string;
    title: string;
    desc: string;
}

const products: productDetails[] = [
    {
        id: "p1111",
        image: "https://source.unsplash.com/400x200?Water",
        title: "Product A",
        desc: "Example of Product with id: p1111"
    },
    {
        id: "p2222",
        image: "https://source.unsplash.com/400x200?Nature",
        title: "Product B",
        desc: "Example of Product with id: p2222"
    },
    {
        id: "p3333",
        title: "Product C",
        image: "https://source.unsplash.com/400x200?City",
        desc: "Example of Product with id: p3333"
    },
];

const AddItemToCartButton = React.lazy(() => import("app_purchase/AddItemToCartButton"));

const ProductsPage = (): JSX.Element => {
    return (
        <EuiPageBody component="div">
            <EuiPageHeader>
                <EuiPageHeaderSection>
                    <EuiTitle size="l">
                        <h1>Products Page</h1>
                    </EuiTitle>
                </EuiPageHeaderSection>
            </EuiPageHeader>
            <EuiPageContent>
                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h2>List of all Products</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>
                    <EuiFlexGroup gutterSize="l">
                        {products.map((product, index) => (
                            <EuiFlexItem key={index}>
                                <EuiCard
                                    textAlign="left"
                                    image={product.image}
                                    title={product.title}
                                    description={product.desc}
                                    footer={
                                        <EuiFlexGroup justifyContent="flexEnd">
                                            <EuiFlexItem grow={false}>
                                                <ErrorBoundary>
                                                    <React.Suspense fallback={<div>Loading...</div>}>
                                                        <AddItemToCartButton item={product} />
                                                    </React.Suspense>
                                                </ErrorBoundary>
                                            </EuiFlexItem>
                                        </EuiFlexGroup>
                                    }
                                />
                            </EuiFlexItem>
                        ))}
                    </EuiFlexGroup>
                </EuiPageContentBody>
            </EuiPageContent>
        </EuiPageBody>
    );
};

export default ProductsPage;
