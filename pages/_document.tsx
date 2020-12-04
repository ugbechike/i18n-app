import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const { __NEXT_DATA__ } = this.props;
        const dir = __NEXT_DATA__.locale === 'ar' ? 'rtl' : 'ltr';
        return (
            <Html>
                <Head />
                <body dir={dir} lang={__NEXT_DATA__.locale}>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
