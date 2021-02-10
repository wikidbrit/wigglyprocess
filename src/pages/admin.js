import Layout from "../components/layout";
import Form from "../components/form"
import AdminNewsField from "../components/adminnewsfield"

import SEO from "../components/seo";

import React from "react";

export default function admin() {
    return (
        <div>
            <Layout>
                <SEO title="admin" />
                <Form/>
                <AdminNewsField />
            </Layout>    
        </div>
    )
}
